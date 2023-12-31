"use client"
import React from 'react'
import Spline from '@splinetool/react-spline';
import bg from '../../../public/assets/Artboard 4.png'
import bgm from '../../../public/assets/Artboard 2.png'

import Image
 from 'next/image';
function page() {
  return (
    <div className='bg-[#DEF7E3] h-[70vh] '>
      <Image  src={bg} alt="" className=' absolute h-[70vh] md:flex hidden  '/>
      <Image  src={bgm} alt="" className=' absolute h-[70vh] md:hidden flex '/>

          <Spline className=' relative' scene="https://prod.spline.design/ZrXO2zPWlhjOb3f6/scene.splinecode" />
    </div>
  )
}

export default page

