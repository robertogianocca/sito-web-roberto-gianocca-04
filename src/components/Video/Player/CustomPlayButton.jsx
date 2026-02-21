"use client";

import { PlayButton } from "@vidstack/react";
import { PlayIcon, PauseIcon } from "@vidstack/react/icons";
import { useMediaState } from "@vidstack/react";

export default function CustomPlayButton({ playerColor }) {
  const isPaused = useMediaState("paused");

  return (
    <PlayButton
      className="vds-button play-button"
      style={{
        color: playerColor.playButtonText,
        backgroundColor: playerColor.playButtonBg,
      }}
    >
      {isPaused ? (
        <>
          <PlayIcon className="play-icon vds-icon" />
          {/* <p className="text-base font-bold">Play</p> */}
        </>
      ) : (
        <>
          <PauseIcon className="pause-icon vds-icon" />
          {/* <p className="text-base font-bold">Pause</p> */}
        </>
      )}
    </PlayButton>
  );
}
