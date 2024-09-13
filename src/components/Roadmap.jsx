import React from 'react'
import { roadmap } from '../constants'
import { check2, gradient, grid, loading1 } from "../assets";

const Roadmap = () => {
  return (
    <section className='sectionPadding flexCenter pt-[100px] pb-[50px] flex-col relative'>
      <div className='justify-center items-center text-center mb-[200px]'>
        <p className='body-3 mb-[1rem] text-n-3 text-[0.75rem] md:text-s'>READY TO GET STARTED</p>
        <h2 className='h3 mb-4 text-[1.75rem] md:text-[2rem]'>What we’re working on</h2>
      </div>
      <div className='absolute top-0 left-0 z-50 opacity-10 rotate-90'>
        <img src={gradient} alt="" />

      </div>
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] z-51">
        {roadmap.map((item, index) => (
          <div key={item.id} className={`flex flex-col border-[1px]
           p-10 rounded-[50px] xl:h-[700px] md:h-[500px] h-[500px] sm:[700px] relative ${(item.id === "0" || item.id === "2") ? "md:mt-[-100px] mt-0" : "mt-0"}
           ${(item.id === "0") ? "border-purple-400" : "border-gray-700"}
           `}>
            <div className='relative'>
              <div className='absolute w-full top-0 left-0 h-auto'>
                <img src={grid} alt="grid" width={500} height={500} />
              </div>
              <div className='flex flex-col w-full h-full'>
                <div className='flex flex-row w-full justify-between items-center'>
                  <p>{item.date}</p>
                  {(item.status === "done") && 
                    <div className='bg-white flex row-col w-fit lg:px-5 px-1 py-1 rounded-md lg:gap-2 gap-1'>
                      <img src={check2} alt="check" />
                      <p className='capitalize lg:text-[14px] text-[11px] text-gray-500'>DONE</p>
                    </div>
                  }
                  {(item.status === "progress") && 
                    <div className='bg-white flex row-col w-fit lg:px-5 px-1 py-1 rounded-md lg:gap-2 gap-1'>
                      <img src={loading1 } alt="check" />
                      <p className='capitalize lg:text-[14px] text-[11px] text-gray-500'>PROGRESS</p>
                    </div>
                  }
                  
                  
                </div>
                <img className='w-full' src={item.imageUrl} alt="" width={500} height={500} />
              </div>
            </div>
            <div className='flex flex-col w-auto absolute bottom-20 '>
              <h1 className='h4 mb-4'>{item.title}</h1>
              <p className='body-2 text-n-4 max-w-[600px]'>{item.text}</p>
            </div>
          </div>
          
        ))}
      </div>
      <div className='bg-conic-gradient justify-center items-center flex p-[5px] rounded-lg w-[150px] relative mt-[5rem] md:mt-0'>
        <a 
        href="#getstarted" 
        className='font-mono hover:scale-105 text-[16px] p-[10px] w-[180px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Our Roadmap</a>
      </div>
    </section>
  )
}

export default Roadmap