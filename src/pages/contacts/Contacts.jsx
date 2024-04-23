import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ScrollReveal from 'scrollreveal'
const Contacts = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post("/forms/submit", data);
      console.log("Form data sent successfully:", response);
      // Show success message to the user
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Reset the form fields
      reset();
    } catch (error) {
      console.error("Error sending form data:", error);
      // Show error message to the user
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops... Something went wrong!",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

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
      delay: 500,
      easing: 'ease',
    });
    ScrollReveal().reveal('#info3', {
      origin: 'right', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24">
      <div className="py-35 flex flex-col items-center justify-center bg-[#f9f9f7]">
        <div className="text-center px-4 space-y-1 text-[#2c2f24]">
          <h2 id="info1" className="md:text-7xl text-4xl font-light md:leading-snug leading-snug">
            Contact Us
          </h2>
          <p id="info1" className="text-[#485460] text-xl md:w-3/5 mx-auto">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
      </div>
    
      <div id="info2" className="bg-white shadow-lg md:w-[36em] mx-auto md:flex md:items-center md:justify-center my-20 rounded-[2em]">
        <div className="mb-5">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    className="input input-bordered bg-[#ffffff]"
                  />
                  {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
              </div>
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered bg-[#ffffff]"
                  />
                  {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="input input-bordered bg-[#ffffff]"
              />
              {errors.subject && <span className="text-red-500">Subject is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                className="textarea textarea-bordered h-[10em] bg-[#ffffff]"
                style={{ resize: "none" }}
              ></textarea>
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#ad343e] text-white rounded-full hover:border-1 hover:border-[#474747] border-solid hover:bg-transparent hover:text-black"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    
      <div className="flex flex-row justify-center gap-12 mb-[5em] flex-wrap">
        <div id="info1" className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-[#2c2f24]">Call Us:</h1>
          <p className="text-[22px] font-bold text-[#ad343e]">+1-234-567-8900</p>
        </div>
        <div id="info2" className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-[#2c2f24]">Hours:</h1>
          <p>Mon-Fri: 11am - 8pm<br/>Sat, Sun: 9am - 10pm</p>
        </div>
        <div id="info3" className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-[#2c2f24]">Our Location:</h1>
          <p>123 Bridge Street<br/>Nowhere Land, LA 12345<br/>United States</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
