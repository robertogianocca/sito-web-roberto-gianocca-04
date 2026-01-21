// ========== ID DESKTOP ========== //

import Player from "@/components/Video/Player/Player";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";

export default function VideoIdDesktop({ video }) {
  return (
    <div className="grid grid-cols-5 p-4 pb-100">
      <div className="col-span-2">
        <VideoTitleMobile video={video} />
        {video.credits}
        {video.description}
      </div>
      <div className="col-span-3">
        <Player video={video} />
      </div>
    </div>
  );
}
