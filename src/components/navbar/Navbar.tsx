import Link from 'next/link';
import React, { useState } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import logo from '../../../public/images/home/logo-header.png';

import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="z-30 flex h-[9.1rem] items-center justify-between bg-primary px-[7.29vw] text-[2rem] font-extralight lg:justify-start">
      <Link href="/" className="z-20">
        <Image src={logo} width={50} height={54} alt="" />
      </Link>
      <nav className="z-20 hidden  w-full lg:flex lg:items-center lg:justify-between">
        <Menu setOpen={setOpen} />
      </nav>

      <MobileMenu />
    </header>
  );
};

export default Navbar;
