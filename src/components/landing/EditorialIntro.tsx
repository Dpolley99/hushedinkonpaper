export default function EditorialIntro() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-secondary/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--muted-foreground) / 0.05) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="container px-6 relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
            WELCOME!
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
        </div>
        
        {/* Poem */}
        <div className="prose prose-lg max-w-none">
          <div className="font-light text-foreground/90 leading-loose space-y-4 text-center ">
            <p className="mb-0">I’ve always believed that some of the most important parts of life happen quietly—between moments, in pauses, in small shifts of light. This space is my way of giving those moments a place to land.</p>
            <p className="mb-0">Here, you’ll find poems written for anyone who moves gently through the world, who notices the subtle things, who feels deeply even when they don’t speak loudly. These pieces aren’t meant to impress; they’re meant to sit with you for a while, the way a soft morning does before the day begins.</p>
            <p className="mb-0">Thank you for being here.
            Whether you read one line or stay for the whole collection, I hope something in these words feels like it was meant for you.</p>
            <p className="mb-0 mt-6">More is coming.</p>
            
            <p className="mb-0 mt-0">Let’s begin—quietly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}