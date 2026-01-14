import Link from 'next/link'
import { Calendar } from 'lucide-react'
// import { client } from '@/lib/sanity'

// TODO: Uncomment when Sanity is ready
// async function getAllPosts() {
//   const query = `*[_type == "post"] | order(publishedAt desc) {
//     _id,
//     title,
//     excerpt,
//     "slug": slug.current,
//     publishedAt,
//     tags
//   }`
//   return await client.fetch(query)
// }

// Placeholder data
const placeholderPosts = [
  {
    _id: '1',
    title: 'The Way Light Finds You',
    excerpt: 'You don\'t have to chase anything today. You don\'t need to conquer or climb.',
    slug: 'the-way-light-finds-you',
    publishedAt: '2024-01-15',
    tags: ['reflection', 'stillness'],
  },
  {
    _id: '2',
    title: 'Unspoken',
    excerpt: 'Some silences carry more weight than a thousand words ever could.',
    slug: 'unspoken',
    publishedAt: '2024-01-10',
    tags: ['love', 'silence'],
  },
  {
    _id: '3',
    title: 'Between Heartbeats',
    excerpt: 'In the space between one breath and the next, I found you—and lost you again.',
    slug: 'between-heartbeats',
    publishedAt: '2024-01-05',
    tags: ['loss', 'memory'],
  },
  {
    _id: '4',
    title: 'Letters I Never Sent',
    excerpt: 'Every word I swallowed became a ghost that haunts me still.',
    slug: 'letters-i-never-sent',
    publishedAt: '2024-01-01',
    tags: ['longing', 'unsent'],
  },
]

export default async function BlogPage() {
  // TODO: Uncomment when Sanity is ready
  // const posts = await getAllPosts()
  const posts = placeholderPosts

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="fixed top-20 left-1/4 w-96 h-96 -z-10 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 max-w-4xl mx-auto">
        {/* Page header */}
        <header className="mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-4">
            The Archive
          </h1>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            A collection of thoughts, feelings, and fragments—written to be felt, not explained.
          </p>
        </header>

        {/* Posts list */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="block group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <article className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-4 font-light">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-light">
              No works yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}