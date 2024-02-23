import Image from 'next/image';
import React from 'react';
import finalist from '../../../public/images/finalist/bgi_02.18733bfe.jpg';
import download from '../../../public/images/finalist/download.svg';

const Hero = () => {
  return (
    <div className="relative flex h-[110vh] max-w-full items-start lg:h-[105vh]">
      <Image
        src={finalist}
        width={1920}
        height={1080}
        priority
        className="h-full w-full object-cover object-top"
        alt="logo"
      />

      <div className={`absolute z-20 flex h-full w-full flex-col items-center justify-center px-20 lg:w-[60%] `}>
        <h1 className="mb-10 w-full text-start text-[2.8rem] font-semibold lg:text-[5rem]">
          FINALISTAS DE LA 3ª EDICIÓN DE LOS PREMIOS ESLAND
        </h1>
        <p className="mb-20 text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
          El periodo de votaciones ha finalizado. Descubre a los creadores más votados de este año por la comunidad
          hispanohablante del contenido en directo.
        </p>

        <button className="shadow-custom my-20 rounded-full border px-24 py-6 text-3xl font-medium hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]">
          Ver Finalistas
        </button>

        <div className="my-32 flex flex-col items-center gap-5 lg:flex-row lg:justify-start">
          <p className=" text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
            Criterios finales de nominación para la 3ª edición de los Premios Esland.
          </p>
          <Image
            src={download}
            width={60}
            height={60}
            priority
            className="h-[35px] w-[30px] object-cover object-top"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
