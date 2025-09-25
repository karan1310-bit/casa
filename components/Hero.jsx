
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen w-full pb-8 md:pb-16 font-DMregular'>
        <h1 className='text-4xl md:text-8xl text-zinc-900 text-center pt-10 md:pt-8 leading-none'>There is no place like<br /><span className='text-7xl md:text-9xl font-EpiItalic'>home.</span></h1>
        <div className='flex justify-center items-center'>
        <img 
            src="/images/9.jpg"
            alt="Hero Image"
            className='rounded-4xl mt-10 md:mt-10 w-[90vw] md:w-[92vw] h-[60vh] md:h-[80vh] object-cover object-[50%_50%] md:object-[50%_75%]'
        />
        </div>
    </div>
  )
}

export default Hero