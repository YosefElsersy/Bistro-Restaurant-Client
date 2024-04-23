import React, { useEffect } from "react";
import Customer1 from "../../../src/assets/home/customer 1.jpg";
import Customer2 from "../../../src/assets/home/customer 2.jpg";
import Customer3 from "../../../src/assets/home/customer 3.jpg";
import ScrollReveal from 'scrollreveal'

const CardItems = [
  {
    id: 1,
    title: "“The best restaurant”",
    despriction:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    image: Customer1,
    name: "Sophire Robson",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    title: "“Simply delicious”",
    despriction:
      "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    image: Customer2,
    name: "Matt Cannon",
    location: "San Diego, CA",
  },
  {
    id: 3,
    title: "“One of a kind restaurant”",
    despriction:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    image: Customer3,
    name: "Andy Smith",
    location: "San Francisco, CA",
  },
];
const OurCustomers = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#customers', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 300,
      easing: 'ease',
    });

    ScrollReveal().reveal('#customersData', {
      origin: 'left', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 400,
      easing: 'ease',
    });
  }, []);


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 bg-[#ffffff]">
        <div className="text-center">
          <h2 id="customers" className="title">What Our Customers Say</h2>
        </div>

        {/* category cards */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
          {CardItems.map((item, i) => (
            <div
              key={i}
              className="rounded-md bg-[#f9f9f7] py-6 px-5 w-72 mx-auto text-center hover:shadow-lg transition-all duration-300 z-10"
              
            >
              <div id="customers" className="mt-5 space-y-1 text-start">
                <h5 id="customersData" className="text-[#ad343e] font-bold mb-6">{item.title}</h5>
                <p id="customersData" className="text-[#414536] text-sm mb-6 font-light">
                  {item.despriction}
                </p>
              </div>
              <hr className="mt-5"/>
              <div id="customersData" className="w-full mx-auto flex items-center justify-center pt-4 pr-11">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-full w-14 h-auto mr-5"
                />
                <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-[#2c2f24]">{item.name}</h1>
                <p className="font-light text-[#414536] text-sm">{item.location}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurCustomers;
