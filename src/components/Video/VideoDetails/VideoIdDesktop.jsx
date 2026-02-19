// ========== ID DESKTOP ========== //

"use client";
import { useRef, useEffect } from "react";
import NavigationBarDesk from "@/components/Menu/Desktop/NavigationBarkDesk";
import Player from "@/components/Video/Player/Player";
import VideoTitleMobile from "@/components/Video/VideoDetails/VideoTitleMobile";
import FooterVideoThumbnails from "@/components/Video/Footer/FooterVideoThumbnails";
import Footer from "@/components/Footer/Footer";

export default function VideoIdDesktop({ video }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY < 0 ? -90 : 90,
      });
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="flex flex-row overflow-x-scroll overflow-y-hidden h-[75%]"
      >
        <section className="grid-custom flex-shrink-0 w-screen">
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
        </section>
        <section className="grid-custom flex-shrink-0 w-screen">
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
        </section>
      </div>
      <Footer>
        <p className="text-black text-base mb-2">Other Videos:</p>
        <ul role="list" className="flex gap-x-5">
          <FooterVideoThumbnails />
        </ul>
      </Footer>
    </>
  );
}
