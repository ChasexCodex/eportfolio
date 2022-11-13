export default function Loading() {
  return (
    <div className="fixed inset-0 z-10 kill-after-11">
      <video className="object-cover" src="/loader.mp4" autoPlay/>
    </div>
  )
}