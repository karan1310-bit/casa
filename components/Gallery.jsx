'use client';

import Image from 'next/image';

export default function PhotoGallery() {
  return (
    <section className="py-12 md:py-16 w-full px-4 md:px-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {/* Large Left Image */}
        <div className="md:col-span-3 relative h-[300px] md:h-[90vh]">
          <Image
            src="/images/1.jpg"
            alt="Main bedroom view"
            fill
            className="object-cover object-[45%] rounded-2xl md:rounded-none md:rounded-l-4xl"
          />
        </div>

        {/* Small Right Images */}
        <div className="md:col-span-2 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 h-[980px] md:h-[90vh]">
          <div className="relative w-full h-full">
            <Image
              src="/images/2.jpg"
              alt="Kitchen view"
              fill
              className="object-cover rounded-2xl md:rounded-none"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/4.jpg"
              alt="Wardrobe view"
              fill
              className="object-cover rounded-2xl md:rounded-none md:rounded-r-4xl"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/11.png"
              alt="Patio space"
              fill
              className="object-cover rounded-2xl md:rounded-none"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/6.jpg"
              alt="Bathroom sink"
              fill
              className="object-cover rounded-2xl md:rounded-none md:rounded-r-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
