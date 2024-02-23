import React, { useState } from 'react';
import { Sora } from 'next/font/google';
import Image from 'next/image';

const sora = Sora({ subsets: ['latin'] });

const Galery = () => {
  const [galery, setGalery] = useState(new Array(6).fill(0));
  return (
    <div className=" px-7 py-20 lg:px-40">
      <div className="mb-40">
        <h2 className={`text-center text-[4rem] font-medium ${sora.className}`}>GALERÍA</h2>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {galery.map((data, index) => (
          <div className="archive-shadow-custom col-span-6 lg:col-span-4" key={index}>
            <Image src={`/images/galery/${index + 1}.jpg`} width={675} height={536} alt="" className="" />
          </div>
        ))}
      </div>
      {galery.length <= 6 && (
        <div className="mt-20 py-10 text-center">
          <button
            className="box-shadow-custom rounded-full border px-14 py-8 text-xl"
            onClick={() => setGalery(new Array(72).fill(0))}
          >
            DESCÚBRELAS TODAS
          </button>
        </div>
      )}
    </div>
  );
};

export default Galery;
