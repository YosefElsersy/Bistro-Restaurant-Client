import React, { useEffect } from "react";
import img from "../../../src/assets/about/BG.jpg";
import MultiCuisine from "../../../src/assets/about/MultiCuisine.svg";
import EasyToOrder from "../../../src/assets/about/EasyToOrder.svg";
import FastDelivery from "../../../src/assets/about/FastDelivery.svg";
import { FaPlay } from "react-icons/fa6";
import ScrollReveal from 'scrollreveal'

const CardItems = [
  {
    id: 1,
    title: "Multi Cuisine",
    despriction:
      "In the new era of technology we look in the future with certainty life.",
    image: MultiCuisine,
  },
  {
    id: 2,
    title: "Easy To Order",
    despriction:
      "In the new era of technology we look in the future with certainty life.",
    image: EasyToOrder,
  },
  {
    id: 3,
    title: "Fast Delivery",
    despriction:
      "In the new era of technology we look in the future with certainty life.",
    image: FastDelivery,
  },
];

const Authentic = () => {
  useEffect (() => {
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
    <div className="max-w-screen-2xl container mx-auto py-16 bg-[#ffffff]">
      <div className="relative">
        <img src={img} alt="" className="w-full" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-[#ffffff] p-6 cursor-pointer hover:shadow-md transition-all ease-in-out rounded-full">
          <FaPlay className="text-[#ad343e] text-center md:w-8 md:h-8 sm:w-12 sm:h-12" />
        </div>

        <h2 id="info2" className="text-[#ffffff] md:text-[3em] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 sm:text-[1em] mt-4">
          Feel the authentic &<br />
          original taste from us
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 px-14">
        {CardItems.map((item, i) => (
          <div key={i} className="bg-[#ffffff] p-4 rounded-md">
            <div id="info2" className="flex flex-row">
              <img  src={item.image} alt="" className="w-[2em] mb-4" />
              <div  className="text-start ml-6">
                <h1  className="font-bold text-[#2c2f24]">{item.title}</h1>
                <p  className="font-light text-[#414536] text-sm">
                  {item.despriction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authentic;
