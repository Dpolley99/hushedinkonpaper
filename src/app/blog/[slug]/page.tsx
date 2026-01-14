import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    content,
    publishedAt,
    tags
  }`
  return await client.fetch(query, { slug })
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {

  const { slug } = await params

  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container px-6 max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Archive</span>
        </Link>

        <article>
          {/* Header */}
          <header className="mb-12 pb-8 border-b border-border/50">
            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">
              {post.title}
            </h1>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="prose prose-lg max-w-none prose-p:text-foreground/90 prose-p:leading-loose prose-p:font-light prose-headings:font-serif prose-headings:font-normal prose-headings:text-foreground prose-strong:text-foreground prose-em:text-foreground/80">
            <PortableText value={post.content} />
          </div>
          </div>
        </article>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground font-light italic">
            — End —
          </p>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}