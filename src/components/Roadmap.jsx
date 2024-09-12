import React from 'react'
import { roadmap } from '../constants'
import { check2, grid, loading1 } from "../assets";

const Roadmap = () => {
  return (
    <section className='sectionPadding flexCenter bg-yellow pt-[100px] pb-[100px] flex-col'>
      <div className='justify-center items-center text-center mb-[200px]'>
        <p className='body-3 mb-[1rem] text-n-3 text-[0.75rem] md:text-s'>READY TO GET STARTED</p>
        <h2 className='h3 mb-4 text-[1.75rem] md:text-[2rem]'>What we’re working on</h2>
      </div>
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => (
          <div key={item.id} className={`flex flex-col border-[1px]
           border-gray-700 p-10 rounded-[50px] h-[750px] relative ${(item.id === "0" || item.id === "2") ? "mt-[-100px]" : "mt-0"}`}>
            <div className='relative'>
              <div className='absolute w-full top-0 left-0'>
                <img src={grid} alt="" />
              </div>
              <div className='flex flex-col w-full h-full'>
                <div className='flex flex-row w-full justify-between'>
                  <p>{item.date}</p>
                  <p>{item.status}</p>
                </div>
                <img src={item.imageUrl} alt="" />
              </div>
            </div>
            <div className='flex flex-col w-auto absolute bottom-20'>
              <h1 className='h4 mb-4'>{item.title}</h1>
              <p className='body-2 text-n-4 max-w-[600px]'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Roadmap