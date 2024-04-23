import React, { useEffect } from "react";
import img from "../../../src/assets/about/information.jpg";
import ScrollReveal from 'scrollreveal'

const Information = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#info1', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  
    ScrollReveal().reveal('#info2', {
      origin: 'bottom', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  
  }, []);
  return (
<div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 bg-[#f9f9f7]">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div className="text-center sm:text-left">
      <h1 id="info1" className="text-3xl sm:text-4xl font-semibold mb-4">A little information for our valuable guests</h1>
      <p id="info1" className="text-sm sm:text-base font-light">
        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
      </p>
      <div id="info2" className="grid grid-cols-2 sm:grid-cols-2 mt-10 gap-3 sm:gap-6 mx-auto sm:mx-0">
        <div className="bg-white p-8 text-center border-[1px] border-[#ced2c4] rounded-md hover:shadow-md transition-all ease-in-out">
          <h1 className="font-bold text-[3em]">3</h1>
          <p className="font-light text-xs sm:text-sm">Locations</p>
        </div>
        <div id="info2" className="bg-white p-8 text-center border-[1px] border-[#ced2c4] rounded-md hover:shadow-md transition-all ease-in-out">
          <h1 className="font-bold text-[3em]">1995</h1>
          <p className="font-light text-xs sm:text-sm">Founded</p>
        </div>
        <div id="info2" className="bg-white p-8 text-center border-[1px] border-[#ced2c4] rounded-md hover:shadow-md transition-all ease-in-out">
          <h1 className="font-bold text-[3em]">65+</h1>
          <p className="font-light text-xs sm:text-sm">Staff Members</p>
        </div>
        <div id="info2" className="bg-white p-8 text-center border-[1px] border-[#ced2c4] rounded-md hover:shadow-md transition-all ease-in-out">
          <h1 className="font-bold text-[3em]">100%</h1>
          <p className="font-light text-xs sm:text-sm">Satisfied Customers</p>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <img className="w-full sm:w-auto h-auto" src={img} alt="" />
    </div>
  </div>
</div>

  );
};

export default Information;
