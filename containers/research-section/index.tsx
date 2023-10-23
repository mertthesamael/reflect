"use client"
import ServiceCard from '@/components/Cards/ServiceCard';
import SectionTitle from '@/components/Typography/SectionTitle';
import { useFadeInEffect } from '@/hooks/useFadeInEffect';
import Image from 'next/image';
import React, { FC } from 'react'

type ResearchSectionProps = {

}

const ResearchSection: FC<ResearchSectionProps> = ({ }) => {
    const {elementRef} = useFadeInEffect()
    return (
        <section className='w-full flex flex-col relative items-center min-h-[1200px] h-screen'>
            <div className='page-format  flex-col flex items-center overflow-hidden h-full relative'>
                <div ref={elementRef} className='min-w-[890px] min-h-[890px] max-w-[890px] max-h-[890px] relative flex justify-center opacity-0'>
                    <Image alt='Radar' src={'/radar.png'} height={890} width={890} />
                    <div className='radar-scanner ' />
                </div>

                <div className='flex flex-col w-full -bottom-56 xl:bottom-0 items-center min-h-[750px] gap-20 radar-section-bg z-10 justify-center absolute py-10 '>
                    <Image src={'/logo-circle.png'} alt='Logo' width={60} height={60} className='absolute -top-[30px]' />
                    <SectionTitle title='Never lose information' mobileSplitFrom='Never lose' description='Collect your web snippets, Kindle highlights and important links all in one place.
                    Then quickly find them again from any device.' />
                    <div className='flex flex-col xl:flex-row'>
                        <ServiceCard/>
                        <ServiceCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResearchSection;