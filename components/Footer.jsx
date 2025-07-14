'use client';

import Image from 'next/image';

export default function FooterBoxes() {
  return (
    <section className="w-full px-4 md:px-20 py-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Box: 3 columns */}
        <div className="md:col-span-3 bg-black rounded-3xl p-8 min-h-[400px]">
          {/* Your custom footer content here */}
          <p className="text-sm">SIGN UP FOR OUR NEWSLETTER</p>
        </div>

        {/* Right Box: 1 column */}
        <div className="md:col-span-1 rounded-3xl overflow-hidden min-h-[400px] bg-gray-300">
          <Image
            src="/images/bg.jpg" // replace with your actual image
            alt="Product Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
