import React, { FC } from 'react'

type SectionTitleProps = {
    title: string,
    description: string,
    mobileSplitFrom: string

}

const SectionTitle: FC<SectionTitleProps> = ({ title, description, mobileSplitFrom }) => {

    const splitTitle = title.split(mobileSplitFrom)[1]

    return (
        <div className='flex flex-col gap-3 items-center relative z-10 xl:top-10'>
            <h1 className='title-gradient hidden xl:flex xl:text-[72px] font-medium'>{title}</h1>
            <h1 className='title-gradient flex xl:hidden text-[44px] xl:text-[72px] font-medium text-center'>{mobileSplitFrom}<br /> {splitTitle}</h1>
            <p className='text-[#efedfdb3] font-base xl:text-lg text-center'>{description}</p>
        </div>
    )
}

export default SectionTitle;