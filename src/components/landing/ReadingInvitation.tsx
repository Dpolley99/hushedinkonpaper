import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ReadingInvitation() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-3xl" />
      
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--primary) / 0.1) 10px, hsl(var(--primary) / 0.1) 11px)`,
      }} />
      
      <div className="container px-6 max-w-3xl mx-auto relative z-10 text-center">
        {/* Main message */}
        <p className="font-serif text-3xl md:text-4xl font-light text-foreground/90 leading-relaxed mb-6 italic">
          Take your time.
        </p>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12">
          These words are not going anywhere.
        </p>
        
        {/* Divider */}
        <div className="w-24 h-0.5 bg-primary/20 mx-auto mb-12" />
        
        {/* CTA */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors font-medium group"
        >
          <span>Enter the archive</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}