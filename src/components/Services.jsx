import React from 'react'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import { check, loading, service1, service2, service3 } from '../assets'

const Services = () => {
  return (
    <section className='sectionPadding flexCenter flex-col pt-[100px] pb-[100px] justify-center items-center'>
      <div className='flex flex-col justify-center items-center pb-[100px]'>
        <h1 className='h2'>Generative AI made for creators</h1>
        <p className='body-2 mt-4 text-n-4'>Brainwave unlocks the potential of AI-powered applications</p>
      </div>
      <div className='flex border-[1px] border-gray-800 bg-circulat-pink-dark-gradient w-[90%] relative rounded-[20px] mb-10 h-[600px]'>
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
      <div className='grid gap-5 xl:grid-cols-2 w-[90%]'>
        <div className='flex flex-col border-[1px] border-gray-800 bg-circulat-pink-dark-gradient w-[100%]
         rounded-[20px] inset-0 relative h-[700px]'>
          <img
            src={service2}
            className="h-full w-full object-cover rounded-[20px]"
            width={630}
            height={700}
            alt="robot"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
            <h4 className="h4 mb-4">Photo editing</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Automatically enhance your photos using our AI app&apos;s
              photo editing feature. Try it now!
            </p>
          </div>
        </div>
        <div className='flex flex-col border-[1px] border-gray-800 bg-[rgba(21,19,29,255)] w-[100%] relative rounded-[20px] p-5 h-[700px]'>
          <h1 className='h4 mb-4 px-10 pt-10'>Video generation</h1>
          <p className='body-2 mb-[2rem] text-n-3 px-10 leading-7'>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
          <div className='flex flex-row w-full justify-around md:justify-between px-0 md:px-10 mb-[2rem] items-center'>
            {brainwaveServicesIcons.map((item, index) => {
              if (index === 2) {
                return (
                  <div className='bg-conic-gradient rounded-[30%] p-[2px] md:p-1'>
                    <img src={item} alt="service" width={24} height={24} className='bg-n-6 w-10 h-10 p-2 md:p-4 rounded-[30%] md:h-15 md:w-15 xl:h-12 xl:w-12 2xl:h-15 2xl:w-15'/>
                  </div>
                )
              } else {
                return (
                  <img src={item} alt="service" width={24} height={24} className='bg-n-6 w-10 h-10 p-2 md:p-4 rounded-[30%] md:h-15 md:w-15 xl:h-12 xl:w-12 2xl:h-15 2xl:w-15'/>

                )
              }
            })}
          </div>
          <div className="relative h-[25rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
            <img 
              src={service3}
              className="w-full h-full object-cover"
              width={520}
              height={400}
              alt="Scary robot"
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Services