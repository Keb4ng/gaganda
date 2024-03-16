import React from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../context/DataContext/ContextApi";
import { TiHeartFullOutline } from "react-icons/ti";

const Product = () => {
  let { id } = useParams();
  const { items } = useApiContext();
  const product = items.find((product) => String(product.id) === id);

  return (
    <div className="max-w-[1200px] mx-auto mt-[94px]">
      <div className="w-full mx-auto min-h-[80vh] h-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-2 my-5">
        <div className="w-full h-auto flex justify-center items-center">
          <img
            className="w-full h-full object-contain max-h-[600px]"
            src={product.api_featured_image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <p className="text-[22px] font-bold text-slate-950">
              {product.name}
            </p>
            <p className="text-[16px] text-gray-500">{product.product_type}</p>
            <p className="text-[16px] text-slate-950 font-bold">
              {product.price_sign}
              {product.price}
            </p>
            <p className="text-[14px] text-gray-500 my-5">
              {product.description}
            </p>
          </div>
          <div className="flex justify-center md:justify-normal w-auto gap-5">
            <button className="bg-primary-200 text-[14px] w-[290px] rounded-md text-white px-2 py-3">
              Add To Cart
            </button>
            <button className="text-gray-500">
              <TiHeartFullOutline size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="test grid grid-cols-4 gap-2">
        <div className="bg-red-400 w-[300px] h-[200px]"></div>
        <div className="bg-green-400 w-[300px] h-[200px]"></div>
        <div className="bg-red-400 w-[300px] h-[200px]"></div>
        <div className="bg-green-400 w-[300px] h-[200px]"></div>
        <div className="bg-red-400 w-[300px] h-[200px]"></div>
      </div>
    </div>
  );
};

export default Product;
