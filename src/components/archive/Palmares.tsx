import React, { useState } from 'react';
import { palmaresData, PalmaresDataI } from './palmaresData';
import { Sora } from 'next/font/google';
import Image from 'next/image';

const sora = Sora({ subsets: ['latin'] });

const Palmares = () => {
  const [palmaresActive, setPalmaresActive] = useState<PalmaresDataI>(palmaresData[0]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-7 py-20 lg:px-40">
      <div className="mb-40">
        <h2 className={`text-center text-[4rem] font-medium ${sora.className}`}>PALMARÉS</h2>
      </div>
      <div className="flex flex-col-reverse gap-10 lg:flex-row">
        <div className="flex-1 flex-col bg-red-400">
          <div className="flex justify-between bg-primary px-5 py-4">
            <div className="">
              <span className="text-[1.9rem] font-medium">Categoría</span>
            </div>
            <div className="">
              <span className="text-[1.9rem] font-medium">Ganadores</span>
            </div>
          </div>
          {palmaresData.map((data, index) => (
            <div
              key={index}
              className={`archive-shadow-custom ${
                palmaresActive.id === data.id && 'archive-shadow-active'
              } flex flex-1 justify-between px-5 py-[.36rem] ${
                index % 2 === 0 ? 'bg-gradient-to-l from-[#0f2646] from-[-15%] to-[#1682c7]' : 'bg-primary'
              }`}
              onClick={() => {
                setPalmaresActive(data);
                setIsOpen(!isOpen);
              }}
            >
              <div className="">
                <span className="text-[1.9rem] font-extralight">{data.category}</span>
              </div>
              <div className="">
                <span className="text-[1.9rem] font-extralight">{data.winners[0].name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-center gap-x-4 px-2 lg:gap-x-16 lg:px-20">
          <div className="archive-shadow-active w-[55%] bg-[#1682c7] lg:w-[16.56vw]">
            <div className="">
              <Image
                src={palmaresActive.winners[0].image}
                width={420}
                height={318}
                alt=""
                className="mix-blend-luminosity"
              />
            </div>
            <div className="flex max-h-[17.2rem] flex-col items-center pb-14">
              <div className="mt-[-25px] flex">
                <div className="h-[4.7rem] w-[58px] bg-white px-1 text-center">
                  <span className="mb-2 text-[4rem] font-medium text-[#000527]">
                    {palmaresActive.winners[0].id} <sup className=" text-5xl">o</sup>
                  </span>
                </div>
              </div>
              <div className=" w-full px-5 py-5 lg:px-12 lg:py-10">
                <p className="text-xl font-normal uppercase text-white">{palmaresActive.winners[0].name}</p>
                <p className="text-[1.2rem] font-medium text-black lg:text-[1.5rem]">
                  COMUNIDAD: {palmaresActive.winners[0].community} %
                </p>
                <p className="text-[1.2rem] font-medium text-black lg:text-[1.5rem]">
                  STREAMERS: {palmaresActive.winners[0].streamers} %
                </p>
                <p className="text-[1.7rem] font-medium text-white lg:text-[2rem]">
                  TOTAL: {palmaresActive.winners[0].total} %
                </p>
              </div>
            </div>
          </div>

          <div className="w-[45%] bg-[#1682c7] lg:w-[15.94vw]">
            <div className="">
              <Image
                src={palmaresActive.winners[1].image}
                width={263}
                height={306}
                alt=""
                className="mix-blend-luminosity"
              />
            </div>
            <div className="flex max-h-[17.2rem] flex-col items-center pb-14">
              <div className="mt-[-25px] flex">
                <div className="h-[4.7rem] w-[58px] bg-white px-1 text-center">
                  <span className="mb-2 text-[4rem] font-medium text-[#000527]">
                    {palmaresActive.winners[1].id} <sup className=" text-5xl">o</sup>
                  </span>
                </div>
              </div>
              <div className=" w-full px-5 py-5 lg:px-12 lg:py-10">
                <p className="text-xl font-normal uppercase text-white">{palmaresActive.winners[1].name}</p>
                <p className="text-[1.2rem] font-medium text-black lg:text-[1.5rem]">
                  COMUNIDAD: {palmaresActive.winners[1].community} %
                </p>
                <p className="text-[1.2rem] font-medium text-black lg:text-[1.5rem]">
                  STREAMERS: {palmaresActive.winners[1].streamers} %
                </p>
                <p className="text-[1.6rem] font-medium text-white lg:text-[2rem]">
                  TOTAL: {palmaresActive.winners[1].total} %
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palmares;
