'use client';

import Image from 'next/image';

export default function FooterBoxes() {
  return (
    <section className="w-full px-4 md:px-20 py-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 bg-black text-white rounded-3xl p-8 relative overflow-hidden">
          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-8">Where comfort meets culture.</h2>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-sm mb-8">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Community</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">FAQ</a>
          </div>

          {/* Email CTA */}
          <div className="bg-white rounded-md flex overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 w-full text-black text-sm outline-none bg-transparent"
            />
            <button className="bg-black px-4 py-2 text-black font-bold">→</button>
          </div>

          {/* Subtext */}
          <p className="text-sm mt-4">
            Need help? <a href="#" className="underline">Get in touch</a>
          </p>

          {/* Decorative Background Word */}
          <div className="absolute bottom-4 left-4 text-[48px] sm:text-[60px] opacity-10 font-bold tracking-tight">
            quiet•calm
          </div>
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
