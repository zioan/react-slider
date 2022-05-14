import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import img1 from '../assets/unsplash1.jpg';
import img2 from '../assets/unsplash2.jpg';
import img3 from '../assets/unsplash3.jpg';
import img4 from '../assets/unsplash4.jpg';

function Slider2() {
  const images = [img1, img2, img3, img4];
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  return (
    <div className='m-6'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-full h-[400px]'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-full h-[400px] px-6'
              />
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider2;
