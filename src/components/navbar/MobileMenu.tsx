'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import mobileIcon from '../../../public/images/icons/mobile-button.png';
import instaIcon from '../../../public/images/icons/i-instagram.png';
import twitterIcon from '../../../public/images/icons/i-twitter.png';
import redditIcon from '../../../public/images/icons/i-reddit.png';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="relative z-20 lg:hidden" onClick={() => setOpen(!open)}>
        <Image
          style={{ width: 'auto', height: 45 }}
          src={mobileIcon}
          width={50}
          height={54}
          priority
          className="box-shadow-custom"
          alt=""
        />
      </button>
      <div
        className={`absolute left-0 top-0 z-0 flex  ${
          open ? 'mt-0 ' : 'mt-[-100vh]'
        } h-screen w-full  flex-col items-center justify-center bg-primary transition-all duration-[500ms] ease-in-out  lg:hidden`}
      >
        <div className="flex h-full items-center justify-center">
          <Menu setOpen={setOpen} />
        </div>

        <div className="pb-12 text-center font-extralight">
          <div className="mb-20 flex justify-center gap-10">
            <Link href={'/'}>
              <Image
                style={{ width: 'auto', height: 43 }}
                src={instaIcon}
                width={50}
                height={54}
                priority
                className="box-shadow-custom"
                alt=""
              />
            </Link>
            <Link href={'/'}>
              <Image
                style={{ width: 'auto', height: 43 }}
                src={twitterIcon}
                width={50}
                height={54}
                priority
                className="box-shadow-custom"
                alt=""
              />
            </Link>
            <Link href={'/'} className="">
              <Image
                style={{ width: 'auto', height: 43 }}
                src={redditIcon}
                width={50}
                height={54}
                priority
                className="box-shadow-custom"
                alt=""
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <span className="me-1 mt-[1px] text-3xl">©</span>
            <p className="mb-3 text-2xl">ESLAND 2021 - {new Date().getFullYear()}</p>
          </div>
          <p className="text-2xl">Todos los derechos reservados</p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
