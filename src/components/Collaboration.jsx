import React from 'react'
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check, curve1, curve2 } from "../assets";

const Collaboration = () => {
  return (
    <section className='sectionPadding flexCenter flex-col xl:flex-row pt-[100px] pb-[100px]'>
      <div className='flex flex-col  max-w-[35rem] xl:justify-start justify-center xl:items-start items-center'>
        <h2 className="h2 mb-8 md:mb-15 xl:text-left text-center">
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
      <div className='flex flex-row  flex-1  xl:justify-end justify-center xl:items-end items-center mt-[100px] xl:mt-0'>
        <div className='flex flex-col  justify-center items-center'>
          <p className='body-2 mt-3 text-n-4 max-w-[25rem] xl:ml-10 ml-0 mb-[5rem] xl:text-left text-center'>{collabText}</p>
          <div className='rounded-full border-[1px] border-gray-600 size-[22rem] relative'>
            <div className='rounded-full border-[1px] border-gray-600 size-[15rem] center'></div>
            <div className='rounded-full bg-conic-gradient size-[6rem] center'>
              <div className='bg-black rounded-full size-[5.5rem] center'>
                <img src={brainwaveSymbol} alt="brain" width={70} height={70} className='rounded-full center p-3' />
              </div>
            </div>
            <ul className='center'>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute`}
                  style={{
                    transform: `rotate(${index * (360 / collabApps.length)}deg) translate(calc(11rem)) rotate(-${index * (360 / collabApps.length)}deg) translateX(-1.6rem) translateY(-1.6rem)`,
                  }}
                  
                >
                  <div className="relative flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
                    <img
                      className="m-auto"
                      width={40}
                      height={40}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>



        </div>
      </div>
    </section>
  )
}

export default Collaboration