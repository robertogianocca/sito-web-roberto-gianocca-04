"use client";

import { useParams } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { videoDataBase } from "@/data/video-data-base";

export default function VideoThumbnails() {
  const path = useParams();
  const url = path.id;

  // Check if data exists and is not empty
  if (!videoDataBase || videoDataBase.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No videos available at the moment.</p>
      </div>
    );
  }

  const mappedVideo = videoDataBase.map((video, index) => {
    const isSelected = url === video.id || (!url && index === 0);
    return (
      <motion.li
        key={video.id}
        className="mb-4 rounded-2xl overflow-hidden "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // whileTap={enableNavigation ? { scale: 0.95 } : undefined}
        // whileTap={{ scale: 0.95 }}
        transition={{
          duration: 2,
          // Stagger delay: 0.1s between each thumbnail
          delay: 0.3 + index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Link href={`/video/${video.id}`} aria-label={`View ${video.title ?? video.id} video`}>
          <Image
            src={video.thumbnail}
            draggable={false}
            priority={index === 0}
            width={1920}
            height={1080}
            sizes="(min-width:769px) 400px, 100vw"
            className={`transition-all duration-300 rounded-2xl ${
              isSelected
                ? "scale-[1.05]"
                : "brightness-[0.25] hover:brightness-[0.65] hover:scale-[1.02]"
            } `}
            alt={`${video.id}-thumbnail`}
          />
        </Link>
      </motion.li>
    );
  });

  return (
    <ul role="list" className="grid grid-cols-3 gap-x-5">
      {mappedVideo}
    </ul>
  );
}
