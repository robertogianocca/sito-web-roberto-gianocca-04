"use client";
import { useRef, useState } from "react";
import {
  MediaPlayer,
  MediaProvider,
  Gesture,
  Controls,
  useMediaStore,
  Poster,
} from "@vidstack/react";
import PlayerPlaceholderVideo from "./PlayerPlaceholderVideo";
import ControlsBackground from "./ControlsBackground";
import CustomPlayButton from "./CustomPlayButton";
import CustomFullscreenButton from "./CustomFullscreenButton";
import VolumeControl from "./VolumeControl";
import TimeDisplay from "./TimeDisplay";
import VideoTimeSlider from "./VideoTimeSlider";
import HoverCursor from "./HoverCursor";
import { motion } from "motion/react";
import Image from "next/image";

export default function Player({ video }) {
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <PlayerPlaceholderVideo video={video} />
        <div
          ref={containerRef}
          className="relative w-full aspect-video min-h-[200px]"
          style={{ cursor: hoverHandlers.cursorStyle }}
          onMouseEnter={hoverHandlers.onMouseEnter}
          onMouseLeave={hoverHandlers.onMouseLeave}
        >
          <MediaPlayer
            viewType="video"
            load="idle"
            key={video.id}
            ref={player}
            src={src}
            playsInline
            className="w-full h-full"
            aspectRatio="16/9"
            style={{ cursor: hoverHandlers.cursorStyle, width: "100%", height: "100%" }}
          >
            <MediaProvider>
              <Poster className="vds-poster" src=""></Poster>
            </MediaProvider>
            <Gesture
              event="click"
              action="toggle:paused"
              className="absolute inset-0"
              aria-hidden="false"
            />
            <Gesture className="vds-gesture" event="pointerup" action="toggle:controls" />
            <Controls.Root className="vds-controls justify-end" ref={controlsRef}>
              <ControlsBackground />
              <Controls.Group className="vds-controls-group ">
                <div className="buttons-bar flex flex-row justify-between px-3 pb-1.5">
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
      </motion.div>
    </>
  );
}
