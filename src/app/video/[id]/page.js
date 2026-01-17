// ========== VIDEO ID PAGE ========== //

import { videoDataBase } from "@/data/video-data-base";
import { notFound } from "next/navigation";
import MobilePreview from "@/components/Video/VideoPreview/MobilePreview";
import WatchButton from "@/components/Video/VideoDetails/WatchButton";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";

// Generate static params for all videos at build time (better performance & SEO)
export async function generateStaticParams() {
  return videoDataBase.map((video) => ({
    id: video.id,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const video = videoDataBase.find((v) => v.id === id);

  if (!video) {
    return {
      title: "Video Not Found",
    };
  }

  return {
    title: `${video.title} | Video`,
    description: video.subtitle || `Watch ${video.title}`,
  };
}

export default async function VideoPageId({ params }) {
  const { id } = await params;

  // Validate that the video exists
  const video = videoDataBase.find((video) => video.id === id);
  if (!video) {
    notFound();
  }

  return (
    <div className="">
      {/* ==================== MOBILE ==================== */}
      <div className="xs:hidden p-4">
        <MobilePreview video={video} />
        <WatchButton />
        <VideoTitleMobile video={video} />
      </div>
    </div>
  );
}
