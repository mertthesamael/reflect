import React, { FC } from 'react'

type SectionTitleProps = {
    title: string,
    description: string,
    mobileSplitFrom: string
    xl?:boolean,
    badgeText:string

}

const SectionTitle: FC<SectionTitleProps> = ({ title, description, mobileSplitFrom,xl,badgeText }) => {

    const splitTitle = title.split(mobileSplitFrom)[1]
    

    return (
        <div className='flex flex-col gap-3 items-center relative z-10 xl:top-10 '>
            <div style={{boxShadow: "inset 0 -7px 11px #a48fff1f"}} className='grid backdrop-blur-lg place-items-center py-2 px-4 border-black/10 rounded-full border'>
            <span  className='title-badge-gradient text-sm font-medium'>{badgeText}</span>
            </div>
            <h1 className={`title-gradient hidden xl:flex ${xl ? 'xl:text-[72px]' : 'xl:text-[56px]'} xl:text-[72px] font-medium`}>{title}</h1>
            <h1 className='title-gradient flex xl:hidden text-[44px] xl:text-[72px] font-medium text-center'>{mobileSplitFrom}<br /> {splitTitle}</h1>
            <p className='text-[#efedfdb3] font-base xl:text-lg text-center max-w-[670px]'>{description}</p>
        </div>
    )
}

export default SectionTitle;