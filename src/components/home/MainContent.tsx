import Image from 'next/image';
import React from 'react';
import homeBG1 from '../../../public/images/home/home-bg-1.png';
import logo from '../../../public/images/home/logo-header.png';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const MainContent = () => {
  return (
    <div className="relative z-10 mt-[-14rem] h-[100vh] w-full bg-[#010527] lg:h-[110vh]">
      <Image src={homeBG1} width={720} height={720} priority className="h-full w-[100%] opacity-50" alt="logo" />

      <div className="absolute top-0 z-30 flex h-full w-full flex-col items-center justify-end pb-20 lg:justify-end">
        <Image
          src={logo}
          width={720}
          height={720}
          priority
          className="mb-20 hidden h-auto w-[44px] lg:block"
          alt="logo"
        />
        <h2 className={`mb-24 w-[90%] text-center text-[3.2rem] font-medium lg:text-[4.2rem] ${sora.className}`}>
          Bienvenidos/as <br /> a los Premios ESLAND
        </h2>
        <p className="mb-16 w-[90%] text-[1.9rem] font-extralight leading-[1.4] lg:w-[625px] lg:text-[2.1rem]">
          El cine tiene los Oscars, la música tiene los Grammy y{' '}
          <strong className="font-semibold">el streaming tiene los ESLAND</strong>. Los premios que celebran la
          creatividad y el talento de los mejores creadores de contenido de{' '}
          <strong className="font-semibold">la comunidad hispanohablante</strong>.
        </p>
        <p className="mb-16 w-[90%] text-[1.9rem] font-extralight leading-[1.4] lg:w-[625px] lg:text-[2.1rem]">
          España, Latinoamérica y Andorra unidas por creadores, creadoras y sus comunidades, para recordar y revivir{' '}
          <strong className="font-semibold">algunos de los mejores momentos del año</strong>.
        </p>

        <p className="mb-16 w-[90%] text-[1.9rem] font-extralight leading-[1.4] lg:w-[625px] lg:text-[2.1rem]">
          Tras dos galas celebradas, una en el Palau de la Música Catalana de Barcelona, y otra en el Auditorio Nacional
          de la Ciudad de México, solo queda esperar a{' '}
          <strong className="font-semibold">la tercera edición en Andorra</strong>.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
