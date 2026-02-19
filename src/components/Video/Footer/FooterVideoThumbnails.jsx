"use client";

import { useParams } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { videoDataBase } from "@/data/video-data-base";

export default function FooterVideoThumbnails() {
  const path = useParams();
  const url = path.id;

  if (!videoDataBase || videoDataBase.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No videos available at the moment.</p>
      </div>
    );
  }

  const mappedVideo = videoDataBase.map((video, index) => {
    const isSelected = url === video.id || (!url && index === 0);

    // Don't render the li at all if selected
    if (isSelected) return null;

    return (
      <motion.li
        key={video.id}
        className="w-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 0.3 + index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Link href={`/video/${video.id}`} aria-label={`View ${video.title ?? video.id} video`}>
          <Image
            src={video.thumbnail}
            draggable={false}
            priority={index === 0}
            width={192}
            height={108}
            sizes="(min-width:769px) 400px, 100vw"
            className="transition-all duration-300 rounded-2xl brightness-70 hover:brightness-100 hover:scale-[1.02]"
            alt={`${video.id}-thumbnail`}
          />
        </Link>
        <p className="text-black text-2xs mt-2 leading-4">{video.subtitle}</p>
      </motion.li>
    );
  });

  return mappedVideo;
}
