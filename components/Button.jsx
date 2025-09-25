'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const FlairButton = () => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, 'xPercent');
    const ySet = gsap.quickSetter(flair, 'yPercent');

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientX - left);
      const y = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientY - top);
      return { x, y };
    };

    const handleMouseEnter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);
      gsap.to(flair, { scale: 1, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseMove = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: 'power2',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <a
      href={`https://wa.me/917225928721?text=${encodeURIComponent(
    `Hi there! I’d love to reserve this place — is it available?`
  )}`} target="_blank"
      ref={buttonRef}
      className="relative inline-flex items-center justify-center px-4 md:px-6 py-1 md:py-2 font-DMregular text-black transition-colors duration-150 ease-out rounded-full border-[2px] border-black group overflow-hidden"
    >
      <span
        ref={flairRef}
        className="absolute inset-0 transform scale-0 rounded-full pointer-events-none"
      >
        <span className="absolute w-[170%] aspect-square bg-black rounded-full left-0 top-0 transform -translate-x-1/2 -translate-y-1/2"></span>
      </span>
      <span className="relative z-10 group-hover:text-white transition-colors text-lg md:text-xl duration-200">Book now</span>
    </a>
  );
};

export default FlairButton;
