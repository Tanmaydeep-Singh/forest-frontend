import React from 'react'
import Image from 'next/image';
import img2 from 'public/assets/Group 37119.png';
import img1 from 'public/assets/Screenshot 2023-06-24 at 5.28 1.png';
import img3 from 'public/assets/ZV images.png';

function About() {
  return (
    <div className=' md:px-28 py-10 w-[80%] m-auto' id='about'>
        <h1 className="text-[30px] font-bold px-5" >About </h1>

        <div className=' grid md:grid-cols-2 justify-around p-[20px] '>
            <div className=' w-[80%] text-[20px] font-semibold'>
                <h1>Virtual Forest </h1>
                <p className='text-[14px] mt-8'>Virtual Forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! </p>
            </div>
            <Image src={img1} alt={''} />

        </div>
        <div className=' grid md:grid-cols-2 justify-around p-[20px]'>
        <Image src={img2} alt={''} />

        <div className=' w-[80%] text-[20px] font-semibold'>
                <h1>Planters Organizations</h1>
                <p className='text-[14px] mt-8'>Zuraverse is a novel Play-Earn-Conserve model of narrative based Web3 gaming. We are very passionate about nature conservation and thus Virtual Forest would help immensely to establish the PEC model . </p>
            </div>

        </div>
        <div className=' grid md:grid-cols-2 justify-around p-[20px]'>
        <div className=' w-[80%] text-[20px] font-semibold'>
                <h1>Zuraverse </h1>
                <p className='text-[14px] mt-8'>
Zuraverse is a novel Play-Earn-Conserve model of Web3 gaming. All our games and experiences are being made interoperable and thus Virtual Forest would be an integral part of the ecosystem to establish PEC model. </p>
            </div>
            <Image src={img3} alt={''}/>

        </div>
        </div>
  )
}

export default About