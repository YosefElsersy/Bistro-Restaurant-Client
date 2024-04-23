import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/home/Logo.svg";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import TopNav from "./TopNav";
import ScrollReveal from 'scrollreveal'

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user, loading } = useAuth();
  const [cart, refetch] = useCart();

  const [activeLink, setActiveLink] = useState(""); // State to track active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set active link when clicked
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li id="nav1">
        <Link
          to="/"
          onClick={() => handleLinkClick("home")} // Set active link on click
          className={activeLink === "home" ? "bg-[#DBDFD0] rounded-full " : ""}
          
        >
          Home
        </Link>
      </li>
      <li id="nav2">
        <Link
          to='/about'
          onClick={() => handleLinkClick("about")} // Set active link on click
          className={activeLink === "about" ? "bg-[#DBDFD0] rounded-full" : ""}
          
        >
          About
        </Link>
      </li>
      <li id="nav3">
        <Link
          to="/menu"
          onClick={() => handleLinkClick("menu")} // Set active link on click
          className={activeLink === "menu" ? "bg-[#DBDFD0] rounded-full" : ""}
          
       >
          Menu
        </Link>
      </li>
      <li id="nav4">
        <Link
           to='/contacts'
          onClick={() => handleLinkClick("contacts")} // Set active link on click
          className={activeLink === "contacts" ? "bg-[#DBDFD0] rounded-full" : ""}
          
        >
          Contacts
        </Link>
      </li>
    </>
  );


  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#nav1', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('#nav2', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 300,
      easing: 'ease',
    });
    ScrollReveal().reveal('#nav3', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 400,
      easing: 'ease',
    });
    ScrollReveal().reveal('#nav4', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 500,
      easing: 'ease',
    });

    ScrollReveal().reveal('#logo', {
      origin: 'left', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 300,
      easing: 'ease',
    });
    ScrollReveal().reveal('#profile', {
      origin: 'right', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 300,
      easing: 'ease',
    });
  }, []);
  return (
   <>
   
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-300 `}
      >
      <TopNav/>
      <div
        className={`navbar xl:px-24 ${
          isSticky
          ? "shadow-md bg-[#ffff] transition-all duration-300 ease-in-out z-150"
          : ""
        }`}
        >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a href="/" >
            <img id="logo" src={logo} alt=""className="w-15 h-10"/>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end ">

          {/* shopping cart */}
          <Link to="/cart-page">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle  lg:flex items-center justify-center mr-3"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length || 0}
                </span>
              </div>
            </label>
          </Link>

          {/* login button */}

          {user ? (
            <>
              <Profile user={user} />
            </>
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn flex items-center gap-2 rounded-full px-6 bg-transparent text-[#474747] border-1 border-black border-solid  hover:bg-[#474747] hover:text-white"
            >
              <FaRegUser /> Login
            </button>
          )}
          <>
          <Modal />
          </>
        </div>
      </div>
    </header>
   </>
  );
};

export default Navbar;
