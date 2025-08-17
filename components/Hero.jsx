
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen w-full pb-12 md:pb-16'>
        <h1 className='text-4xl md:text-8xl text-zinc-900 text-center pt-16 md:pt-12 font-semibold leading-none'>there is no place like<br /><span className='text-8xl md:text-9xl font-satoshi text-black italic font-extralight'>home.</span></h1>
        <div className='flex justify-center items-center'>
        <img 
            src="/gallery/20.jpg"
            alt="Hero Image"
            className='rounded-4xl mt-10 md:mt-12 w-[90vw] md:w-[89vw] h-[60vh] md:h-[80vh] object-cover'
        />
        </div>
    </div>
  )
}

export default Hero