import Image from 'next/image';
import React from 'react';
import trofeo from '../../../public/images/info/logo-y-trofeo.png';
import fondoPantalla from '../../../public/images/info/fondos-de-pantalla.png';
import notaPrensa from '../../../public/images/info/nota-de-prensa.png';

const Kit = () => {
  return (
    <div className="bg-primary py-20 lg:py-40">
      <div className="w-full">
        <h2 className={`mb-20 text-center text-[2.5rem] font-semibold  leading-[1.2] lg:text-[3.8rem]`}>
          KIT DE PRENSA
        </h2>
      </div>
      <div className="flex flex-col gap-20 px-16 pb-20 md:px-20 lg:flex-row lg:gap-40 lg:px-40">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-5 text-3xl font-semibold">LOGOTIPO Y TROFEO</h3>
          <Image
            src={trofeo}
            width={720}
            height={720}
            priority
            className="h-auto w-[100%] hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)] md:w-[60%] lg:w-full"
            alt="logo"
          />
          <button className="shadow-custom mt-7 rounded-full border px-16 py-3 text-2xl font-medium hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]">
            DESCARGAR
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-5 text-3xl font-semibold">FONDOS DE PANTALLA</h3>
          <Image
            src={fondoPantalla}
            width={720}
            height={720}
            priority
            className="h-auto w-[100%] hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)] md:w-[60%] lg:w-full"
            alt="logo"
          />
          <button className="shadow-custom mt-7 rounded-full border px-16 py-3 text-2xl font-medium hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]">
            DESCARGAR
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-5 text-3xl font-semibold">NOTA DE PRENSA</h3>
          <Image
            src={notaPrensa}
            width={720}
            height={720}
            priority
            className="h-auto w-[100%] hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)] md:w-[60%] lg:w-full"
            alt="logo"
          />
          <button className="shadow-custom mt-7 rounded-full border px-16 py-3 text-2xl font-medium hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]">
            DESCARGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kit;
