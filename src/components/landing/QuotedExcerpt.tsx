'use client'

import { useEffect, useRef, useState } from 'react'

export default function QuotedExcerpt() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-visible"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Radial pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-radial-gradient(circle at center, transparent 0, transparent 2px, hsl(var(--secondary) / 0.1) 2px, transparent 3px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container px-6 max-w-4xl mx-auto relative z-10">
        <blockquote 
          className={`text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative opening quote */}
          <div className="text-6xl md:text-7xl text-primary/20 font-serif leading-none mb-4">"</div>
          
          {/* The excerpt */}
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-foreground/90 font-light italic">
            I still reach for you in dreams,
            <br />
            knowing you were never mine
            <br />
            to hold.
          </p>
          
          {/* Decorative closing quote */}
          <div className="text-6xl md:text-7xl text-primary/20 font-serif leading-none mt-4 text-right">"</div>
          
          {/* Optional attribution line */}
          <footer className="mt-8 text-sm text-muted-foreground font-light">
            — from an unfinished thought
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

// TODO: Eventually pull a random excerpt from Sanity
// Example implementation:
/*
import { client } from '@/lib/sanity'

async function getRandomExcerpt() {
  const query = `*[_type == "post" && defined(featuredExcerpt)] | order(_createdAt desc) {
    featuredExcerpt,
    title
  }[0]`
  
  return await client.fetch(query)
}
*/