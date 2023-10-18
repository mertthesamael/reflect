"use client"
import FeatureCard from '@/components/Cards/FeatureCard';
import React, { FC, useRef, useState } from 'react'
import { features } from './constants';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide, Swiper } from 'swiper/react';
type FeaturesSectionProps = {

}

const FeaturesSection: FC<FeaturesSectionProps> = ({ }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };
    return (
        <section className='w-full flex justify-center'>
            <div className='page-format py-10 flex justify-center overflow-hidden flex-col items-center'>
                <div className='w-full hidden xl:grid grid-cols-4 gap-4' style={{ background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.08), transparent 50%)` }} ref={divRef}
                    onMouseMove={handleMouseMove}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {features.map((el, _i) => (
                        <FeatureCard key={_i} feature={el} />
                    ))}
                </div>
                <div className='flex xl:hidden'>
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