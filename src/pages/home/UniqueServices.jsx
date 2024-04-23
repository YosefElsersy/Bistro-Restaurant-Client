import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Caterings from '../../../src/assets/home/kebab-set-table 1.jpg'
import Birthdays from '../../../src/assets/home/Birthday.jpg'
import Weddings from '../../../src/assets/home/Weddings.jpg'
import Events from '../../../src/assets/home/Events.jpg'
import ScrollReveal from 'scrollreveal'

const categoryItems = [
    {
      id: 1,
      title: "Caterings",
      despriction:
        "In the new era of technology we look in the future with certainty for life.",
      image: Caterings,
    },
    {
      id: 2,
      title: "Birthdays",
      despriction:
        "In the new era of technology we look in the future with certainty for life.",
      image: Birthdays,
    },
    {
      id: 3,
      title: "Weddings",
      despriction:
        "In the new era of technology we look in the future with certainty for life.",
      image: Weddings,
    },
    {
      id: 4,
      title: "Events",
      despriction:
        "In the new era of technology we look in the future with certainty for life.",
      image: Events,
    },
  ];

const UniqueServices = () => {

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#part-1', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#part-2', {
      origin: 'top', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

  }, []);
    
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 bg-[#f9f9f7]">
      <div className="text-start">
        <h2 id='part-1' className="text-5xl">We also offer unique<br/>services for your events</h2>
      </div>
      {/* cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className=" rounded-lg py-6 px-5 w-72 mx-auto text-center hover:shadow-lg transition-all duration-300 z-10"
          id='part-2'
         >
            <div className="w-full mx-auto flex items-center justify-center">
              <img
                src={item.image}
                alt="item-image"
                className="p-30 w-35 h-auto"
              />
            </div>
            <div className="mt-5 space-y-1 text-start mb-5 cursor-pointer">
              <h5 id='part-1' className="text-[#1E1E1E] font-semibold ">{item.title}</h5>
              <p id='part-1' className="text-secondary text-sm mb-3 font-light ">{item.despriction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UniqueServices
