import Image from 'next/image';
import React from 'react';
import eslandWallpaper from '../../../public/images/info/ESLAND_WALLPAPER_06.png';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const Hero = () => {
  return (
    <div className="relative flex h-[70vh] max-w-full items-start justify-center lg:h-[90vh]">
      <Image
        src={eslandWallpaper}
        width={1920}
        height={1080}
        priority
        className="h-full w-full object-cover object-top"
        alt="logo"
      />

      <div className={`absolute z-20 flex h-full w-full flex-col items-center justify-center px-20 ${sora.className}`}>
        <h1 className="text-center text-[2.8rem] font-medium lg:text-[4rem]">LOS PREMIOS ESLAND</h1>
      </div>
      <div className="absolute bottom-0 left-0 z-20 flex h-[140px] w-full overflow-x-hidden">
        <div className="w-[50%]  border-b-[14rem] border-e-[49.5vw] border-b-primary border-l-transparent border-r-transparent"></div>

        <div className="w-[50%]  border-b-[14rem] border-l-[49.5vw] border-b-primary border-l-transparent border-r-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
