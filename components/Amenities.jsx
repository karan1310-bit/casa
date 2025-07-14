'use client';

import Image from 'next/image';

export default function AmenitiesSection() {
  return (
    <section className="py-12 px-4 md:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text + Amenities */}
        <div>
          {/* Heading */}
          <p className="text-lg md:text-xl font-light text-black leading-relaxed mb-6">
            Earthy tones and contemporary design offer a sense of warmth, while the stylish space is equipped with all the amenities for a relaxing stay.
          </p>

          {/* Amenities Grid */}
          <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-[#d8d0c3] grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-sm text-black mb-6">
            <span className="flex items-center gap-2">🌐 WiFi</span>
            <span className="flex items-center gap-2">🧺 Washing machine</span>
            <span className="flex items-center gap-2">❄️ Air conditioning</span>
            <span className="flex items-center gap-2">🌿 Veranda</span>
            <span className="flex items-center gap-2">🌡️ Heating</span>
            <span className="flex items-center gap-2">📺 TV</span>
            <span className="flex items-center gap-2">🌊 Sea view</span>
            <span className="flex items-center gap-2">☕ Nespresso coffee machine</span>
            <span className="flex items-center gap-2">🍳 Kitchen</span>
            <span className="flex items-center gap-2">🧼 Iron</span>
          </div>

          {/* Notice Box */}
          <div className="bg-white/40 border border-dashed border-[#d8d0c3] px-5 py-3 text-sm text-black rounded-xl mb-6 flex items-center gap-2">
            ⚠️ It is on the 3rd floor without an elevator.
          </div>

          {/* Button */}
          <button className="bg-[#e6e0d2] text-black text-sm font-medium px-6 py-3 rounded-full w-full sm:w-auto">
            Show all benefits
          </button>
        </div>

        {/* Right: Map */}
        <div className="rounded-3xl overflow-hidden h-[300px] md:h-auto">
          <iframe
            className="w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d385.5388885457932!2d75.78074539432698!3d23.174407372145435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752517650720!5m2!1sen!2sin"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
