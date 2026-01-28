// ========== ID DESKTOP ========== //

import NavigationBarDesk from "@/components/Menu/Desktop/NavigationBarkDesk";
import Player from "@/components/Video/Player/Player";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";

export default function VideoIdDesktop({ video }) {
  return (
    <div className="grid-custom pb-100">
      <div className="col-span-2">
        <NavigationBarDesk />
        {/* <div className="absolute inset-0 bg-black w-full h-dvh backdrop-blur-2xl opacity-65"></div> */}
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
