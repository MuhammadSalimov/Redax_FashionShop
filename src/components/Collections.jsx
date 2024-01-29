import React from "react";
import Img from "../assets/img/collection.png";
const Collections = () => {
  return (
    <div className="
     h-screen lg:h-[70vh] flex flex-col justify-center
      lg:flex-row bg-PrimaryColor items-center mt-14 px-5 lg:px-32
     ">
      <div className=" flex justify-center w-full lg:w-2/4 pt-6" >
        <img src={Img} alt="Collections" />
      </div>
      <div className=" w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className=" text-4xl font-semibold text-ExtraDarkColor">Best Summer Collection</h1>
        <h3 className=" text-lg font-medium text-DarkColor">Sale Get Up To 60% off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          assumenda sapiente a iste hic explicabo laboriosam praesentium. Harum,
          aperiam voluptatem!
        </p>
        <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
            Shop Now
        </button>
      </div>
    </div>
  );
};

export default Collections;
