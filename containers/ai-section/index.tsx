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
        <section className='w-full flex flex-col relative items-center min-h-screen'>
            <div className='page-format flex-col flex justify-evenly items-center h-full'>
                <div className='relative flex flex-col items-center justify-center xl:justify-evenly gap-16 h-screen w-full'>
                    <div className='flex '>
                        <SectionTitle title='Notes with an AI assistant' description='Reflect uses GPT-4 and Whisper from OpenAI to improve your writing, organize your thoughts, and act as your intellectual thought partner.' mobileSplitFrom='Notes with' />
                    </div>
                    <div className='flex  z-10 p-2 border w-max border-white/10 gap-6 backdrop-blur-xl bg-white/5 rounded-2xl'>
                        <div className='p-6 z-10 flex flex-col border  border-white/10 gap-6 bg-purple-800/5  rounded-xl'>
                            <div className='w-full flex justify-between items-center '>
                                <h2 className='text-white font-medium'>How to use AI to take better notes</h2>
                                <span className='flex items-center'><SparklesIcon /> Click to see magic</span>
                            </div>
                            <div>
                                <span className='flex items-center gap-5'><span className='w-1 h-1 bg-white/50 rounded-full' />What can LLMs like GPT do, specifically for note-taking? </span>
                            </div>
                        </div>
                    </div>
                    <Image ref={elementRef} alt='Bg' src={'/ai-bg.png'} fill className='object-cover opacity-0' />
                </div>
                <div className='z-10 flex flex-col gap-10 items-center '>
                    <h1 className='title-gradient text-3xl font-medium'>What can you do with Reflect AI?</h1>
                    <div className='flex gap-2 justify-center flex-wrap'>
                        {aiFeatures.map((el, _i) => (
                            <FeatureCard key={_i} feature={el} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AiSection;