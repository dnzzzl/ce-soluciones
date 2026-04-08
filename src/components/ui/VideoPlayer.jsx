import { useRef, useEffect } from 'react'

export default function VideoPlayer({ src, onEnded }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.src = src
    video.load()
    video.play().catch(() => {})
  }, [src])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      autoPlay
      playsInline
      preload="metadata"
      onEnded={onEnded}
    />
  )
}
