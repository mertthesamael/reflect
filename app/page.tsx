import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-[2000px]'>
      <video autoPlay preload='false' muted loop playsInline src="/hero-blackhole.webm"/>
    </main>
  )
}
