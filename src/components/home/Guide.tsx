import { Sora } from 'next/font/google';
import React from 'react';

const sora = Sora({ subsets: ['latin'] });

const Guide = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#000427] p-[5rem] ">
      <div className="flex h-full w-[90vw] justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nYPVr2IYTtk?si=ZdVcFqvRXfuPU1ZS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          className="h-[40.25vw] w-[85vw]"
        ></iframe>
      </div>

      <h2 className={`mb-[2rem] mt-[4rem] text-[3rem] font-semibold leading-[1.2] lg:text-[4rem] ${sora.className}`}>
        GUIA DE LA 3ª EDICIÓN DE LOS PREMIOS SLAND
      </h2>
    </div>
  );
};

export default Guide;
