import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className='bg-[#e8e4d9] text-black min-h-screen w-full'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default page