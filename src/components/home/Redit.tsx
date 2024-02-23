import Image from 'next/image';
import React from 'react';
import homeBG1 from '../../../public/images/home/home-bg-1.png';
import laptop from '../../../public/images/home/laptop_esland.010d733a.png';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

const Redit = () => {
  return (
    <div className="relative h-auto w-full lg:h-[95vh]">
      <div className="relative hidden h-[95vh] w-full lg:block lg:bg-[#000527]">
        <Image
          src={homeBG1}
          width={720}
          height={720}
          priority
          className="absolute left-0 top-0 hidden h-full w-[100%] lg:block"
          alt="logo"
        />

        <div className="flex h-full w-full items-start justify-center pt-40 lg:absolute lg:items-end lg:pt-0">
          <Image
            src={laptop}
            width={720}
            height={720}
            priority
            className=" w-[100%] mix-blend-luminosity lg:w-[70%]"
            alt="logo"
          />
        </div>

        <div className="absolute top-[25%] w-full lg:ms-[7%] lg:w-[35%]">
          <h2
            className={`mb-14 w-full text-center text-[3rem] font-semibold leading-[1.2] lg:text-left lg:text-[4rem] ${sora.className}`}
          >
            DISFRUTA DEL REDDIT DE LA COMUNIDAD
          </h2>
          <p
            className="leading-[ 1.4] hidden text-[1.9rem]
          font-extralight lg:block lg:text-[2.1rem]"
          >
            Este año, el reddit no formará parte de las votaciones de los premios, pero sí que{' '}
            <strong className="font-medium">formará parte de la comunidad</strong>. El subreddit oficial de los Premios
            ESLAND está abierto para ti, para que compartas tus clips, tus opiniones y para que
            <strong className="font-medium"> interactúes con toda la comunidad </strong> del streaming hispanohablante.
          </p>

          <button className="shadow-custom mt-20 rounded-full border px-40 py-6 text-3xl font-medium hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]">
            ÚNETE
          </button>
        </div>
      </div>

      <div className="relative h-auto w-full bg-[#2673C2] lg:hidden">
        <div className="flex h-full w-full flex-col items-start justify-center pt-20">
          <h2 className={`mb-3 w-full text-center text-[3rem] font-semibold leading-[1.2] ${sora.className}`}>
            DISFRUTA DEL REDDIT DE LA COMUNIDAD
          </h2>

          <Image src={laptop} width={720} height={720} priority className="w-[99%] mix-blend-luminosity" alt="logo" />

          <div className="mt-16 flex w-full flex-col items-center px-8 pb-20">
            <p className="leading-[ 1.4] text-start text-[1.9rem] font-extralight">
              Este año, el reddit no formará parte de las votaciones de los premios, pero sí que{' '}
              <strong className="font-medium">formará parte de la comunidad</strong>. El subreddit oficial de los
              Premios ESLAND está abierto para ti, para que compartas tus clips, tus opiniones y para que
              <strong className="font-medium"> interactúes con toda la comunidad </strong> del streaming
              hispanohablante.
            </p>

            <button className="mb-36 mt-28 rounded-full border px-40 py-6 text-center text-3xl font-medium">
              ÚNETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redit;
