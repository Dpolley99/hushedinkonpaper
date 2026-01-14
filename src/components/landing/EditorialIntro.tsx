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
            The Way Light Finds You
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
        </div>
        
        {/* Poem */}
        <div className="prose prose-lg max-w-none">
          <div className="font-light text-foreground/90 leading-loose space-y-4 text-center ">
            <p className="mb-0">You don't have to chase anything today.</p>
            <p className="mb-0">You don't need to conquer or climb.</p>
            <p className="mb-0">Sometimes, life is not about reaching</p>
            <p className="mb-0">But about noticing.</p>
            
            <p className="mb-0 mt-6">The light doesn't always arrive in fanfare—</p>
            <p className="mb-0">Sometimes it just slips through blinds</p>
            <p className="mb-0">And lands quietly on your arm</p>
            <p className="mb-0 italic">As if to say, "You're still here. Good."</p>
            
            <p className="mb-0 mt-6">There is wonder in letting the world come to you.</p>
            <p className="mb-0">In sitting still long enough</p>
            <p className="mb-0">To hear the soft yes of being.</p>
            
            <p className="mb-0 mt-6">You don't need more than that right now.</p>
            <p className="mb-0 italic">You only need to be.</p>
            
            <p className="mb-0 mt-8 text-primary/80">Let the light come to you.</p>
            <p className="mb-0">Let the moment pass softly,</p>
            <p className="mb-0">Like it knows you're here</p>
            <p className="mb-0 italic">And that's enough.</p>
          </div>
        </div>
      </div>
    </section>
  )
}