'use client';

import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa'; 
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function FooterBoxes() {
  return (
    <section className="w-full px-4 md:px-12 pt-20 md:pt-12 pb-8 font-DMregular">
      <div className="max-w-8xl mx-auto">
        <div className="bg-[#F0EEEB] text-gray-900 rounded-3xl px-6 md:px-8 py-6 md:py-8 overflow-hidden">
          {/* Inner Grid: 3:1 Layout with full height */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:min-h-[400px]">
            {/* Left Column (3/4) */}
            <div className="md:col-span-3 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight mb-10">
                  Where comfort meets culture.
                </h2>

                

                <div className="border border-black/50 rounded-2xl w-full max-w-xl px-4 md:px-8 py-6 flex items-center justify-between hover:bg-white/5 transition mb-4">
  <div>
    <h3 className="text-lg md:text-xl font-medium mb-1">Booking Inquiry</h3>
    <p className="text-sm md:text-lg text-gray-800">Reach out on WhatsApp or Email</p>
  </div>
  <div className="flex items-center gap-4">
    <a
      href={`https://wa.me/917225928721?text=${encodeURIComponent(
        "Hi! I'm interested in booking your place. Is it available?"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-black hover:text-green-400 transition"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
    <a
      href="mailto:karanbhati1310@gmail.com?subject=Booking Inquiry&body=Hi! I’m interested in booking your place. Is it available?"
      className="text-2xl text-black hover:text-red-400 transition"
    >
      <FaEnvelope className="text-3xl" />
    </a>
  </div>

  
</div>

<div className="border border-black/50 rounded-2xl w-full max-w-xl text-left px-4 md:px-8 py-4 flex items-center justify-between hover:bg-white/5 transition mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-medium mb-1">Stay connected</h3>
                    <p className="text-sm md:text-lg text-gray-800">Follow us on Instagram</p>
                  </div>
                  <a
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-black hover:text-gray-800 transition"
                  >
                    <FaInstagram className="text-3xl text-black hover:text-[#ae9ab3] transition" />
                  </a>
                </div>
              </div>

              {/* Tagline at the bottom of left column */}
              <div className="mt-4 text-xl sm:text-3xl opacity-50 font-light tracking-widest">
                Modern • Minimal • Mindful
              </div>
            </div>

            {/* Right Column (1/4) - Full Height Image */}
            <div className="md:col-span-1 rounded-2xl overflow-hidden h-full">
              <Image
                src="/images/12.png" // Replace with actual image path
                alt="Room preview"
                width={500}
                height={600}
                className="w-full h-[0vh] md:h-[55vh] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
