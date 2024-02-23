import Hero from '@/components/info/Hero';
import Kit from '@/components/info/Kit';
import Prize from '@/components/info/Prize';
import Recognition from '@/components/info/Recognition';
import React from 'react';

const InfoPage = () => {
  return (
    <main className="">
      <Hero />
      <Recognition />
      <Prize />
      <Kit />
    </main>
  );
};

export default InfoPage;
