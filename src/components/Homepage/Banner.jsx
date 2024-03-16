import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full min-h-[350px] mb-10 h-auto relative bg-banner bg-bottom box-border mt-[65px] md:mt-[84px]">
      <div className="max-w-[1200px] min-h-[353px] mx-auto px-2 relative z-10 flex justify-start items-center">
        <div className="h-full w-auto flex flex-col gap-2">
          <p className="text-3xl text-slate-900 font-bold">
            DISCOVER YOUR INNER BEAUTY
          </p>
          <p className="text-3xl text-black font-bold">WITH BLOSSOM GLOW KIT</p>
          <p className="text-md text-black py-5">
            Great gift for yourselft and love ones
          </p>
          <Link to="/shop">
            <button className="bg-primary-200 w-[240px] h-[40px] rounded-md text-white mt-6">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
