import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Healthy
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Welcome to Shree Harkrishan Milk Products, where we're committed to delivering quality dairy products straight from the farm to your table. Our products are made using the freshest milk from local farmers and processed under strict hygiene standards to ensure their purity and taste. From creamy butter to artisanal cheese, we offer a range of dairy products that will cater to your taste buds. Explore our products now and experience the goodness of nature in every bite.
        </p>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
export default Products;
