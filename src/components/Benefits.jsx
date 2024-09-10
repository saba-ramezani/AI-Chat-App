import React from 'react'
import Arrow from "../assets/svg/Arrow";
import { benefits } from '../constants';

const BenefitCard = ({title, text, backgroundUrl, iconUrl, imageUrl}) => (
  <div className='bg-gray-950 p-10 flex-col max-w-[400px] rounded-[20px] relative'>
    <img src={imageUrl} alt="robot" className='bg-cover absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-20 transition-opacity object-cover'  />
    <h5 className='h5 mb-6'>{title}</h5>
    <p className='body-2 mb-20 text-n-3'>{text}</p>
    <div className='flex flex-row justify-between'>
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
    <section className='sectionPadding flexCenter relative mt-[-100px] flex-col'>
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