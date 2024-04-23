import React, { useEffect } from "react";
import bannerImg from "../../assets/home/bg.jpg";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal'

const Banner = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#h1', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('#p', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#btn1', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('#btn2', {
      origin: 'right',
      distance: '50px', 
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bannerImg})`}}>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 id="h1" className="mt-[-1.5em] mb-5 text-7xl font-light text-[#2c2f24]">Best food for<br/>your taste</h1>
          <p id="p" className="mb-5 text-base text-[#2c2f24]">Discover delectable cuisine and unforgettable moments<br/>in our welcoming, culinary haven.</p>
          <div className="flex justify-center items-center gap-4">
            <Link id="btn1" to='/about' className="bg-[#ad343e] hover:bg-[#ad343eb4] transition-all ease-in-out text-white font-semibold py-4 px-6 rounded-full">
              About Us
            </Link>
            <Link id="btn2" to='/menu' className="bg-transperant hover:bg-[#ad343e] hover:text-white hover:border-1 hover:border-solid transition-all ease-in-out text-[#182226] border-2 border-[#2c2f24] hover:border-[#ad343e] font-semibold py-4 px-6 rounded-full">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
