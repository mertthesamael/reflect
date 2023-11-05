"use client"
import SectionTitle from '@/components/Typography/SectionTitle';
import { useFadeInEffect } from '@/hooks/useFadeInEffect';
import Image from 'next/image';
import React, { FC } from 'react'

type PricingSectionProps = {
  
}

const PricingSection: FC<PricingSectionProps> = ({  }) => {
    const { elementRef } = useFadeInEffect()

  return (
    <section  className='w-full flex flex-col relative items-center min-h-[1200px] h-screen'>
        <Image ref={elementRef} src={'/pricing-bg.png'} alt='Bg' fill className='object-contain opacity-0'/>
        <div  className='w-full flex h-full gap-24 items-center flex-col'>
            <div className='w-full max-w-[900px] flex items-center justify-center text-center'>
            <SectionTitle description='' badgeText='Get access' title='We like keeping things simple One plan one price.' mobileSplitFrom='We like keeping things simple'/>
            </div>
            <div className='relative z-10 flex gap-2 items-end'>
                    <h2 className='highlight-gradient text-[52px] font-bold'>$10</h2>
                    <span className='text-[#efedfd99]'>/month <br/>{'(billed annually)'}</span>
            </div>

        </div>
    </section>
  )
}

export default PricingSection;