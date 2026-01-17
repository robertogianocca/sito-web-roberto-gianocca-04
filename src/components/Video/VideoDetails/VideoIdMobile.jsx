"use client";

import { useRef } from "react";
import MobilePreview from "@/components/Video/VideoPreview/MobilePreview";
import WatchButton from "@/components/Video/VideoDetails/WatchButton";
import PlayerMobile from "@/components/Video/Player/PlayerMobile/PlayerMobile";
import Player from "@/components/Video/Player/Player";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";

export default function VideoIdMobile({ video }) {
  const playerRef = useRef(null);

  function scrollToPlayer() {
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="p-4">
      <MobilePreview video={video} />
      <WatchButton scrollToPlayer={scrollToPlayer} />
      <div ref={playerRef} className="h-screen flex flex-col pt-4 gap-y-50 mb-[500px]">
        <VideoTitleMobile video={video} />
        <PlayerMobile video={video} />
        <Player video={video} />
      </div>
    </div>
  );
}
