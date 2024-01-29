import React from "react";
import img from "../assets/img/hero.png"
const Home = () => {
  return (
    <div className=" h-screen flex flex-col justify-center lg:flex-row lg:justify-between lg:px-32 px-5 items-center pt-24 lg:pt-10 bg-PrimaryColor">
      <div className=" space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight text-ExtraDarkColor lg:w-3/4 w-full">Discovering and Defining Your Own Fashion!</h1>
        <p className="text-ExtraDarkColor lg:w-3/4 w-full font-medium">
          Each item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style.
        </p>
        <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">Shop Now</button>
      </div>
      <div className=" bg-DarkColor p-5 mt-10 rounded-tr-[290px] rounded-br-3xl rounded-tl-3xl " >
        <img className=" -ml-5 -mb-5" width={600} src={img} alt="heroImg" />
      </div>
    </div>
  );
};

export default Home;
