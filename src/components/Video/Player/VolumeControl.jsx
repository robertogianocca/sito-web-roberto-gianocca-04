"use client";

import { MuteButton, VolumeSlider } from "@vidstack/react";
import { MuteIcon, VolumeLowIcon, VolumeHighIcon } from "@vidstack/react/icons";
import { useMediaState } from "@vidstack/react";

export default function VolumeControl({ playerColor }) {
  const isMuted = useMediaState("muted");
  const volume = useMediaState("volume");

  return (
    <>
      <MuteButton className="vds-button mr-3!" style={{ color: playerColor.icons }}>
        {isMuted || volume == 0 ? (
          <MuteIcon className="mute-icon vds-icon" />
        ) : volume < 0.5 ? (
          <VolumeLowIcon className="volume-low-icon vds-icon" />
        ) : (
          <VolumeHighIcon className="volume-high-icon vds-icon" />
        )}
      </MuteButton>
      <div className="w-15 rounded-none! hidden md:flex">
        <VolumeSlider.Root className="vds-slider rounded-none!">
          <VolumeSlider.Track
            className="vds-slider-track rounded-none! h-1!"
            style={{ backgroundColor: playerColor.backBar }}
          />
          <VolumeSlider.TrackFill
            className="vds-slider-track-fill vds-slider-track rounded-none! h-1!"
            style={{ backgroundColor: playerColor.timeBar }}
          />
          <VolumeSlider.Thumb
            className="vds-slider-thumb opacity-100! border-none! w-3! h-3! "
            style={{ backgroundColor: playerColor.volumeDot }}
          />
        </VolumeSlider.Root>
      </div>
    </>
  );
}
