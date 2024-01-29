import React from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispach } from "../redux/hooks";
import { AddToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ id, img, name, price, discount }) => {
  const dispatch = useAppDispach();

  const AddProduct = () => {
    const payload = {
      id,
      img,
      name,
      price: parseInt(price),
      quantity: 1,
    };

    dispatch(AddToCart(payload));
    toast.success("Added to cart seccess");
  };

  return (
    <div className=" h-[370px] 2xl:h-[420px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-black rounded-xl mb-2 cursor-pointer ">
      <div>
        <img
          className=" h-56 2xl:h-64 rounded-t-xl w-full"
          src={img}
          alt={name}
        />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" font-semibold text-xl pt-4">{name}</h1>
        <div className=" flex gap-10 pt-2">
          <h2 className=" font-medium text-lg ">${price}</h2>
          <h2 className=" font-medium text-DarkColor">{discount}</h2>
        </div>

        <div className=" flex gap-8 pt-4">
          <button onClick={AddProduct} className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
            Add to Cart
          </button>
          <div className=" flex gap-1 items-center">
            <h2>5.0</h2>
            <FaStar className=" text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
