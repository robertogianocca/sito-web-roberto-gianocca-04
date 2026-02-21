"use client";

import { Time } from "@vidstack/react";

export default function TimeDisplay({ playerColor }) {
  return (
    <div className="vds-time-group text-xs!" style={{ color: playerColor.icons }}>
      <Time className="vds-time text-xs!" type="current" />
      <p className="vds-time-divider" style={{ color: playerColor.icons }}>
        /
      </p>
      <Time className="vds-time text-xs!" type="duration" />
    </div>
  );
}
