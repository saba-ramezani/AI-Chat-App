import React from 'react'
import { check, smallSphere, stars } from "../assets";
import { pricing } from "../constants";


const PricingCard = ({id, title, description, price, features}) => (
  <div className={`flex flex-col border-[1px] border-gray-800 
  rounded-[30px] py-10 px-10 w-full xl:max-w-[400px] ${id === "1" ? "xl:scale-105 scale-100" : "scale-100"}`}>
    <h1 
    className={`h4 mb-4 ${
      id === "0"
        ? "text-yellow-200"
        : id === "1"
        ? "text-purple-500"
        : "text-orange-400"
    }`}>{title}</h1>
    <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>{description}</p>
    {price && 
      <div className='flex flex-row justify-start items-center gap-1 mb-0'>
        <p className='text-[2.5rem]'>$</p>
        <p className='text-[5.5rem] leading-none font-bold'>{price}</p>
      </div>
    }
    {!price && 
      <div className='flex flex-row justify-start items-center gap-1 mb-0 opacity-0'>
        <p className='text-[2.5rem]'>$</p>
        <p className='text-[5.5rem] leading-none font-bold'>555</p>
      </div>
    }
    {(id === "2") &&
      <div className='bg-conic-gradient justify-center items-center flex p-[5px] rounded-lg w-[100%] relative my-[2rem]'>
        <a 
        href="#getstarted" 
        className='font-mono font-bold hover:scale-105 text-[16px] p-[10px] w-[100%] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Contact Us</a>
      </div>
    }
    {(id === "0" || id === "1") &&
      <div className='bg-white justify-center items-center flex p-[5px] rounded-lg w-[100%] relative my-[2rem]'>
        <a 
        href="#getstarted" 
        className='font-mono font-bold hover:scale-105 text-[16px] p-[10px] w-[100%] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Get Started</a>
      </div>
    }
    {features.map((item, index) => (
      <div className='flex flex-row justify-start w-full border-t-[1px] border-gray-700 py-[1rem]'>
        <img src={check} alt="check" width={24} height={24} />
        <p className='body-2 ml-4'>{item}</p>
      </div>
    ))}
  </div>
)

const Pricing = () => {
  return (
    <section className='sectionPadding flexCenter relative flex-col pb-[100px]'>
      <div className='relative w-full h-full justify-center items-center hidden md:block'>
        <img src={smallSphere} alt="" className='relative left-[50%] top-[50%] translate-x-[-50%] scale-50'/>
        <img src={stars} alt="" className='absolute top-0 left-0 w-full h-full' />
      </div>
      <div className='justify-center items-center text-center'>
        <p className='body-3 mb-[1rem] text-n-3 text-[0.75rem] md:text-s'>GET STARTED WITH BRAINWAVE</p>
        <h2 className='h3 mb-4 text-[1.75rem] md:text-[2rem]'>Pay once, use forever</h2>
      </div>
      <div className='flex flex-col xl:flex-row gap-5 mt-[5rem]'>
        {pricing.map((item, index) => (
          <PricingCard key={index} {...item} /> 
        ))}
      </div>
    </section>
  )
}

export default Pricing