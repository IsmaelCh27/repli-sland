import React, { useEffect, useState } from 'react';
import { Sora } from 'next/font/google';
import CountUp from 'react-countup';

const sora = Sora({ subsets: ['latin'] });

const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(document.getElementById('numbers') as HTMLElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-7 py-20 lg:px-40">
      <div className="mb-40">
        <h2 className={`text-center text-[3.5rem] font-medium lg:text-[8rem] ${sora.className}`}>
          LOS ESLAND EN NÚMEROS
        </h2>
      </div>
      <div id="numbers" className="pb-52">
        {isVisible && (
          <>
            <div className="mb-5 text-center">
              <p className="text-shadow-custom text-[9rem] font-semibold lg:text-[18rem]">
                <CountUp
                  start={0}
                  end={227}
                  duration={3}
                  redraw={true}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                />
              </p>
              <p className="mt-[-3.1rem] text-[3.6rem] font-extralight lg:mt-[-5.1rem] lg:text-[5.6rem]">
                NOTICIAS EN PRENSA
              </p>
            </div>

            <div className="mb-5 text-center">
              <p className="text-shadow-custom text-[9rem] font-semibold lg:text-[18rem]">
                +
                <CountUp
                  decimals={1}
                  start={0}
                  end={69.9}
                  duration={3}
                  redraw={true}
                  useEasing={true}
                  useGrouping={true}
                  separator="."
                />
                M
              </p>
              <p className="mt-[-3.1rem] text-[3.6rem] font-extralight lg:mt-[-5.1rem] lg:text-[5.6rem]">
                DE VISUALIZACIONES
              </p>
            </div>
            <div className="text-center">
              <p className="text-shadow-custom text-[9rem] font-semibold lg:text-[18rem]">
                {' '}
                +
                <CountUp
                  decimals={1}
                  start={0}
                  end={3.2}
                  duration={5}
                  redraw={true}
                  useEasing={true}
                  useGrouping={true}
                  separator="."
                />
                M€
              </p>
              <p className="mt-[-3.1rem] text-[3.6rem] font-extralight lg:mt-[-5.1rem] lg:text-[5.6rem]">
                EN MEDIOS GANADOS
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Numbers;
