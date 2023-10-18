import React, { FC } from 'react'
import './style.css'
import Image from 'next/image'
type HeroSectionProps = {

}
const HeroSection: FC<HeroSectionProps> = ({ }) => {

    return (
        <section className='w-full h-max flex justify-center pt-40  bg-[--body-bg]'>
            <div className='flex flex-col  overflow-hidden  gap-[7rem] xl:gap-52 items-center page-format relative'>
                <div className='absolute w-full h-full top-0 z-10' />
                <div className='flex flex-col gap-3 items-center relative z-10 xl:top-10'>
                    <h1 className='hero-title-gradient hidden xl:flex xl:text-[72px] font-medium'>Think better with Reflect</h1>
                    <h1 className='hero-title-gradient flex xl:hidden text-[44px] xl:text-[72px] font-medium'>Think better<br /> with Reflect</h1>
                    <p className='text-[#efedfdb3] text-lg'>Never miss a note, idea or connection.</p>
                </div>
                <div className='vide-container  h-max xl:w-full w-[1028px] absolute top-0 bottom-24 '>
                    <video autoPlay preload='false' muted loop playsInline src="/hero-blackhole.webm" className='ob object-contain rounded-[1283px]' />
                </div>
                <div className='flex w-full  h-max justify-center backdrop-blur-lg'>
                    <div className='relative '>
                        <div className='absolute w-full h-full top-0 z-10 bg-gradient-to-t from-[--body-bg] to-transparent'/>
                        <div className='relative  p-2 border border-white/10 backdrop-blur-lg bg-white/5 rounded-3xl'>
                            <Image src={'/product-desktop.png'} width={1198} height={748} alt='Hero Desktop' className='hidden xl:flex' />
                            <Image src={'/product-mobile.png'} width={368} height={677} alt='Hero Mobile' className='flex xl:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;