import Image from 'next/image';
import React from 'react';
import logoHome from '../../../public/images/home/logo-home.svg';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const Hero = () => {
  return (
    <div className="relative flex h-[70vh] max-w-full items-start justify-center lg:h-[90vh]">
      <video
        src="/videos/360_LOGO.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="absolute left-0 top-0 z-20 h-full w-full object-cover object-top"
      >
        <source src="/videos/360_LOGO.mp4" type="video/mp4" />
        <source src="/videos/rotate-e48350a9.ogv" type="video/ogg" />
        <source src="/videos/360_LOGO.webm" type="video/webm" />
      </video>

      <div className="absolute z-20 flex w-full flex-col items-center justify-center">
        <Image
          src={logoHome}
          width={720}
          height={720}
          priority
          className="h-auto w-[95%] md:w-[65%] lg:w-[55%]"
          alt="logo"
        />

        <button
          className={`mt-[10px] animate-fade-up rounded-full bg-white px-28 py-5 text-2xl font-semibold text-[#2255A6] animate-duration-[2000ms] animate-once lg:mt-[-120px] ${sora.className}`}
        >
          FINALISTAS
        </button>
      </div>
      <div className="absolute bottom-0 left-0 z-20 flex h-[140px] w-full overflow-x-hidden">
        <div className="w-[50%]  border-b-[14rem] border-e-[49.5vw] border-b-[#0C1436] border-l-transparent border-r-transparent"></div>

        <div className="w-[50%]  border-b-[14rem] border-l-[49.5vw] border-b-[#0C1436] border-l-transparent border-r-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
