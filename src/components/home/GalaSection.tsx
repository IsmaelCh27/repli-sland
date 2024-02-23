import Image from 'next/image';
import React from 'react';
import pistas from '../../../public/images/home/pistas.png';
import grefposing from '../../../public/images/home/grefposing.png';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const GalaSection = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="relative col-span-12 h-screen overflow-hidden bg-[#010a2e] lg:col-span-6">
        <Image
          src={pistas}
          width={1980}
          height={1080}
          priority
          className="h-full w-full translate-y-56 object-cover mix-blend-luminosity"
          alt="logo"
        />
        <div className="absolute top-24 px-14 lg:left-20 lg:w-[70%]">
          <h2 className={`mb-2 text-[3rem] font-medium lg:mb-8 lg:text-[4rem] ${sora.className}`}>
            LA ALFOMBRA BLANCA
          </h2>
          <h3 className={`mb-20 text-[2.5rem] font-medium text-[#c1c1c1] lg:text-[3rem] ${sora.className}`}>
            16 de febrero de 2024
          </h3>
          <p className="text-[1.85rem] font-extralight lg:text-[2rem]">
            Este año, el momento de la alfombra azul será sustituido y mejorado, gracias a los increíbles paisajes
            andorranos, por una <strong className="font-medium">alfombra blanca</strong> en plena nieve, situada en las{' '}
            <strong className="font-medium">pistas de esquí de Andorra.</strong>
          </p>
        </div>
      </div>
      <div className="relative col-span-12 h-screen overflow-hidden bg-[#01356d] lg:col-span-6">
        <Image
          src={grefposing}
          width={1980}
          height={1080}
          priority
          className="h-full w-full translate-y-56 object-cover mix-blend-luminosity"
          alt="logo"
        />
        <div className="absolute top-24 px-14 lg:left-20 lg:w-[70%]">
          <h2 className={`mb-2 text-[3rem] font-medium lg:mb-8 lg:text-[4rem] ${sora.className}`}>LA GALA</h2>
          <h3 className={`mb-20 text-[2.5rem] font-medium text-[#c1c1c1] lg:text-[3rem] ${sora.className}`}>
            17 de febrero de 2024
          </h3>
          <p className="text-[1.85rem] font-extralight lg:text-[2rem]">
            Una gala de premios llena de{' '}
            <strong className="font-medium">contenido de primer nivel y muchas sorpresas</strong>, en la que se
            descubrirán los <strong className="font-medium">ganadores</strong>de esta tercera edición de los Premios
            ESLAND.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalaSection;
