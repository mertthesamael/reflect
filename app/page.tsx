import AiSection from '@/containers/ai-section'
import ConnectSection from '@/containers/connect-section'
import FeaturesSection from '@/containers/features-section'
import HeroSection from '@/containers/hero-section'
import ResearchSection from '@/containers/research-section'
import SecuritySection from '@/containers/security-section'

export default function Home() {
  return (
    <main className='min-h-screen '>
      <HeroSection />
      <FeaturesSection />
      <AiSection />
      <ConnectSection />
      <ResearchSection />
      <SecuritySection />
    </main>
  )
}
