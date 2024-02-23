import React from 'react';
import mountain from '../../../public/images/home/mountain.e99ec677.png';
import Image from 'next/image';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const NoveltySection = () => {
  return (
    <div className="flex h-[90vh] w-full flex-col bg-primary md:h-[80vh] lg:h-[90vh]">
      <div className="relative h-full overflow-hidden bg-gradient-to-r from-[#000527] from-[0%] to-[#13abec] to-90% lg:from-[24%]">
        <div className="mt-[10%] w-full lg:ms-[7%] lg:mt-[18%] lg:w-[30%]">
          <h2
            className={`mb-14 w-full text-center text-[3rem] font-semibold leading-[1.2] lg:text-left lg:text-[4rem] ${sora.className}`}
          >
            ANDORRA: EL CÉNIT <br />
            DE LOS PREMIOS ESLAND
          </h2>
          <p className="hidden text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
            Una nueva edición <strong className="font-medium">cargada de novedades</strong> y contenido, que empezará
            varias semanas antes de la ansiada gala.{' '}
            <strong className="font-medium">Directos especiales, colaboraciones, conciertos y mucho más</strong> en lo
            que será una auténtica fiesta dedicada a la creación de contenido.
          </p>
        </div>

        <Image
          src={mountain}
          width={1980}
          height={1080}
          priority
          className="absolute bottom-0 left-0 h-auto w-full translate-y-10 object-contain mix-blend-luminosity"
          alt="logo"
        />
      </div>
      <div className="px-12 py-14 text-center lg:hidden">
        <p className="text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
          Una nueva edición <strong className="font-medium">cargada de novedades</strong> y contenido, que empezará
          varias semanas antes de la ansiada gala.{' '}
          <strong className="font-medium">Directos especiales, colaboraciones, conciertos y mucho más</strong> en lo que
          será una auténtica fiesta dedicada a la creación de contenido.
        </p>
      </div>
    </div>
  );
};

export default NoveltySection;
