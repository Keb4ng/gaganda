import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogItem = ({ title, desc, img }) => {
  return (
    <div className="w-full h-auto items center flex flex-col-reverse md:flex-row gap-2">
      <div className="flex flex-col w-full md:w-[50%] justify-center">
        <p className="text-[20px] font-bold md:text-[36px] text-slate-950">
          {title}
        </p>
        <p className="text-[16px] text-gray-500 my-[20px]">{desc}</p>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="bg-primary-200 min-w-[290px] w-auto rounded-lg text-white px-2 py-3">
            Shop Now
          </button>
          <button className="flex flex-row items-center gap-1">
            Explore More <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="w-full h-auto md:w-[50%]">
        <img className="w-full h-auto object-cover" src={img} alt="" />
      </div>
    </div>
  );
};

export default BlogItem;
