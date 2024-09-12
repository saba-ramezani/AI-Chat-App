import React from 'react'
import { socials } from '../constants'

const Footer = () => {
  return (
    <section className='sectionPadding flexCenter flex-col lg:flex-row justify-center relative items-center h-[150px]'>
      <p className='lg:absolute lg:left-[20%] body-2 mb-3 text-n-1/50'>© 2024. All rights reserved.</p>
      <div className='lg:absolute lg:right-[20%] flex flex-row gap-5 mt-[20px] lg:mt-0'>
        {socials.map((item, index) => (
          <a className=' rounded-full hover:bg-purple-200 size-[40px] justify-center items-center p-[8px] transition-all' key={item.id} href={item.url}>
            <img src={item.iconUrl} alt={item.title}  width={24} height={24}/>
          </a>
        ))}
      </div>

      
    </section>
  )
}

export default Footer