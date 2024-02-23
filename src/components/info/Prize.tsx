import React from 'react';
import infoImg4 from '../../../public/images/info/info-img4.png';
import Image from 'next/image';

const Prize = () => {
  return (
    <div className="bg-primary pb-20">
      <div className="flex min-h-[85vh] flex-col items-center justify-center gap-36 bg-gradient-to-t from-[#000527] from-[0%] to-[#1682C7] to-[100%] px-10 md:px-28 lg:flex-row lg:bg-gradient-to-r lg:from-[45%] lg:px-40">
        <div className="w-[100%] lg:w-[50%]">
          <h2 className={`mb-10 mt-16 w-full text-center text-[2.5rem] font-semibold  leading-[1.2] lg:hidden`}>
            EL PREMIO A LA CREACIÓN
          </h2>
          <Image src={infoImg4} width={720} height={720} priority className=" h-auto w-full  " alt="logo" />
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <h2
            className={`mb-14 hidden w-full text-[2rem] font-semibold leading-[1.2] lg:block lg:text-left lg:text-[4rem] `}
          >
            EL PREMIO A LA CREACIÓN
          </h2>
          <p className="mb-16 text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
            El trofeo que se entrega a los ganadores y ganadoras en la ceremonia es{' '}
            <strong className="font-semibold">una representación de la letra “A” dividida en tres fragmentos</strong> y
            ensambladas a modo de artilugio futurista sobre el que se construye la narrativa del evento.
          </p>
          <p className="text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
            Un artefacto de origen desconocido que dota de{' '}
            <strong className="font-semibold">herramientas y habilidades para la creación.</strong> Una metáfora sobre
            la emancipación del talento gracias a la tecnología y la irrupción de los creadores de contenido en el mundo
            del entretenimiento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prize;
