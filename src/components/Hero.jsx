import React from 'react'

import {heroBackground, robot, curve} from '../assets'
import { companyLogos } from '../constants'

const Hero = () => {
  return (
    <section className="mt-[7.5rem] justify-center items-center sectionPadding">

      
      <div className='flexCenter relative'>
        <div className='absolute top-[16rem] z-5 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] flex-col justify-center items-center flex'>
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <div className='bg-conic-gradient justify-center items-center flex p-[10px] rounded-lg w-[200px] relative'>
            <a 
            href="#getstarted" 
            className='font-mono hover:scale-105 text-[20px] p-[10px] w-[180px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Get Started</a>
          </div>
        </div>
        <div className='z-0'>
          <img src={heroBackground} alt="hero" />
        </div>
        <div className='z-1 absolute bg-conic-gradient p-1 rounded-lg'>
          <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
            <img src={robot}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1024}
                height={490}
            alt="hero" />
          </div>
        </div>
        <div className='absolute h-[50px] w-full bottom-[20%] flexCenter flex-col gap-5'>
          <span className='font-code text-gray-400'>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</span>
          <div className='flex flex-row w-[100%] flexCenter mt-[3rem]'>
            {companyLogos.map((logo, index) => (
              <img src={logo} alt='logo' className='mx-[5rem] hover:scale-110 transition-all'/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero