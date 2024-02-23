import Image from 'next/image';
import React from 'react';
import eslandWallpaper6 from '../../../public/images/archive/ESLAND_WALLPAPER_06b.png';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const Hero = () => {
  return (
    <div className="relative flex h-[70vh] max-w-full items-start justify-center lg:h-[85vh]">
      <Image
        src={eslandWallpaper6}
        width={1920}
        height={1080}
        priority
        className="h-full w-full object-cover object-top"
        alt="logo"
      />

      <div className={`absolute z-20 flex h-full w-full flex-col items-center justify-center px-20`}>
        <h1 className={`text-center text-[2.8rem] font-medium lg:text-[4rem] ${sora.className}`}>
          EDICIONES ANTERIORES
        </h1>
        <button className="shadow-custom mt-24 rounded-full border px-20 py-7 text-2xl  font-medium hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]">
          REVIVE LA ÚLTIMA GALA
        </button>
      </div>
    </div>
  );
};

export default Hero;
