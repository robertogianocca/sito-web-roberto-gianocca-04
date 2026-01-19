"use client";

import { useRef, useState } from "react";
import { MediaPlayer, MediaProvider, Controls, Gesture } from "@vidstack/react";
import MobilePlayButton from "@/components/Video/Player/PlayerMobile/MobilePlayButton";
import MobileFullscreenButton from "@/components/Video/Player/PlayerMobile/MobileFullscreenButton";

export default function PlayerMobile({ video, player }) {
  const playerColor = {
    playButtonBg: "",
    playButtonText: "white",
    icons: "white",
    backBar: "grey",
    timeBar: "white",
    progressBar: "grey",
    volumeDot: "white",
  };

  const src = {
    src: `vimeo/${video.vimeoId}`,
    type: "video/vimeo",
  };

  // const player = useRef(null);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);

  return (
    <div className="flex flex-col">
      <MediaPlayer
        key={video.id}
        ref={player}
        src={src}
        viewType="video"
        aspectRatio="16/9"
        style={{ width: "100%", height: "auto" }}
        load="idle"
        playsInline
        className="player-wrapper-mobile flex flex-col relative "
        playbackRate={1} // Add this line - locks it to normal speed
      >
        <MediaProvider className="provider-mobile" />
        <Gesture
          event="pointerup"
          action="toggle:paused"
          className="absolute inset-0 pointer-events-none"
          aria-hidden="false"
        />
        <Controls.Root className="vds-controls-mobile">
          <div className="flex flex-row pointer-events-auto z-100">
            <MobilePlayButton playerColor={playerColor} />
            <MobileFullscreenButton playerColor={playerColor} />
          </div>
        </Controls.Root>
      </MediaPlayer>
    </div>
  );
}
