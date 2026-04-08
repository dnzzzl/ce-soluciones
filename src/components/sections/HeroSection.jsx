import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import VideoPlayer from '../ui/VideoPlayer'
import { useVideoSequence } from '../../hooks/useVideoSequence'
import { content } from '../../data/content'

import video1 from '../../assets/videos/video-closet-walkthrough.mp4'
import video2 from '../../assets/videos/video-kitchen-pan.mp4'
import video3 from '../../assets/videos/video-closet-progress.mp4'

const videos = [video1, video2, video3]

export default function HeroSection() {
  const { currentSrc, handleEnded } = useVideoSequence(videos)
  const prefersReduced = useReducedMotion()

  const Wrapper = prefersReduced ? 'div' : motion.div
  const wrapperProps = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
      }

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <VideoPlayer src={currentSrc} onEnded={handleEnded} />
      <div className="absolute inset-0 bg-black/52" />

      <Wrapper
        {...wrapperProps}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <span className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-gold">
          {content.hero.eyebrow}
        </span>

        <h1 className="mx-auto max-w-4xl font-display text-hero font-bold text-white">
          {content.hero.heading}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90 md:text-xl">
          {content.hero.subheading}
        </p>

        <p className="mt-4 text-sm text-muted">
          {content.hero.tagline}
        </p>

        <a
          href={content.company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-medium text-charcoal-deep transition-colors hover:bg-gold-dark hover:text-white"
        >
          <MessageCircle className="h-5 w-5" />
          {content.hero.cta}
        </a>
      </Wrapper>
    </section>
  )
}
