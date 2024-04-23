import React, { useEffect } from "react";
import logo from "../../src/assets/home/Logo-Light.svg";
import img1 from "../../src/assets/home/Footer image 1.jpg";
import img2 from "../../src/assets/home/Footer image 2.jpg";
import img3 from "../../src/assets/home/Footer image 3.jpg";
import img4 from "../../src/assets/home/Footer image 4.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
// import ScrollReveal from 'scrollreveal'

const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-24 py-24 px-4 text-base-content bg-[#474747] z-1">
        <aside>
          <img className="w-40 h-auto" src={logo} alt="" />
          <p className="my-3 md:w-50 text-[#adb29e]">
            In the new era of technology we look a<br />
            in the future with certainty and pride to
            <br />
            for our company and.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E]">
              <FaTwitter className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#5c5c5c]" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E]">
              <FaFacebook className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#5c5c5c]" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E]">
              <FaInstagram className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#5c5c5c]" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E]">
              <FaGithub className="h-4 w-4 cursor-pointer text-white transition duration-300 ease-in-out hover:text-[#5c5c5c]" />
            </div>
          </div>
        </aside>
        <nav  className="text-[#dbdfd0] sm:text-center">
          <header className="text-base text-[#ffffff]">Pages</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Delivery</a>
        </nav>
        <nav  className="text-[#dbdfd0]">
          <header className="text-base text-[#ffffff]">Utility Pages</header>
          <a className="link link-hover">Start Here</a>
          <a className="link link-hover">Styleguide</a>
          <a className="link link-hover">Password Protected</a>
          <a className="link link-hover">404 Not Found</a>
          <a className="link link-hover">Licenses</a>
          <a className="link link-hover">Changelog</a>
          <a className="link link-hover">View More</a>
        </nav>
        <nav  className="text-[#dbdfd0] w-25 h-auto">
          <header className="text-base w-40 text-[#ffffff]">
            Follow Us On Instagram
          </header>
          <div  className="grid grid-cols-2 gap-3 z-1">
            <img className="w-20 h-auto rounded-lg z-1" src={img1} alt="" />
            <img className="w-20 h-auto rounded-lg z-1" src={img2} alt="" />
            <img className="w-20 h-auto rounded-lg z-1" src={img3} alt="" />
            <img className="w-20 h-auto rounded-lg z-1" src={img4} alt="" />
          </div>
        </nav>
      </footer>
      <hr className="custom-hr" />
      <p  className="text-center text-[#adb29e] bg-[#474747] pt-5 pb-12">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/YosefElsersy"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Yosef Elsersy
        </a>{" "}
        . All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
