'use client';

import React, { useState } from 'react';
import { Sora } from 'next/font/google';
import Advertisements from './Advertisements';
import Palmares from './Palmares';
import Galery from './Galery';
import Numbers from './Numbers';

const sora = Sora({ subsets: ['latin'] });

const Edition = () => {
  const [editionState, setEditionState] = useState(false);
  return (
    <div className="bg-primary">
      <div className="flex h-36">
        <div className={`flex-1 ${editionState && 'bg-[#065099]'} ${sora.className}`}>
          <button
            className="shadow-custom h-full w-full px-5 text-3xl font-normal"
            onClick={() => setEditionState(!editionState)}
          >
            PRIMERA EDICIÓN
          </button>
        </div>
        <div className={`flex-1 ${!editionState && 'bg-[#065099]'} ${sora.className}`}>
          <button
            className="shadow-custom h-full w-full px-5 text-3xl font-normal"
            onClick={() => setEditionState(!editionState)}
          >
            SEGUNDA EDICIÓN
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#000527] from-[15%] to-[#1682c7] to-[165%]">
        <Advertisements editionState={editionState} />
        <Palmares />
        <Galery />
        <Numbers />
      </div>
    </div>
  );
};

export default Edition;
