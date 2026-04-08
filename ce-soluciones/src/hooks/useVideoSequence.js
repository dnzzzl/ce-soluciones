import { useState, useCallback } from 'react'

export function useVideoSequence(sources) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sources.length)
  }, [sources.length])

  return {
    currentSrc: sources[currentIndex],
    handleEnded,
    currentIndex,
  }
}
