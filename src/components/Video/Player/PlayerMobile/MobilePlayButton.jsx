"use client";

import { PlayButton } from "@vidstack/react";
import { PlayIcon, PauseIcon } from "@vidstack/react/icons";
import { useMediaState } from "@vidstack/react";

export default function MobilePlayButton({ playerColor }) {
  const isPaused = useMediaState("paused");

  return (
    <PlayButton
      style={{
        color: playerColor.playButtonText,
        backgroundColor: playerColor.playButtonBg,
      }}
    >
      {isPaused ? (
        <>
          <PlayIcon className="play-icon vds-icon" size={70} />
        </>
      ) : (
        <>
          <PauseIcon className="pause-icon vds-icon" size={70} />
        </>
      )}
    </PlayButton>
  );
}
