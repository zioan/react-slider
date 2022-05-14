import data from '../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

function Slider1() {
  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  return (
    <div className='m-6'>
      {myData.map((item) => {
        const { id, image, title, random } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(id)}
            >
              <FiChevronLeft />
            </button>
            <div className='flex flex-col items-center'>
              <img src={image} alt={title} />
              <h2 className='text-2xl font-bold my-6'>{id}</h2>
              <h3 className='text-xl'>{title}</h3>
              <p>{random}</p>
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(id)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider1;
