import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle';


type Props = {}

const Hero = ({}: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hello!, Kayode Olumo here",
            "A guy whose first love is Twix chocolate bars",
            "<ButDevelopmentIsACloseSecond />"
        ],
        loop: true,
        delaySpeed: 1500,
    })
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://media-exp1.licdn.com/dms/image/C5603AQH4P68PF-b9bQ/profile-displayphoto-shrink_400_400/0/1555113668175?e=1672876800&v=beta&t=V4Xuu-CnjERBqSaZcm-ajao4DsLxRxpDo1Uid87HhAc" alt="profile pic" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>ux-ui/software engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='black' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='hero-btn'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='hero-btn'>Experience</button>
                </Link>
                <Link href="#skill">
                    <button className='hero-btn'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='hero-btn'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero;