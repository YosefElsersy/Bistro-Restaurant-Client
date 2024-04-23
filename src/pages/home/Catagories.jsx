import React, { useEffect } from "react";
import drinks from "../../../src/assets/home/Drinks icon.svg";
import breakfast from "../../../src/assets/home/breakfast icon.svg";
import mainDishes from "../../../src/assets/home/Main Dishes.svg";
import desserts from "../../../src/assets/home/Desserts icon.svg";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal'

const categoryItems = [
  {
    id: 1,
    title: "Break Fast",
    despriction:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: breakfast,
  },
  {
    id: 2,
    title: "Main Dish",
    despriction:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: mainDishes,
  },
  {
    id: 3,
    title: "Drinks",
    despriction:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: drinks,
  },
  {
    id: 4,
    title: "Dessert",
    despriction:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: desserts,
  },
];

const Catagories = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#browseMenu', {
      origin: 'bottom', 
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#categoryCards', {
      origin: 'bottom', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('#categoryLink', {
      origin: 'top', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 bg-white">
      <div className="text-center">
        <h2 id="browseMenu" className="title">Browse Our Menu</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className=" border-2 border-[#dbdfd0] rounded-md bg-[#ffffff] py-6 px-5 w-72 mx-auto text-center hover:shadow-lg transition-all duration-300 z-10"
            id="categoryCards"
          >
            <div className="w-full mx-auto flex items-center justify-center">
              <img
                src={item.image}
                alt=""
                id="categoryCards"
                className="bg-[#f3f3f0] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5 id="categoryCards" className="text-[#1E1E1E] font-semibold ">{item.title}</h5>
              <p id="categoryCards" className="text-secondary text-sm mb-3 font-light ">{item.despriction}</p>
              <br />
              <br />
              <Link id="categoryLink" to="/menu" className="text-[#b74d56] font-semibold cursor-pointer">
                Expolore Menu
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
