import React, { useState } from 'react'
import {brainwave, check} from '../assets'
import { navigation } from '../constants'
import MenuSvg from "../assets/svg/MenuSvg";


const Navbar = () => {

  const [menuIsToggled, setMenuIsToggled] = useState(false);

  return (
    <div className='fixed z-50 flex w-full px-[10%] py-[40px] justify-between items-center flex-row bg-[rgba(0,0,0,0.9)] border-spacing-0 border-b-[1px] border-b-gray-800 '>
      <a href="/" className='cursor-pointer'>
        <img src={brainwave} alt="logo" className='hover:scale-105 transition-all' />
      </a>
      
      <div className='flex-col items-center justify-center m-auto lg:flex-row gap-15 hidden xl:flex'>
        {navigation.map((item) => (
          <a key={item.id} href={item.url} className={`${
            item.onlyMobile ? "lg:hidden" : ""
          } font-mono text-gray-400 hover:text-white transition-all text-[18px]`}>{item.title}</a>
        ))}
      </div>
      <div className='flex-col text-white gap-8 sm:flex-row justify-center items-center hidden sm:flex'>
        <a href="#signup" className='font-mono text-gray-400 hover:text-white text-[18px] transition-all'>New Account</a>
        <div className='bg-conic-gradient justify-center items-center flex p-[5px] rounded-lg w-[100px]'>
          <a href="#signin" className='font-mono hover:scale-105 text-[16px] p-[5px] w-[90px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Sign In</a>
        </div>
        
      </div>
      <div className='rounded-full w-[50px] h-[50px] ml-[50px] hover:scale-110' onClick={() => {
        menuIsToggled ? setMenuIsToggled(false) : setMenuIsToggled(true)
      }}>
        <img src={check} alt="Menu" width={40} height={40} />
      </div>
      <div className={`fixed right-[50px] top-[100px] z-[51] w-fit h-fit flex-col
       bg-gray-800 py-[20px] px-[50px] rounded-2xl ${menuIsToggled ? 'flex' : 'hidden'}`}>
        <div className='flex-col items-center justify-center m-auto flex'>
          {navigation.map((item) => (
            <a key={item.id} href={item.url} className={`font-mono text-white hover:text-white transition-all w-full text-center text-[15px] py-[20px] ${(item.id === "5") ? 'border-b-[0px] ' : 'border-b-[1px] border-purple-400'}`}>{item.title}</a>
          ))}
        </div>
        <div className='flex flex-col '>
          <a href="#signup" className='font-mono text-gray-400 hover:text-white text-[15px] transition-all mb-[10px] w-full text-center'>New Account</a>
          <a href="#signin" className='font-mono text-[14px] p-[5px] text-center bg-[rgba(0,0,0,0.7)] rounded-lg transition-all'>Sign In</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar