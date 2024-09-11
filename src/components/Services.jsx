import React from 'react'
import { brainwaveServices } from '../constants'
import { check, loading, service1, service2, service3 } from '../assets'

const Services = () => {
  return (
    <section className='sectionPadding flexCenter flex-col pt-[100px] pb-[1000px] justify-center items-center'>
      <div className='flex flex-col justify-center items-center pb-[100px]'>
        <h1 className='h2'>Generative AI made for creators</h1>
        <p className='body-2 mt-4 text-n-4'>Brainwave unlocks the potential of AI-powered applications</p>
      </div>
      <div className='flex border-[1px] border-gray-800 bg-circulat-pink-dark-gradient w-[100%] relative rounded-[20px] mb-10 h-[600px]'>
        <div className='flex sm:flex-row '>
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
            <img
              className="w-full h-full object-cover md:object-right"
              width={800}
              alt="Smartest AI"
              height={730}
              src={service1}
            />
          </div>
          <div className='flex flex-col w-[100%] justify-center absolute md:w-[50%] items-center h-full right-0'>
            <h2 className="h4 mb-4">
              Smartest AI
            </h2>
            <p className='body-2 mb-[3rem] text-n-3 max-w-[230px]'>Brainwave unlocks the potential of AI-powered applications</p>
            <ul className='flex list-none flex-col'>
              {brainwaveServices.map((item, index) => (
                <li className='flex-col hover:brightness-150 border-t-[1px] border-gray-700 max-w-[230px] py-4'>
                  <div className='flex flex-row'>
                    <img src={check} alt="check" width={24} height={24} />
                    <h6 className="body-3 ml-5 ">{item}</h6>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-row absolute lg:w-[50%] w-[90%] 
        justify-start bottom-5 left-[50%] translate-x-[-50%] border-[1px] border-gray-800 rounded-[20px] py-3 pl-5 bg-[rgba(0,0,0,0.3)]'>
          <img src={loading} alt="" className="w-5 h-5 mr-4"/>
          AI is generating</div>
      </div>
      <div className='flex flex-col lg:flex-row hidden'>
        <div className='flex flex-col'>
          <img src={service2} alt="" />
          <h1>Photo editing</h1>
          <p>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
        </div>
        <div className='flex flex-col'>
          <h1>Video generation</h1>
          <p>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
          <div></div>
          <img src={service3} alt="" />
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Services