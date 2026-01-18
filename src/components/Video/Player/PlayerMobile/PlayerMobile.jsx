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
        poster="/public/textures/texture-background-01.webp"
        className="flex flex-col"
        playbackRate={1}  // Add this line - locks it to normal speed
        

      >
        <MediaProvider />
        {/* <Gesture className="vds-gesture" event="pointerup" action="toggle:controls" /> */}

        <Controls.Root className="vds-controls-mobile" >
        <div className="flex flex-row">
          <div className="pointer-events-auto">
          <MobilePlayButton playerColor={playerColor} />
          </div>
          <div className="pointer-events-auto">
          <MobileFullscreenButton playerColor={playerColor} />
          </div>
        </div>
        </Controls.Root>

      </MediaPlayer>
    </div>
  );
}
