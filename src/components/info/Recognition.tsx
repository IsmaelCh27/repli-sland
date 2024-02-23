import React from 'react';
import infoImg1 from '../../../public/images/info/info-img1.png';
import Image from 'next/image';

const Recognition = () => {
  return (
    <div className="bg-primary px-14 py-20 md:px-36 lg:px-48">
      <div className="flex min-h-[80vh] flex-col-reverse items-center justify-center gap-36 lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <h2 className={`mb-14 w-full  text-[2rem] font-medium leading-[1.2] lg:text-left lg:text-[3.8rem] `}>
            Un reconocimiento único para creadores, creadoras y comunidades que buscan su lugar en el mundo del
            entretenimiento en directo.
          </h2>
          <p className="mb-16 text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
            Los Premios ESLAND son una iniciativa privada promovida por el célebre streamer TheGrefg y buscan apoyar y
            reconocer la creación de contenido en el ámbito hispanohablante.
          </p>
          <p className="text-[1.8rem] font-extralight leading-[1.4] lg:block lg:text-[2rem]">
            ESLAND es el acrónimo de ESPAÑA, LATINOAMÉRICA Y ANDORRA, tres localizaciones geográficas que comparten el
            idioma que las une más allá de cualquier frontera, ya sea física o virtual.
          </p>
        </div>
        <div className="mb-20 w-[100%] lg:w-[50%]">
          <Image
            src={infoImg1}
            width={1980}
            height={1080}
            priority
            className=" h-auto w-full translate-y-10 "
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Recognition;
