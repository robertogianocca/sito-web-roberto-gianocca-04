"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { videoDataBase } from "@/data/video-data-base";

/**
 * MobileMenu Component
 *
 * A full-screen mobile menu overlay that appears when opened.
 * Uses React Portal to render outside the NavigationBar hierarchy,
 * ensuring proper viewport positioning (fixed positioning relative to viewport,
 * not the parent container).
 *
 * @param {boolean} isOpen - Controls menu visibility
 * @param {function} onNavigate - Callback to close the menu (called on backdrop click or link click)
 */
export default function MobileMenu({ isOpen, onNavigate }) {
  const videoList = videoDataBase.map((video) => {
    return (
      <li key={video.id + " mobileMenu"} className="text-xl pb-4">
        <Link href={`/video/${video.id}`}>
          <button>{video.title}</button>
        </Link>
      </li>
    );
  });

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 
            BACKDROP/OVERLAY BUTTON
            - Covers entire viewport with semi-transparent dark background
            - Clickable to close the menu (onClick={onNavigate})
            - Provides visual separation between menu and page content
            - z-99 ensures it's below NavigationBar (z-100) but above page content
          */}
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-99 bg-black/70 backdrop-blur-md"
            onClick={onNavigate}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* 
            MENU CONTAINER
            - Centers the menu card in the viewport
            - pointer-events-none allows clicks to pass through to backdrop button
            - Only the menu card itself (child) has pointer-events-auto to be interactive
          */}
          <motion.div
            className="fixed inset-0 z-99 flex items-center justify-center p-6 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 
              MENU CARD
              - The actual menu content container
              - pointer-events-auto makes it interactive (links, buttons work)
              - Animation: slides up from 40px below, fades in, scales from 95% to 100%
              - Exit: slides down 20px, fades out, scales to 95%
              - max-h-[90vh] prevents overflow on small screens, enables scrolling if needed
            */}
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm rounded-3xl border border-white/10 bg-custom-white-base/40 p-6 shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <nav className="flex flex-col items-center text-custom-white-base">
                <ol type="1">
                  <li className="text-4xl pb-4">
                    <Link
                      href="/video"
                      onClick={onNavigate}
                      className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full "
                    >
                      <h1>Video</h1>
                    </Link>
                  </li>
                  {videoList}
                </ol>
              </nav>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Server-side rendering check: portal requires browser DOM
  if (typeof window === "undefined") {
    return null;
  }

  //
  // REACT PORTAL
  // Renders menu directly into document.body, escaping the NavigationBar's
  // positioning context. This ensures fixed positioning works relative to viewport,
  // not the parent container.
  //
  return createPortal(menuContent, document.body);
}
