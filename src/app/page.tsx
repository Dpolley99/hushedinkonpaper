import HeroSection from '@/components/landing/HeroSection'
import EditorialIntro from '@/components/landing/EditorialIntro'
import FeaturedWorks from '@/components/landing/FeaturedWorks'
import QuotedExcerpt from '@/components/landing/QuotedExcerpt'
import ReadingInvitation from '@/components/landing/ReadingInvitation'
import Footer from '@/components/Footer'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main>
        <HeroSection />
        <EditorialIntro />
        <FeaturedWorks />
        <QuotedExcerpt />
        <ReadingInvitation />
      </main>
      <Footer />
    </>
  )
}