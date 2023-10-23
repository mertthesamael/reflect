"use client"
import FeatureCard from '@/components/Cards/FeatureCard';
import React, { FC } from 'react'
import { features } from './constants';

import { SwiperSlide, Swiper } from 'swiper/react';
import { useSpotlightEffect } from '@/hooks/useSpotlightEffect';
type FeaturesSectionProps = {

}


const FeaturesSection: FC<FeaturesSectionProps> = ({ }) => {

    //Custom hook for soptlight effect
    const { divRef, isFocused, position, opacity, handleMouseMove, handleFocus, handleBlur, handleMouseEnter, handleMouseLeave } = useSpotlightEffect()


    return (
        <section className='w-full flex justify-center'>
            <div className='page-format py-10 flex justify-center overflow-hidden flex-col items-center'>
                <div 
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={divRef} style={{transition:'all 2s ease', background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(234,8,255,${opacity}), transparent 50%)` }} className='w-full z-10 hidden xl:grid grid-cols-4 gap-4'
                >
                    {features.map((el, _i) => (
                        <FeatureCard key={_i} feature={el} />
                    ))}
                </div>
                <div   className='flex xl:hidden'>
                    <Swiper spaceBetween={16} loop className='!w-screen' slidesPerView={'auto'} centeredSlides loopedSlides={3}>
                        {features.map((el, _i) => (
                            <SwiperSlide className='!w-max'>
                                <FeatureCard key={_i} feature={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;