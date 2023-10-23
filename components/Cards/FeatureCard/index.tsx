import React, { FC } from 'react'

type FeatureCardProps = {
 feature:any
}

const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className={`py-6 px-8 w-[300px] h-[196px] border-2 flex flex-col gap-4 border-white/5 backdrop-blur-2xl`}>
        <div>
            {feature.icon}
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-[#f4f0ff] font-medium'>{feature.title}</h2>
            <p className='text-[#efedfd99]'>{feature.description}</p>
        </div>
    </div>
  )
}

export default FeatureCard;