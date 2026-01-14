import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          quality={90}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container px-6 text-center relative z-10 max-w-4xl">
        {/* Evocative opening line */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-8 leading-tight animate-fade-in drop-shadow-sm">
          Some thoughts are meant to be felt,
          <br />
          <span className="italic text-muted-foreground">not explained.</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up font-light drop-shadow-sm" style={{ animationDelay: '200ms' }}>
          A collection of fragments—love, loss, longing, and the quiet moments between them.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg"
          >
            <Link href="/blog">Read the Latest</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-primary/40 bg-background/80 hover:bg-background backdrop-blur-sm font-medium shadow-md"
          >
            <Link href="/blog">Explore All Works</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}