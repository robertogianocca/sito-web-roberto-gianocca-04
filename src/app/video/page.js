/* ========== VIDEO PAGE ========== */

import VideoThumbnails from "@/components/Video/VideoThumbnails";
import VideoThumbnailsVertical from "@/components/Video/VideoThumbnailsVertical/VideoThumbnailsVertical";
import { videoDataBase } from "@/data/video-data-base";

export default function VideoPage() {
  const thumbnailsList = videoDataBase.map((video) => ({
    id: video.id,
    src: video.thumbnail,
    alt: video.title,
  }));
  return (
    <>
      {/* ========== DESKTOP VERSION ========== */}
      <div className="hidden md:grid lg:grid-cols-5 gap-20 col-span-2 p-8">
        <div className="col-span-2">
          <h1 className="text-3xl pb-4">Video</h1>
          <p className="pb-4">
            Is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className="col-span-3">
          <VideoThumbnails />
        </div>
      </div>
      {/* ========== MOBILE VERSION ========== */}
      <div className="md:hidden flex flex-col">
        <div className="absolute top-0 z-90 w-full p-6 col-span-3">
          <h1 className="text-3xl pb-4">Video</h1>
          <p>
            Is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>

        <VideoThumbnailsVertical images={thumbnailsList} />
      </div>
    </>
  );
}
