import React from "react";
import ProductCard from "../layouts/ProductCard";
import Img15 from "../assets/img/product15.jpg"
import Img13 from "../assets/img/product13.jpg"
import Img14 from "../assets/img/product14.jpg"
const Products = () => {
  const data = [
    {
      id: 12,
      img: Img13,
      name: "Canvas Sneakers",
      price: "298.00",
      discount: "28% Off",
    },
    {
      id: 13,
      img: Img14,
      name: "shirt combo pack ",
      price: "199.00",
      discount: "40% Off",
    },
    {
      id: 14,
      img: Img15,
      name: "Hublot watch",
      price: "198.00",
      discount: "26% Off",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
        ))}
      </div>
    </div>
  );
};

export default Products;
