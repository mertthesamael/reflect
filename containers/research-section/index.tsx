import Image from 'next/image';
import React, { FC } from 'react'

type ResearchSectionProps = {

}

const ResearchSection: FC<ResearchSectionProps> = ({ }) => {
    return (
        <section className='w-full flex flex-col relative items-center min-h-screen h-screen'>
            <div className='page-format flex-col flex items-center justify-end min-h-screen h-screen relative'>
                <div className='min-w-[890px] min-h-[890px] max-w-[890px] max-h-[890px] relative flex justify-center'>
                    <Image alt='Radar' src={'/radar.png'} height={890} width={890} />
                    <div className='radar-scanner ' />
                </div>
                <div className='flex w-full h-1/2 radar-section-bg z-10 justify-center absolute'>
                    <Image src={'/logo-circle.png'} alt='Logo' width={60} height={60} className='absolute -top-[30px]' />
                </div>
            </div>
        </section>
    )
}

export default ResearchSection;