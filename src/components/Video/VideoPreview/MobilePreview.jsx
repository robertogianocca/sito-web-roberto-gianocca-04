export default function MobilePreview({ video }) {
  return (
    <video width="432" height="540" autoPlay loop muted playsInline className="w-full">
      <source src={video.previewMobile} type="video/mp4" />
    </video>
  );
}
