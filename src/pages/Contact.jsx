import React from "react";

const Contact = () => {
  return (
    <>
    <p className="contact w-full h-150 bg-cover text-4xl relative flex items-baseline-last sm:w-full">Contact Us Here</p>
    <div className=" text-black h-150 m-20 p-20 flex justify-center bg-purple-600">
      <form onSubmit={() => {}} className="flex flex-col justify-center items-center lg:w-180 bg-white  rounded-2xl sm:w-100">
        <h1 className="m-10 flex justify-center text-2xl">Contact Us</h1>
        <input 
        type="text" 
        className="border-b-2 mb-8 py-2 px-2 lg:w-150 active:border-none sm:w-80" 
        placeholder="Enter Your Name"
        required
        />
        <input
         type="text" 
         className="border-b-2 mb-8 py-2 px-2 lg:w-150 sm:w-80" 
         placeholder="Enter Your Email"
         required
         />
        <input 
        type="text" 
        className="border-b-2 mb-8 py-2 px-2 lg:w-150 sm:w-80" 
        placeholder="Enter Your Message"
        required
        />
        <button className="py-2 px-4 bg-purple-500 rounded-2xl lg:w-150 sm:w-80">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
