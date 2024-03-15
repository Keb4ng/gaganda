import React from "react";
import ItemListing from "../ListingProps/ItemListing";

const Featured = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-5 h-auto flex flex-col">
      <h1 className="text-center text-[24px] my-5">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <ItemListing />
        <ItemListing />
        <ItemListing />
        <ItemListing />
      </div>
    </div>
  );
};

export default Featured;
