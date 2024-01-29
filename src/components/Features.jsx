import React from "react";
import ProductCard from "../layouts/ProductCard";
import Img7 from "../assets/img/product7.jpg"
import Img8 from "../assets/img/product8.jpg"
import Img9 from "../assets/img/product9.jpg"
import Img10 from "../assets/img/product10.jpg"
import Img11 from "../assets/img/product11.jpg"
import Img12 from "../assets/img/product12.jpg"
const Features = () => {
  const data = [
    {
      id: 6,
      img: Img7,
      name: "FrostFire Outerlayers",
      price: "398.00",
      discount: "24% Off",
    },
    {
      id: 7,
      img: Img8,
      name: "DaintyDoll Dresses",
      price: "258.00",
      discount: "40% Off",
    },
    {
      id: 8,
      img: Img9,
      name: "TrendTraverse Bag",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 9,
      img: Img10,
      name: "Fitness Footgear",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 10,
      img: Img11,
      name: "UrbanBelle Hoodies",
      price: "129.00",
      discount: "28% Off",
    },
    {
      id: 11,
      img: Img12,
      name: "Elite Handbags",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col pt-24 justify-center">
      <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div key={item.id} className=" md:w2/4 lg:w1/4">
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
