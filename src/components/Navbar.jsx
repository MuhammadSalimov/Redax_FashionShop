import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useAppSelector } from "../redux/hooks";

const Navbar = ({SetShowCart}) => {
  const [menu, setMenu] = useState(false);

  const ChangeMenu = () => {
    setMenu(!menu);
  };

  const CloseMenu = ()=>{
    setMenu(false)
  }

    const cartCount =useAppSelector((state) => state.CartReducer.length) 

  return (
    <header className=" fixed z-10 w-full">
      <section>
        <div className=" flex flex-row p-5 md:px-32 px-5 justify-between bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div>
            <Link spy={true} smooth={true} to="/">
              <h1 className=" text-2xl text-DarkColor font-semibold cursor-pointer">
                StyleN
              </h1>
            </Link>
          </div>
          <nav className=" hidden lg:flex flex-row items-center font-semibold text-ExtraDarkColor gap-8 uppercase">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Shop
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Review
            </Link>
          </nav>
          {/* Menu Cart */}
          <div className=" flex gap-4 items-center">
            <FaUser size={25} className="text-ExtraDarkColor" />
            <div className=" text-DarkColor relative cursor-pointer">
              <FaShoppingCart onClick={()=> SetShowCart(true)} size={25} />
              <div className=" absolute top-[-15px] right-[-10px] w-[22px] h-[20px] bg-red-600 rounded-full text-white flex items-center justify-center ">
                {cartCount}
              </div>
            </div>
          </div>
          {/* Menu icons */}
          <div className=" cursor-pointer flex justify-center items-center lg:hidden">
            {menu ? (
              <AiOutlineClose size={28} onClick={ChangeMenu} />
            ) : (
              <RiMenu2Line size={28} onClick={ChangeMenu} />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            menu ? " translate-x-0" : "-translate-x-full"
          } flex lg:hidden flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center transition-transform pt-8 pb-4 gap-8 w-full h-fit duration-300`}
        >
          <Link
            onClick={CloseMenu}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            onClick={CloseMenu}
            to="shop"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
          >
            Shop
          </Link>
          <Link
            onClick={CloseMenu}
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
          >
            Features
          </Link>
          <Link
            onClick={CloseMenu}
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
          >
            Products
          </Link>
          <Link
            onClick={CloseMenu}
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
          >
            Review
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
