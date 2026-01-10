1. "use client";
   "use client";

This tells Next.js App Router:

This component runs in the browser

It can use:

useState
useEffect
DOM APIs (getBoundingClientRect, scroll events)

Without this:
❌ React hooks would fail
❌ No scrolling logic could run

2. Imports
   import { useEffect, useRef, useState } from "react";
   import Image from "next/image";
   import Link from "next/link";
   import "./VideoThumbnailsVertical.css";

What each one does:

useState
Stores which thumbnail is currently focused

useRef
Stores DOM references without triggering re-renders

useEffect
Runs side effects:
Scroll listeners
Ref syncing

3. Component signature
   export default function VideoThumbnailsVertical({ images = [] }) {

Receives an array of images
Default is an empty array (prevents crashes)
Each image is assumed to have:

{
src,
alt,
id
}

4. Refs and State
   const containerRef = useRef(null);
   const itemRefs = useRef([]);
   const [focusedIndex, setFocusedIndex] = useState(0);

containerRef
Refers to the scrollable container
Used to:
Listen for scroll events
Measure its position

itemRefs
Array of refs — one per thumbnail
Used to:
Measure each item’s position
which one is closest to center
useRef([]) persists between renders without re-rendering.

focusedIndex
Index of the item currently closest to the vertical center
Drives:
opacity
blur
scale
brightness

5. Keeping refs in sync with images
   useEffect(() => {
   itemRefs.current = itemRefs.current.slice(0, images.length);
   }, [images.length]);

Why this exists
React does not automatically remove refs when items disappear.

If:
images.length shrinks
Old refs remain in memory
This line:
Trims itemRefs.current
Prevents:
measuring non-existent DOM nodes
memory leaks

6. Scroll detection effect (the heart of the component)
   useEffect(() => {
   const container = containerRef.current;
   if (!container) return;

What’s happening:
Get the scroll container DOM node
Bail out if not mounted yet

6.1 requestAnimationFrame throttle
let rafId = null;

Why?

Scroll events fire many times per frame

Measuring DOM is expensive

This ensures:

At most 1 calculation per animation frame (~16ms)

6.2 Scroll handler
const handleScroll = () => {
if (rafId !== null) return;

Prevents multiple RAFs from stacking.

6.3 Measure container center
const containerRect = container.getBoundingClientRect();
const centerY = containerRect.top + containerRect.height / 2;

You calculate:

The vertical center of the visible scroll area

This is your “focus line”.

6.4 Find closest item to center
let closestIndex = focusedIndex;
let closestDistance = Infinity;

Initialize comparison values.

itemRefs.current.forEach((item, index) => {
if (!item) return;

const rect = item.getBoundingClientRect();
const itemCenterY = rect.top + rect.height / 2;
const distance = Math.abs(itemCenterY - centerY);

For each thumbnail:

Measure its center

Measure distance to container center

6.5 Pick the focused item
if (distance < closestDistance) {
closestDistance = distance;
closestIndex = index;
}

Result:

The thumbnail closest to the screen center becomes “focused”

6.6 Avoid unnecessary state updates
if (closestIndex !== focusedIndex) {
setFocusedIndex(closestIndex);
}

This is critical:

Prevents infinite re-renders

Prevents janky scrolling

6.7 Attach scroll listener
container.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

passive: true → better scroll performance

Initial call ensures correct focus on mount

6.8 Cleanup
return () => {
container.removeEventListener("scroll", handleScroll);
if (rafId !== null) cancelAnimationFrame(rafId);
};

Prevents:

Memory leaks

Zombie scroll listeners

7. JSX Layout Structure
<div ref={containerRef} className="... overflow-y-scroll snap-y snap-mandatory">

This is:

The scrollable vertical viewport

Uses CSS scroll snapping

7.1 Fixed header

<div className="absolute top-0 z-90 w-full p-4">

Overlays content

Does NOT scroll

Stays pinned visually

7.2 Flex column container

<div className="flex flex-col items-center">

Everything scrolls inside this.

7.3 Top spacer

<div className="h-[50vh]" />

Purpose:

Allows first item to reach vertical center

Without it → first item sticks to top

Same logic applies to bottom spacer.

8. Rendering thumbnails
   {images.map((image, index) => {

Loop through thumbnails.

8.1 Distance-based calculations
const distance = Math.abs(index - focusedIndex);

This is logical distance, not pixel distance.

Normalization
const maxDistance = 2;
const normalized = Math.min(distance / maxDistance, 1);

This clamps effects so:

Items more than 2 away behave the same

8.2 Visual effects
const opacity = Math.max(0.3, 1 - normalized _ 1.2);
const blur = normalized _ 8;
const brightness = Math.max(0.4, 1 - normalized _ 0.6);
const scale = Math.max(0.85, 1 - normalized _ 0.15);

Focused item:

Sharp

Bright

Large

Fully opaque

Far items:

Blurry

Dim

Smaller

Transparent

8.3 Thumbnail wrapper

<div
  ref={(el) => (itemRefs.current[index] = el)}
  className="snap-center ..."
  style={{ ... }}
>

This:

Stores the DOM ref

Enables snap-to-center

Applies dynamic styles

8.4 Navigation & image

<Link href={`/video/${image.id}`}>

Clickable thumbnail → video page.

<Image
  src={image.src}
  fill
  className="object-cover"
/>

Optimized image loading

Responsive sizing

Aspect ratio preserved

9. Bottom spacer
<div className="h-[50vh]" />

Allows the last item to center.

Final Mental Model

Think of this component as:

“A vertical reel where the item closest to the screen center becomes the hero, and everything else fades away smoothly.”

Summary Table
Part Purpose
Refs Access DOM nodes
Scroll listener Track scroll position
RAF Performance
Geometry math Find centered item
State Drive visual effects
CSS snap Smooth scrolling
Spacers Center alignment

If you want, next I can:

Draw a diagram of the scroll math

Rewrite this in simpler terms

Explain IntersectionObserver version

Or explain how to debug this visually

Just tell me 👍
