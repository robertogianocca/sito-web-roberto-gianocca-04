import { sugarMamaDescription } from "@/data/video-descriptions/sugar-mama-description";
import { hotSkyDescription } from "@/data/video-descriptions/hot-sky-description";
import { carieDescription } from "@/data/video-descriptions/carie-description";
import { metParachuteDescription } from "@/data/video-descriptions/met-parachute-description";

export const videoDataBase = [
  {
    id: "sugar-mama",
    vimeoId: "1132948199",
    title: "Sugar Mama",
    subtitle: (
      <>
        A music video for <span className="italic">Matt Pascale & The Stomps</span>
      </>
    ),
    credits: sugarMamaDescription.credits,
    links: sugarMamaDescription.links,
    description: sugarMamaDescription.description,
    cover:
      "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767704680/sugar-mama-cover_kdmwog.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767704679/sugar-mama-thumbnail_mduage.jpg",
    preview:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767704602/sugar-mama-video-preview_jnf1pm.mp4",
    previewMobile:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767531491/sugar-mama-video-preview-mobile_quzrjw.mp4",
  },
  {
    id: "hot-sky",
    vimeoId: "1133440458",
    title: "Hot Sky",
    subtitle: (
      <>
        A music video for <span className="italic">the Yuna Hawks</span>
      </>
    ),
    credits: hotSkyDescription.credits,
    links: hotSkyDescription.links,
    description: hotSkyDescription.description,
    cover: "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767703732/hot-sky-cover_sqwmyh.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767534097/hot-sky-thumbnail_aktcgh.jpg",
    preview:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767704140/hot-sky-video-preview_u58xjb.mp4",
    previewMobile:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767703733/hot-sky-video-preview-mobile_oqocpr.mp4",
  },
  {
    id: "carie",
    vimeoId: "676793805",
    title: "CARIE",
    subtitle: (
      <>
        A sports documentary film about <span className="italic">Carrara’s quarries</span>
      </>
    ),
    credits: carieDescription.credits,
    links: carieDescription.links,
    description: carieDescription.description,
    cover: "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767713764/carie-cover_zvf5dc.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767538035/carie-thumbnail_j2yoq7.jpg",
    preview:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767713763/carie-video-preview_jk3ute.mp4",
    previewMobile:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767713767/carie-video-preview-mobile_vhy68g.mp4",
  },
  {
    id: "met-parachute",
    vimeoId: "676799834",
    title: "MET Parachute MCR",
    subtitle: (
      <>
        A commercial for <span className="italic">MET Helmets Parachute MCR</span>
      </>
    ),
    credits: metParachuteDescription.credits,
    links: metParachuteDescription.links,
    description: metParachuteDescription.description,
    cover:
      "https://res.cloudinary.com/dqwtukgp2/image/upload/v1771599458/met-parachute-cover_da5ckh.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqwtukgp2/image/upload/v1771599457/met-parachute-thumbnail_djjbmb.jpg",
    preview:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1771599452/met-parachute-video-preview_fc8cjx.mp4",
    previewMobile:
      "https://res.cloudinary.com/dqwtukgp2/video/upload/v1771599469/met-parachute-video-preview-mobile_nqukow.mp4",
  },
  // {
  //   id: "MZANSI Festival",
  //   vimeoId: "1145671365",
  //   title: "MZANSI Festival",
  //   subtitle: (
  //     <>
  //       A sports documentary film about <span className="italic">Carrara’s quarries</span>
  //     </>
  //   ),
  //   credits: carieDescription.credits,
  //   links: carieDescription.links,
  //   description: carieDescription.description,
  //   cover: "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767713764/carie-cover_zvf5dc.jpg",
  //   thumbnail:
  //     "https://res.cloudinary.com/dqwtukgp2/image/upload/v1767538035/carie-thumbnail_j2yoq7.jpg",
  //   preview:
  //     "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767713763/carie-video-preview_jk3ute.mp4",
  //   previewMobile:
  //     "https://res.cloudinary.com/dqwtukgp2/video/upload/v1767713767/carie-video-preview-mobile_vhy68g.mp4",
  // },
];
