import React from 'react'
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";

const Collaboration = () => {
  return (
    <section className='sectionPadding flexCenter flex-col lg:flex-row pt-[100px] pb-[100px]'>
      <div className='flex flex-col  max-w-[35rem]'>
        <h2 className="h2 mb-4 md:mb-8">
          AI Chat App br for <br /> seamless collaboration
        </h2>
        <ul className='flex list-none flex-col gap-10'>
          {collabContent.map((item, index) => (
            <li className='flex-col hover:brightness-150'>
              <div className='flex flex-row'>
                <img src={check} alt="check" width={24} height={24} />
                <h6 className="body-2 ml-5">{item.title}</h6>
              </div>
              {item.text && (
                <p className='body-2 mt-3 text-n-4 max-w-[25rem] ml-10'>{item.text}</p>
              )}
            </li>
          ))}
        </ul>
        <div className='bg-conic-gradient justify-center items-center flex p-[5px] rounded-lg w-[150px] relative mt-[5rem]'>
          <a 
          href="#getstarted" 
          className='font-mono hover:scale-105 text-[16px] p-[10px] w-[180px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Get Started</a>
        </div>
      </div>
      <div className='flex flex-col  flex-1'></div>
    </section>
  )
}

export default Collaboration