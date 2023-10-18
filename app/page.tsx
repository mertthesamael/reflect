import FeaturesSection from '@/containers/features-section'
import HeroSection from '@/containers/hero-section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen '>
      <HeroSection />
      <FeaturesSection />
    </main>
  )
}
