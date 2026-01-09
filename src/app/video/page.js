import VideoThumbnailsVertical from "@/components/Video/VideoThumbnailsVertical/VideoThumbnailsVertical";
import { videoDataBase } from "@/data/video-data-base";

export default function VideoPage() {
  const thumbnailList = videoDataBase.map((video) => ({
    id: video.id,
    src: video.thumbnail,
    alt: video.title || video.id,
  }));
  return (
    <div>
      <h1>IM THE VIDEO PAGE</h1>
      {/* MOBILE VERSION */}
      <div className="md:hidden">
        <VideoThumbnailsVertical images={thumbnailList} />
      </div>
    </div>
  );
}
