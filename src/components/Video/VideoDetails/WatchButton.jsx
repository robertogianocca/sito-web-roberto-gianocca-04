// WATCH BUTTON

export default function WatchButton({ scrollToPlayer }) {
  return (
    <button
      onClick={scrollToPlayer}
      className="lg:hidden w-full mt-4 py-2 px-6 bg-custom-red/50 border border-white/30 hover:bg-black/90 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium"
      aria-label="Watch video"
    >
      Watch Video
    </button>
  );
}
