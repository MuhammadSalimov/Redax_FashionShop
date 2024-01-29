import React from "react";
import { useAppDispach } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { RemoveFromCart } from "../redux/features/cartSlice";

const CartProduct = ({ id, img, title, price, quantity }) => {
  const dispatch = useAppDispach();
  return (
    <div className=" flex justify-between items-center">
      <div className=" flex items-center gap-4">
        <img src={img} alt={title} className=" h-[80px]" />
        <div className=" space-y-2">
          <h3 className=" font-medium">{title}</h3>
          <p className=" text-gray-600 text-[14px]" >qty:{quantity}</p>
          <p className=" text-gray-600 text-[14px]" >price:${price}</p>
        </div>
      </div>
      <RxCross1
        className=" cursor-pointer"
        onClick={() => dispatch(RemoveFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
