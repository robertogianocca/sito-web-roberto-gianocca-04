// MOBILE - TITLE AND SUBTITLE

export default function VideoTitleMobile({ video }) {
  return (
    <div key={`title-${video.id}`} className=" flex flex-col justify-center tracking-tight py-2">
      <h2 className="text-3xl">{video.title}</h2>
      <h3 className="text-base">{video.subtitle}</h3>
    </div>
  );
}
