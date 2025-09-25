

export default function MiniEscape() {
  return (
    <section className="min-h-fit flex flex-col items-center justify-start font-DMregular px-4 md:px-4 py-2">

      {/* Title */}
      <div className="text-center mt-8">
        <h2 className="text-5xl md:text-8xl font-semibold tracking-tight text-black">
          mini. <span className="font-extralight font-EpiItalic">{'{ escape }'}</span>
        </h2>
        <p className="mt-4 md:mt-8 text-center text-base md:text-2xl text-black px-2 md:px-0 max-w-sm md:max-w-2xl md:mx-auto leading-snug">
         A thoughtfully designed stay in central Ujjain, just a few minutes from Mahakaleshwar Temple. Perfect for those seeking comfort, culture, and a peaceful retreat.
        </p>
      </div>

      {/* Info Grid */}
      <div className="mt-8 md:mt-12 w-full max-w-6xl grid grid-cols-5 border border-gray-500 rounded-3xl overflow-hidden text-center">
        {[
          { value: '2', label: 'visitors' },
          { value: '1', label: 'bedroom' },
          { value: '1', label: 'bed' },
          { value: '1', label: 'bathroom' },
          { value: '24', label: 'sq.m.' },
        ].map((item, index, arr) => (
          <div
            key={index}
            className={`py-4 md:py-6 md:px-4 ${
              index !== arr.length - 1 ? 'border-r border-gray-400 md:border-gray-500' : ''
            }`}
          >
            <div className="text-xl md:text-4xl font-semibold text-black">{item.value}</div>
            <div className="text-sm md:text-xl mt-1 text-gray-800">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
