'use client'

import EscapeAmenitiesSection from '@/components/Escape'
import FooterBoxes from '@/components/Footer'
import PhotoGallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import MiniEscape from '@/components/Mini'
import Navbar from '@/components/Navbar'
import Lenis from '@studio-freight/lenis'
import React, { useEffect } from 'react'

const page = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className='bg-[#e8e4d9] text-black min-h-screen w-full font-neue'>
      <Navbar />
      <Hero />
      <MiniEscape />
      <PhotoGallery />
      <EscapeAmenitiesSection />
      <FooterBoxes />
    </main>
  )
}

export default page