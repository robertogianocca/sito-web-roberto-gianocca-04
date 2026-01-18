"use client";

import { useRef } from "react";
import MobilePreview from "@/components/Video/VideoPreview/MobilePreview";
import WatchButton from "@/components/Video/VideoDetails/WatchButton";
import PlayerMobile from "@/components/Video/Player/PlayerMobile/PlayerMobile";
import Player from "@/components/Video/Player/Player";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";

export default function VideoIdMobile({ video }) {
  const positionRef = useRef(null);
  const playerRef = useRef(null); // This now references the PlayerMobile component

  function scrollToPlayer() {
    if (positionRef.current) {
      positionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
     // Wait for scroll to finish, then play the video
     setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, 500); // Adjust timing based on your scroll duration
    }
  }

  return (
    <div className="p-4">
      <MobilePreview video={video} />
      <WatchButton scrollToPlayer={scrollToPlayer} />
      <div ref={positionRef} className="flex flex-col pt-4 gap-y-10">
        <VideoTitleMobile video={video} />
        {video.credits}
        <PlayerMobile player={playerRef} video={video} />
        {video.description}
        <Player video={video} />
      </div>
    </div>
  );
}
