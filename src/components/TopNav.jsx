import React, { useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import ScrollReveal from 'scrollreveal'


export default function TopNav() {

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#sm1', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    // Initialize ScrollReveal
    ScrollReveal().reveal('#sm2', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 300,
      easing: 'ease',
    });
    // Initialize ScrollReveal
    ScrollReveal().reveal('#sm3', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 400,
      easing: 'ease',
    });
    // Initialize ScrollReveal
    ScrollReveal().reveal('#sm4', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 500,
      easing: 'ease',
    });
    // Initialize ScrollReveal
    ScrollReveal().reveal('#link1', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 300,
      easing: 'ease',
    });
    // Initialize ScrollReveal
    ScrollReveal().reveal('#link2', {
      origin: 'right', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 500,
      easing: 'ease',
    });

  }, []);
  return (
    <>
      <div className="bg-[#474747] text-white py-2 px-4 sticky top-0">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <p id="link1" className="flex flex-row gap-2 text-sm">
              <IoCallOutline className="w-5 h-5" />
              (414){" "}857-0107
            </p>
            <a id="link2" href="#" className="ml-4 flex flex-row text-sm gap-2">
              <MdOutlineMailOutline className="w-5 h-5" />
              yummy@bistrobliss
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div id="sm1" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c5c5c]">
              <FaTwitter className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#AD343E]" />
            </div>
            <div id="sm2" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c5c5c]">
              <FaFacebook className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#AD343E]" />
            </div>
            <div id="sm3" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c5c5c]">
              <FaInstagram className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#AD343E]" />
            </div>
            <div id="sm4" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c5c5c]">
              <FaGithub className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#AD343E]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
