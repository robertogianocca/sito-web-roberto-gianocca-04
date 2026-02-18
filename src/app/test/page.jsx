"use client";

import { useRef, useEffect } from "react";

export default function TestPage() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY < 0 ? -90 : 90,
      });
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-row overflow-x-scroll overflow-y-hidden h-screen w-screen"
      //   style={{
      //     scrollSnapType: "x proximity", // Changed from 'mandatory' to 'proximity'
      //   }}
    >
      {/* SECTION 1 */}
      <section
        className="flex-shrink-0 w-screen h-screen bg-red-200 p-10"
        style={{ scrollSnapAlign: "center" }} // Changed from 'start' to 'center'
      >
        <div className="grid grid-cols-3 gap-10 h-full">
          <div>
            <h1 className="text-3xl font-bold mb-4">SECTION 1</h1>
          </div>
          <div className="flex items-center">
            <p className="text-sm leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
          </div>
          <div className="bg-amber-200 rounded-lg flex items-center justify-center h-64">
            <span className="text-gray-600">Video Player Here</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="flex-shrink-0 w-screen h-screen bg-amber-500 p-10"
        style={{ scrollSnapAlign: "center" }}
      >
        <div className="grid grid-cols-3 gap-10 h-full">
          <div>
            <h1 className="text-3xl font-bold mb-4">SECTION 2</h1>
          </div>
          <div className="flex items-center">
            <p className="text-sm leading-relaxed">Section 2 content here.</p>
          </div>
          <div className="bg-amber-200 rounded-lg flex items-center justify-center h-64">
            <span className="text-gray-600">Video Player Here</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        className="flex-shrink-0 w-screen h-screen bg-blue-500 p-10"
        style={{ scrollSnapAlign: "center" }}
      >
        <div className="grid grid-cols-3 gap-10 h-full">
          <div>
            <h1 className="text-3xl font-bold mb-4">SECTION 3</h1>
          </div>
          <div className="flex items-center">
            <p className="text-sm leading-relaxed">Section 3 content here.</p>
          </div>
          <div className="bg-amber-200 rounded-lg flex items-center justify-center h-64">
            <span className="text-gray-600">Video Player Here</span>
          </div>
        </div>
      </section>
    </div>
  );
}
