import React, { useEffect } from "react";
import image from "../../../src/assets/home/third section image.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal'


const Testimonials = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#healthyFood', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#healthyFoodBtn', {
      origin: 'bottom', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

  }, []);
  return (
    <div className="section-container py-10 relative">
        {/* "Come and visit us" section */}
      <div className="absolute md:left-[26em] top-[24rem]  hidden sm:block ">
        <div className="bg-[#474747] p-8 rounded-md text-white">
          <h3 className="font-bold text-start mb-10">Come and visit us</h3>
          <div className="flex flex-col justify-start items-start gap-4 h-40">
            <p id="healthyFood" className="font-light flex items-start justify-start">
              <IoCallOutline className="mr-2" />
              (414) 857 - 0107
            </p>
            <p id="healthyFood" className="font-light flex items-center justify-center">
              <HiOutlineMail className="mr-2" />
              happytummy@restaurant.com
            </p>
            <p id="healthyFood" className="font-light flex items-center justify-center">
              <TiLocationOutline className="mr-2" />
              837 W. Marshall Lane Marshalltown,
              <br /> IA 50158, Los Angeles
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-3/2">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="md:w-1/3">
          <div className="text-left md:w-4/3 mt-8">
            <h2 id="healthyFood" className="font-bold text-[2.7em]">We provide healthy<br/>food for your family.</h2>
            <blockquote id="healthyFood" className="my-5 text-secondary leading-[30px]">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city`s rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </blockquote>
            <blockquote id="healthyFood" className="my-5 text-secondary leading-[30px]">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
            </blockquote>
            <Link to='/about'><button id="healthyFoodBtn" className="btn text-[#182226] border-2 border-[#2c2f24] bg-transparent hover:bg-[#474747] hover:text-white"> More About Us</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
