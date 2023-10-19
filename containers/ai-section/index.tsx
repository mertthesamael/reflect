"use client"
import { SparklesIcon } from '@/components/Icons/Sparkles';
import SectionTitle from '@/components/Typography/SectionTitle';
import { useFadeInEffect } from '@/hooks/useFadeInEffect';
import Image from 'next/image';
import React, { FC } from 'react'
import { aiFeatures } from './constants';
import FeatureCard from '@/components/Cards/FeatureCard';

type AiSectionProps = {

}

const AiSection: FC<AiSectionProps> = ({ }) => {
    const { elementRef } = useFadeInEffect()

    return (
        <section className='w-full flex flex-col relative gap-52 items-center justify-center'>
            <div className='page-format relative  flex-col flex justify-evenly items-center min-h-screen'>
                <div className='flex'>
                    <SectionTitle title='Notes with an AI assistant' description='Reflect uses GPT-4 and Whisper from OpenAI to improve your writing, organize your thoughts, and act as your intellectual thought partner.' mobileSplitFrom='Notes with' />
                </div>
                <div className='flex  z-10 p-2 border border-white/10 gap-6 backdrop-blur-lg bg-white/10 rounded-2xl'>
                    <div className='p-6 z-10 flex flex-col border border-white/10 gap-6  rounded-xl'>
                        <div className='w-full flex justify-between items-center '>
                            <h2 className='text-white font-medium'>How to use AI to take better notes</h2>
                            <span className='flex items-center'><SparklesIcon /> Click to see magic</span>
                        </div>
                        <div>
                            <span className='flex items-center gap-5'><span className='w-1 h-1 bg-white/50 rounded-full' />What can LLMs like GPT do, specifically for note-taking? </span>
                        </div>
                    </div>
                </div>
            </div>
            <Image ref={elementRef} alt='Bg' src={'/ai-bg.png'} fill className='object-contain opacity-0' />
            <div className='z-10 flex flex-col gap-10 items-center '>
                <h1 className='title-gradient text-3xl font-medium'>What can you do with Reflect AI?</h1>
                <div className='flex gap-2 justify-center flex-wrap'>
                    {aiFeatures.map((el, _i) => (
                        <FeatureCard key={_i} feature={el} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AiSection;