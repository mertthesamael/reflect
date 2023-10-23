"use client"
import SectionTitle from '@/components/Typography/SectionTitle';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react'

type SecuritySectionProps = {

}

const SecuritySection: FC<SecuritySectionProps> = ({ }) => {

    const [animatedState,setAnimatedState] = useState(true)
    const interval = useRef<any>();

    useEffect(() => {
        const handleTimer = () => {
            interval.current = setInterval(() => {
              setAnimatedState(prev => !prev);
            }, 3000);
          }
          handleTimer()

          return () => {
            clearInterval(interval.current);
          }
          
    },[])
    return (
        <section className='flex w-full justify-center h-screen'>
            <div className='flex flex-col  overflow-hidden justify-center  items-center page-format relative'>
                <div className=' h-max xl:w-full w-[1028px] absolute'>
                    <video autoPlay preload='false' muted loop playsInline src="/security.webm" className='object-contain' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='z-10 flex justify-center relative'>
                        <Image src={'/lock-hanger.png'} alt='Lock' height={44} width={54} className={`transition-all duration-500 absolute  ${animatedState? '!top-0' : '-top-8'}`} />
                        <Image src={'/logo-security.png'} alt='Logo' width={80} height={80} className='z-20' />
                    </div>
                    <SectionTitle title='Hardened security' description='The contents of your notes are end-to-end encrypted. No one else can read them (not even us).' mobileSplitFrom='Hardened'/>
                </div>
            </div>
        </section>
    )
}

export default SecuritySection;