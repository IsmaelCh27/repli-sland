import React from 'react';

interface AdvertisementsProps {
  editionState: boolean;
}

const Advertisements = ({ editionState }: AdvertisementsProps) => {
  return (
    <div className="w-full px-4 py-44 md:px-24 lg:px-44">
      {editionState ? (
        <div className="flex  w-[full] justify-center mix-blend-luminosity">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9VHqKbR9LgM?si=tIuzt4gZhfLaEio8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            allowFullScreen
            className="h-[50.25vw] w-[85vw] border-0"
          ></iframe>
        </div>
      ) : (
        <div className="flex w-[full] justify-center mix-blend-luminosity">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aL8kcA3ZDOs?si=TkOGScLWLayeoWw-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            className="h-[50.25vw] w-[85vw] border-0"
          ></iframe>
        </div>
      )}
    </div>
  );
};
export default Advertisements;
