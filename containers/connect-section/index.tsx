"use client"
import ServiceCard from '@/components/Cards/ServiceCard';
import SectionTitle from '@/components/Typography/SectionTitle';
import { useFadeInEffect } from '@/hooks/useFadeInEffect';
import Image from 'next/image';
import React, { FC } from 'react'

type ConnectSectionProps = {

}

const ConnectSection: FC<ConnectSectionProps> = ({ }) => {
    const { elementRef } = useFadeInEffect()
    return (
        <section className='flex justify-center w-full py-20 min-h-screen'>
            <div className='page-format flex items-center flex-col relative'>
                <div className='w-full h-full relative'>
                    <div className='w-full h-full flex justify-center items-end py-52'>
                        <SectionTitle title='Give your brain superpowers' mobileSplitFrom='Give your brain' description='Mirror the way your mind works by associating notes through backlinks. Reflect builds you a second brain that you can reference anytime.' />
                    </div>
                    <Image ref={elementRef} alt='Bg' src={'/connect-bg.png'} fill className=' object-contain opacity-0' />
                </div>
                <div className='flex w-max flex-col xl:flex-row border border-white/5 justify-center'>
                    <div className='border-b xl:border-r border-white/5'>
                    <ServiceCard />
                    </div>
                    <div>
                    <ServiceCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConnectSection;