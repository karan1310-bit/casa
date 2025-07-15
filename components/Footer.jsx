'use client';

import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa'; 

export default function FooterBoxes() {
  return (
    <section className="w-full px-4 md:px-20 pt-20 md:pt-12 pb-12">
      <div className="max-w-8xl mx-auto">
        <div className="bg-[#6a625c] text-gray-200 rounded-3xl px-8 md:px-8 py-6 md:py-8 overflow-hidden">
          {/* Inner Grid: 3:1 Layout with full height */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:min-h-[400px]">
            {/* Left Column (3/4) */}
            <div className="md:col-span-3 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight mb-10">
                  Where comfort meets culture.
                </h2>

                <div className="border border-white/20 rounded-2xl w-full max-w-xl px-6 md:px-8 py-6 flex items-center justify-between hover:bg-white/5 transition mb-10">
                  <div>
                    <h3 className="text-lg md:text-xl font-medium mb-1">Stay connected</h3>
                    <p className="text-sm md:text-lg text-gray-300">Follow us on Instagram</p>
                  </div>
                  <a
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white hover:text-gray-200 transition"
                  >
                    <FaInstagram className="text-4xl" />
                  </a>
                </div>
              </div>

              {/* Tagline at the bottom of left column */}
              <div className="text-xl sm:text-3xl opacity-20 font-light tracking-widest">
                Modern • Minimal • Mindful
              </div>
            </div>

            {/* Right Column (1/4) - Full Height Image */}
            <div className="md:col-span-1 rounded-2xl overflow-hidden h-full">
              <Image
                src="/images/bg.jpg" // Replace with actual image path
                alt="Room preview"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
