import React from 'react'

import {heroBackground, robot, curve} from '../assets'
import { companyLogos } from '../constants'

const Hero = () => {
  return (
    <section className="mt-[7.5rem] justify-center items-center sectionPadding h-[800px] mb-[7.5rem]">
      <div className=' flex-row h-full hidden lg:flex'>
        <div className=' flex flex-col w-[50%]'>
          <div className='flex-col gap-[50px] flex items-start justify-center w-full h-full'>
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
            <p className="body-1 max-w-3xl mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within Brainwave. Upgrade your productivity
              with Brainwave, the open AI chat app.
            </p>
            <div className='bg-conic-gradient justify-center items-center flex p-[10px] rounded-lg w-[200px] relative'>
              <a 
              href="#getstarted" 
              className='font-mono hover:scale-105 text-[20px] p-[10px] w-[180px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Get Started</a>
            </div>
          </div>
        </div>
        <div className='flexCenter w-[50%] ml-[100px]'>
          <div className='z-1 bg-conic-gradient p-1 rounded-lg w-fit h-auto scale-75'>
          <img src={robot}
                  className="h-full w-auto"
                  width={1024}
                  height={490}
              alt="hero" /> 
          </div>
        </div>
      </div>

      <div className=' flex h-full relative lg:hidden'>
        <div className=' flex flex-col w-[100%] absolute top-0 left-0 z-10 h-full px-[10%] bg-[rgba(0,0,0,0.8)] justify-center items-center'>
          <div className='flex-col gap-[50px] justify-center items-center flex w-full h-full'>
            <h1 className="h1 mb-6 text-center">
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
            <p className="body-1 max-w-3xl mb-6 text-n-2 lg:mb-8 text-center">
              Unleash the power of AI within Brainwave. Upgrade your productivity
              with Brainwave, the open AI chat app.
            </p>
            <div className='bg-conic-gradient justify-center items-center flex p-[5px] rounded-lg w-[150px] relative'>
              <a 
              href="#getstarted" 
              className='font-mono hover:scale-105 text-[17px] p-[10px] w-[150px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Get Started</a>
            </div>
          </div>
        </div>
        <div className='flexCenter w-full h-full absolute top-0 left-0'>
          <div className='z-1 bg-conic-gradient p-1 rounded-lg w-full h-full'>
          <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${robot})` }}>
            {/* Your other content can go here */}
          </div>
          <img src={robot}
                  className="h-auto w-auto object-cover hidden"
                  width={1024}
                  height={490}
              alt="hero" /> 
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero