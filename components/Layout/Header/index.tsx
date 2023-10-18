import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'
import { headerNavs } from './constants';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

type HeaderProps = {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className='w-full fixed z-10 top-0 py-6 flex justify-center items-center border-b backdrop-blur-lg border-white/10'>
        <div className='page-format flex items-center justify-between'>
            <div className='w-full' >
            <Link href={'/'} className='font-medium flex items-center gap-2'>
            <Image src={'/logo.png'} alt='logo' width={36} height={36} />
            Reflect
                </Link>
            </div>
            <nav className='flex items-center border  backdrop-blur-lg bg-white/5 rounded-full border-white/10 px-4 py-2'>
              <ul className='flex items-center gap-5 '>
                {headerNavs.map((el,_i) => (
                <li key={_i} className='capitalize text-sm text-white/90 transition-all duration-300 hover:text-white/50'>
                  <Link href={el.href}>{el.value}</Link>
                </li>
                ))}
              </ul>
            </nav>
            <div className='flex gap-6 w-full items-center justify-end text-sm'>
              <Link href={'/'} className='font-medium'>Login</Link>
              <PrimaryButton text='Start free trial'/>
            </div>
        </div>
    </header>
  )
}

export default Header;