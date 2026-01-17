"use client";

import { FullscreenButton } from "@vidstack/react";
import { FullscreenIcon, FullscreenExitIcon } from "@vidstack/react/icons";
import { useMediaState } from "@vidstack/react";

export default function MobileFullscreenButton({ playerColor }) {
  const isFull = useMediaState("fullscreen");

  return (
    <FullscreenButton style={{ color: playerColor.icons }}>
      {isFull ? (
        <FullscreenExitIcon className="fs-exit-icon vds-icon" size={70} />
      ) : (
        <FullscreenIcon className="fs-enter-icon vds-icon" size={70} />
      )}
    </FullscreenButton>
  );
}
