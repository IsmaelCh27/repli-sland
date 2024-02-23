'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = ({ setOpen }: any) => {
  const pathName = usePathname();

  return (
    <div className="flex w-full flex-col items-center gap-12 lg:ms-[4.57vw] lg:flex-row lg:justify-between lg:gap-[4.5vw] lg:font-normal">
      <div className="flex flex-col items-center gap-14 lg:flex-row  lg:gap-[4.5vw]">
        <Link
          href="/info"
          className={`shadow-custom ${pathName === '/info' && 'border-b-2 border-white font-medium'}
        `}
          onClick={() => setOpen(false)}
        >
          INFO
        </Link>
        <Link
          href="/archivo"
          className={`shadow-custom ${pathName === '/archivo' && 'border-b-2 border-white font-medium'}`}
          onClick={() => setOpen(false)}
        >
          ARCHIVO
        </Link>
        <Link
          href="/finalistas"
          className={`shadow-custom ${pathName === '/vota' && 'border-b-2 border-white font-medium'}`}
          onClick={() => setOpen(false)}
        >
          FINALISTAS
        </Link>
      </div>

      <div className="mt-5 lg:mt-0">
        <span className="rounded-full border px-8 py-6 hover:shadow-[0px_0px_20px_7px_rgba(255,255,255,0.3)]  ">
          <Link href="/" className="shadow-custom" onClick={() => setOpen(false)}>
            ENTRADA EN LA ISLA ESLAND
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Menu;
