"use client";
import { useRef, useState } from "react";
import { MediaPlayer, MediaProvider, Gesture, Controls, useMediaStore } from "@vidstack/react";
import { Spinner } from "@vidstack/react";
import PlayerPlaceholderVideo from "./PlayerPlaceholderVideo";
import ControlsBackground from "./ControlsBackground";
import CustomPlayButton from "./CustomPlayButton";
import CustomFullscreenButton from "./CustomFullscreenButton";
import VolumeControl from "./VolumeControl";
import TimeDisplay from "./TimeDisplay";
import VideoTimeSlider from "./VideoTimeSlider";
import HoverCursor from "./HoverCursor";

export default function PlayerMobile({ video }) {
  const src = {
    src: `vimeo/${video.vimeoId}`,
    type: "video/vimeo",
  };

  const player = useRef(null);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);

  const { canPlay } = useMediaStore(player);
  const isReady = canPlay;

  const [hoverHandlers, setHoverHandlers] = useState({
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    cursorStyle: "auto",
  });

  const playerColor = {
    playButtonBg: "white",
    playButtonText: "black",
    icons: "white",
    backBar: "grey",
    timeBar: "white",
    progressBar: "grey",
    volumeDot: "white",
  };

  return (
    <>
      {/* <PlayerPlaceholderVideo video={video} /> */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video min-h-[200px]"
        style={{ cursor: hoverHandlers.cursorStyle }}
        onMouseEnter={hoverHandlers.onMouseEnter}
        onMouseLeave={hoverHandlers.onMouseLeave}
      >
        <MediaPlayer
          //   className="w-full h-full"
          key={video.id}
          load="idle"
          autoplay
          src={src}
          ref={player}
          viewType="video"
          aspectRatio="16/9"
          playsInline
          poster={video.thumbnail}
          posterLoad="eager"
          //   autoPlay
          style={{ cursor: hoverHandlers.cursorStyle, width: "100%", height: "100%" }}
        >
          <MediaProvider />
          <div className="pointer-events-none absolute inset-0 z-50 flex h-full w-full items-center justify-center">
            <Spinner.Root
              className="text-white opacity-0 transition-opacity duration-200 ease-linear media-buffering:animate-spin media-buffering:opacity-100"
              size={84}
            >
              <Spinner.Track className="opacity-25" width={80} />
              <Spinner.TrackFill className="opacity-75" width={80} />
            </Spinner.Root>
          </div>
          <Gesture
            event="click"
            action="toggle:paused"
            className="absolute inset-0"
            aria-hidden="false"
          />
          <Gesture className="vds-gesture" event="pointerup" action="toggle:controls" />
          <Controls.Root
            className="vds-controls justify-end bg-red-200/20 h-[500px]"
            ref={controlsRef}
          >
            {/* <ControlsBackground /> */}
            <Controls.Group className="bg-green-500">
              <div className="flex flex-row justify-between px-3 pb-1.5">
                <div className="flex flex-row items-center">
                  <CustomPlayButton playerColor={playerColor} />
                  <CustomFullscreenButton playerColor={playerColor} />
                  <VolumeControl playerColor={playerColor} />
                </div>
                <div className="flex flex-row items-center">
                  <TimeDisplay playerColor={playerColor} />
                </div>
              </div>
              <VideoTimeSlider playerColor={playerColor} />
            </Controls.Group>
          </Controls.Root>
          <HoverCursor
            containerRef={containerRef}
            playerRef={player}
            playerColor={playerColor}
            onHandlersChange={setHoverHandlers}
          />
        </MediaPlayer>
      </div>
    </>
  );
}
