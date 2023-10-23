import { LockIcon } from '@/components/Icons/FeatureIcons';
import Image from 'next/image';
import React, { FC } from 'react'

type ServiceCardProps = {
  
}

const ServiceCard: FC<ServiceCardProps> = ({  }) => {
  return (
    <div className='w-[350px] xl:w-[486px]  flex flex-col'>
        <div className='w-full h-[150px] xl:h-[256px] relative'>
            <Image src={'/connect-card-bg.png'} fill alt='Card BG Reflect' className='object-contain'/>
        </div>
        <div className='w-full px-10 py-5 flex flex-col gap-4 transition-all service-card-bg'>
            <div>
                <LockIcon />
            </div>
            <div>
                <h2 className='text-[#f4f0ff]'>Frictionless thought capture. <span className='text-[#efedfdb3]'>Record your ideas and to-do easily, so you never miss a thing.</span></h2>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard;