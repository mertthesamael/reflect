"use client"
import React, { FC } from 'react'

type PrimaryButtonProps = {
  onClick?:() => void,
  text:string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <button className='px-4 py-2 gradi bg-gradient-to-t rounded-lg to-[#3b087e]/30 border border-white/30 shadow-button-shadow hover:shadow-button-shadow-hover transition-all duration-500 backdrop-blur-md from-white/10  via-[#712fff]/10 '>
     {text}
    </button>
  )
}

export default PrimaryButton;