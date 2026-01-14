import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 relative border-t border-border/50">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-background" />
      
      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left side - Simple statement */}
          <div className="text-muted-foreground font-light">
            <p className="text-sm">Words collected here.</p>
          </div>
          
          {/* Right side - Optional contact link */}
          <div className="flex items-center gap-6 text-sm">
            
            {/* Optional: Copyright notice */}
            <span className="text-muted-foreground/60 font-light hidden md:inline">
              © {currentYear} Hushed Ink on Paper | All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}