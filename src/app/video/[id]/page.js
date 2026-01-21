// ========== VIDEO ID PAGE ========== //

import VideoIdMobile from "@/components/Video/VideoDetails/VideoIdMobile";
import VideoIdDesktop from "@/components/Video/VideoDetails/VideoIdDesktop";
import { videoDataBase } from "@/data/video-data-base";
import { notFound } from "next/navigation";

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
      <div className="lg:hidden">
        <VideoIdMobile video={video} />
      </div>
      <div className="hidden lg:block">
        {/* ==================== DESKTOP ==================== */}
        <VideoIdDesktop video={video} />
      </div>
    </div>
  );
}
