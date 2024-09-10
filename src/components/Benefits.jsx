import React from 'react'
import Arrow from "../assets/svg/Arrow";
import { benefits } from '../constants';

const BenefitCard = ({id, title, text, backgroundUrl, iconUrl, imageUrl}) => (
  <div className=' p-10 flex-col max-w-[400px] rounded-[20px] relative bg-[rgb(14,13,21)]'>
    {((id === "0" || id === "2" || id === "4") && (<div className="z-1 opacity-50 absolute top-0 left-2/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />))}
    <img src={imageUrl} alt="robot" className='z-50 bg-cover absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-20 transition-opacity object-cover'  />
    <img src={backgroundUrl} alt="robot" className='z-2 opacity-80 bg-cover absolute w-full h-full top-0 left-0 object-cover'  />
    <h5 className='h5 mb-6 z-4'>{title}</h5>
    <p className='body-2 mb-20 text-n-3 z-4'>{text}</p>
    <div className='flex flex-row justify-between z-4'>
      <img src={iconUrl} alt="icon" width={48} height={48} />
      <div className='flex flex-row items-center justify-end'>
        <span className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore more</span>
        <Arrow/>
      </div>
    </div>
  </div>
)

const Benefits = () => {
  return (
    <section className='sectionPadding flexCenter relative mt-[-100px] flex-col pt-[100px]'>
      <h1 className='h1 text-center'>Chat Smarter, Not Harder <br /> with Brainwave</h1>
      <div className='flex flex-row flex-wrap gap-[5rem] mt-[10rem] items-center justify-center'>
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>
    </section>
  )
}

export default Benefits