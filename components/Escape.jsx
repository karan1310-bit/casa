'use client';

export default function EscapeAmenitiesSection() {
  return (
    <section className="w-full px-4 md:px-12 md:py-16 font-DMregular">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column: All content */}
        <div>
          <div className="grid grid-cols-1 gap-6 text-base md:text-2xl text-black md:max-w-xl leading-snug mt-2 pb-2">
            <p>
              
  Enjoy a peaceful, well-designed stay in the heart of Ujjain — one of India’s most sacred cities. Perfect for families, couples, or solo travelers seeking comfort with home-like amenities.
</p>

      
            <p>It offers a serene space to relax after exploring Ujjain’s ancient temples, riverside ghats, and vibrant local life.
</p>
<p>
  Whether you're here for darshan or a quiet escape, this home offers the perfect balance of tradition, warmth, and modern convenience.
</p>
        
          </div>

        </div>

        {/* Right Column: Map */}
        <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
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
