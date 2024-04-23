import React, { useEffect } from "react";
import blogs from "../../../src/assets/home/Burger.jpg";
import blogs1 from "../../../src/assets/home/fired potatos.jpg";
import blogs2 from "../../../src/assets/home/fried-chicken.jpg";
import blogs3 from "../../../src/assets/home/cupCakes.jpg";
import blogs4 from "../../../src/assets/home/Pizza.jpg";
import ScrollReveal from 'scrollreveal'

const serviceLists = [
  {
    id: 1,
    title: "January 3, 2023",
    des: "How to prepare the perfect french fries in an air fryer",
    img: blogs1,
  },
  {
    id: 2,
    title: "January 3, 2023",
    des: "How to prepare delicious chicken tenders",
    img: blogs2,
  },
  {
    id: 3,
    title: "January 3, 2023",
    des: "7 delicious cheesecake recipes you can prepare",
    img: blogs3,
  },
  {
    id: 4,
    title: "January 3, 2023",
    des: "5 great pizza restaurants you should visit this city",
    img: blogs4,
  },
];


const OurServices = () => {
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
    <div className="section-container my-16">
      <h2 id="info1" className="font-semiblod text-[#2c2f24] text-[3em] mb-7">
        Our Blog & Articles
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/1">
          <div id="info2" className="text-left md:w-4/5">
            <div className="shadow-md rounded-md  text-center space-y-2 cursor-pointer hover:shadow-lg transition-all">
              <img src={blogs} alt="" className="mx-auto w-full" />
              <div className="text-start p-7">
                <p id="info1" className="text-[#737865] text-start">January 3, 2023</p>
                <h5 id="info1" className="pt-3 font-semibold text-[#2c2f24]">
                  The secret tips & tricks to prepare a perfect burger & pizza
                  for our customers
                </h5>
                <p id="info1" className="text-[#414536] text-start text-sm">
                  Lorem ipsum dolor sit amet consectetur of a adipiscing
                  elitilmim semper adipiscing massa gravida nisi cras enim quis
                  nibholm varius amet gravida ut facilisis neque egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50em]">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 items-center ">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-md text-center space-y-2 text-green cursor-pointer hover:shadow-lg transition-all"
                id="info2"
              >
                <img src={service.img} alt="" className="mx-auto" />
                <div className="text-start p-4">
                  <h5 id="info1" className="pt-3 font-slight text-sm text-[#737865]">
                    {" "}
                    {service.title}
                  </h5>
                  <p id="info1" className="text-[#2c2f24]">{service.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
