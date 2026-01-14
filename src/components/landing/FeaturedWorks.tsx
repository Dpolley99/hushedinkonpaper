import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Placeholder data - will be replaced with Sanity data later
const featuredWorks = [
  {
    id: '1',
    title: 'Unspoken',
    excerpt: 'Some silences carry more weight than a thousand words ever could.',
    slug: 'unspoken',
  },
  {
    id: '2',
    title: 'Between Heartbeats',
    excerpt: 'In the space between one breath and the next, I found you—and lost you again.',
    slug: 'between-heartbeats',
  },
  {
    id: '3',
    title: 'Letters I Never Sent',
    excerpt: 'Every word I swallowed became a ghost that haunts me still.',
    slug: 'letters-i-never-sent',
  },
  {
    id: '4',
    title: 'The Last August',
    excerpt: 'Summer endings taste like honey and regret, sweet and inevitable.',
    slug: 'the-last-august',
  },
]

export default function FeaturedWorks() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-background to-secondary/20" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.08) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Featured
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-foreground mt-4 mb-6">
            Recent Fragments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Pieces that linger, waiting to be felt.
          </p>
        </div>

        {/* Featured works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredWorks.map((work, index) => (
            <Link
              key={work.id}
              href={`/blog/${work.slug}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="h-full p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Title */}
                <h3 className="text-2xl font-serif font-normal text-foreground mb-4 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                  {work.excerpt}
                </p>
                
                {/* Read more indicator */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="font-medium">Read</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <span>View all works</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// TODO: Replace with actual Sanity data
// Example implementation when ready:
/*
import { client } from '@/lib/sanity'

async function getFeaturedWorks() {
  const query = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    excerpt,
    "slug": slug.current
  }`
  
  return await client.fetch(query)
}

export default async function FeaturedWorks() {
  const works = await getFeaturedWorks()
  
  // ... rest of component
}
*/