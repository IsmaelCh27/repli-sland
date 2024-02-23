import React from 'react';
import instaIcon from '../../../public/images/icons/i-instagram.png';
import twitterIcon from '../../../public/images/icons/i-twitter.png';
import redditIcon from '../../../public/images/icons/i-reddit.png';
import logo from '../../../public/images/home/logo.png';
import ubiq from '../../../public/images/home/UBIQ_LOGO.c719aeaa.svg';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={`h-auto w-full `}>
      <div className="flex flex-col items-center lg:mb-28  lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center">
          <Link href={'/'} className="mt-[-40px] lg:mt-[-80px]">
            <Image
              style={{ width: 'auto', height: 150 }}
              src={logo}
              width={0}
              height={0}
              className="box-shadow-custom"
              alt=""
            />
          </Link>
          <div className="mt-20 flex justify-center gap-10">
            <Link href={'/'}>
              <Image
                style={{ width: 'auto', height: 25 }}
                src={instaIcon}
                width={0}
                height={0}
                className="box-shadow-custom"
                alt=""
              />
            </Link>
            <Link href={'/'}>
              <Image
                style={{ width: 'auto', height: 25 }}
                src={twitterIcon}
                width={0}
                height={0}
                className="box-shadow-custom"
                alt=""
              />
            </Link>
            <Link href={'/'} className="">
              <Image
                style={{ width: 'auto', height: 25 }}
                src={redditIcon}
                width={0}
                height={0}
                className="box-shadow-custom"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center pt-[4.5rem] text-[2.1rem] lg:items-start lg:pt-0 lg:text-[2.5rem]">
          <h5 className={`mb-3 font-semibold leading-[1.6]`}>LEGAL</h5>
          <Link href="/" className={`shadow-custom font-extralight leading-[1.6]`}>
            AVISO LEGAL
          </Link>
          <Link href="/" className={`shadow-custom font-extralight leading-[1.6]`}>
            PRIVACIDAD
          </Link>
          <Link href="/" className={`shadow-custom font-extralight leading-[1.6]`}>
            COOKIES
          </Link>
        </div>
        <div className="flex flex-col items-center pt-[4.5rem] text-[2.1rem] lg:items-start lg:pt-0 lg:text-[2.5rem]">
          <h5 className={`mb-3 font-semibold leading-[1.6]`}>WEB MAP</h5>
          <Link href="/" className={`shadow-custom font-extralight leading-[1.6]`}>
            HOME
          </Link>
          <Link href="/" className={`shadow-custom font-extralight leading-[1.6]`}>
            INFO
          </Link>
          <Link href="/" className={`shadow-custom font-extralight leading-[1.6]`}>
            ARCHIVO
          </Link>
        </div>
        <div className="mt-[4.5rem] flex flex-col items-center text-[2.1rem] lg:items-start lg:text-[2.5rem]">
          <h5 className="mb-[-25px] text-[2.5rem] font-semibold">PRODUCIDO POR:</h5>
          <Link href="/" className="">
            <Image
              style={{ width: 'auto', height: 210 }}
              src={ubiq}
              width={210}
              height={210}
              priority
              className="box-shadow-custom"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="w-full bg-[#005099] py-10 text-center">
        <small className="text-[2.5rem] font-extralight">
          © ESLAND 2021 - {new Date().getFullYear()}{' '}
          <span className="hidden lg:inline-flex">Todos los derechos reservados.</span>
        </small>
      </div>
    </div>
  );
};

export default Footer;
