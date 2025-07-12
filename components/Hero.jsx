import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen w-full'>
        <h1 className='text-7xl text-zinc-900 text-center pt-24 font-bold'>There is no place like<br /><span className='text-9xl text-black italic font-extralight'>home.</span></h1>
        <div className='flex justify-center items-center'>
        <Image 
            src="/images/bg.jpg"
            alt="Hero Image"
            className='rounded-4xl mt-12 w-[80vw] h-[80vh] object-cover'
            width={800}
            height={600}
     
        />
        </div>
    </div>
  )
}

export default Hero