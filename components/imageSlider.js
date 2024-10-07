// components/ImageSlider.js
import React from 'react';

const ImageSlider = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
  ];

  return (
    <div className="slider-wrapper overflow-hidden relative w-full  mt-10 mx-auto">
      <div className="slider flex animate-scroll w-[100%] gap-x-3"> 
        {images.concat(images).map((image, index) => (
          <div key={index} className="w-48 md:w-72 flex-shrink-0 overflow-hidden"> 
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover aspect-square w-full h-full"
              style={{
                clipPath: index % 2 === 0
                  ? 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)'  
                  : 'polygon(0 10%, 100% 0, 100% 100%, 0 90%);'  
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;