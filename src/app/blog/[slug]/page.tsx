import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
// import { client } from '@/lib/sanity'
// import { PortableText } from '@portabletext/react'

// TODO: Uncomment when Sanity is ready
// async function getPost(slug: string) {
//   const query = `*[_type == "post" && slug.current == $slug][0] {
//     _id,
//     title,
//     excerpt,
//     content,
//     publishedAt,
//     tags
//   }`
//   return await client.fetch(query, { slug })
// }

// Placeholder data
const placeholderPosts: Record<string, any> = {
  'the-way-light-finds-you': {
    _id: '1',
    title: 'The Way Light Finds You',
    publishedAt: '2024-01-15',
    tags: ['reflection', 'stillness'],
    content: `You don't have to chase anything today.
You don't need to conquer or climb.
Sometimes, life is not about reaching
But about noticing.

The light doesn't always arrive in fanfare—
Sometimes it just slips through blinds
And lands quietly on your arm
As if to say, "You're still here. Good."

There is wonder in letting the world come to you.
In sitting still long enough
To hear the soft yes of being.

You don't need more than that right now.
You only need to be.

Let the light come to you.
Let the moment pass softly,
Like it knows you're here
And that's enough.`,
  },
  'unspoken': {
    _id: '2',
    title: 'Unspoken',
    publishedAt: '2024-01-10',
    tags: ['love', 'silence'],
    content: `Some silences carry more weight than a thousand words ever could.

In the space between what we say and what we mean,
Lives a truth too fragile to speak aloud.

I've learned that love sometimes wears the face of restraint—
Knowing when to hold back the flood of everything I feel.

Because some things, once said, cannot be unsaid.
And some hearts are too tender for the weight of words.`,
  },
  'between-heartbeats': {
    _id: '3',
    title: 'Between Heartbeats',
    publishedAt: '2024-01-05',
    tags: ['loss', 'memory'],
    content: `In the space between one breath and the next,
I found you—and lost you again.

Time moves differently in moments of loss.
Each second stretches like honey,
Sweet and slow and impossible to hold.

I carry you in the quiet spaces,
In the pauses between words,
In the gentle ache that comes with remembering.

You were never mine to keep,
But you're always mine to miss.`,
  },
  'letters-i-never-sent': {
    _id: '4',
    title: 'Letters I Never Sent',
    publishedAt: '2024-01-01',
    tags: ['longing', 'unsent'],
    content: `Every word I swallowed became a ghost that haunts me still.

Dear you,
I wrote you a thousand letters I never sent.
Each one a different version of the truth—
Some kind, some cruel, all honest in their own way.

I wanted to tell you how the morning light
Still reminds me of your smile,
How certain songs are territories I can't cross
Without feeling the weight of your absence.

But silence, I've learned, is its own kind of letter.
And maybe you're reading it right now,
In the space where my voice used to be.`,
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  // TODO: Uncomment when Sanity is ready
  // const post = await getPost(params.slug)
  const post = placeholderPosts[params.slug]

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
            {/* TODO: Replace with PortableText when Sanity is ready */}
            {/* <PortableText value={post.content} /> */}
            <div className="whitespace-pre-line text-foreground/90 leading-loose font-light">
              {post.content}
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

// Generate static params for all posts
// TODO: Uncomment when Sanity is ready
// export async function generateStaticParams() {
//   const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
//   return posts.map((post: any) => ({
//     slug: post.slug,
//   }))
// }