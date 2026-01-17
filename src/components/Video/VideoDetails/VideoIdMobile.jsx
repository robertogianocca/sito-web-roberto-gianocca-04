"use client";

import { useRef } from "react";
import MobilePreview from "@/components/Video/VideoPreview/MobilePreview";
import WatchButton from "@/components/Video/VideoDetails/WatchButton";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";

export default function VideoIdMobile({ video }) {
  const playerRef = useRef(null);

  function scrollToPlayer() {
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="xs:hidden p-4">
      <MobilePreview video={video} />
      <WatchButton scrollToPlayer={scrollToPlayer} />
      <div ref={playerRef} className="pt-4 pb-200">
        <VideoTitleMobile video={video} />
      </div>
    </div>
  );
}
