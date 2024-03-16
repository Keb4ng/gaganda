import React from "react";

const ItemListing = ({
  itemImg,
  itemName,
  itemBrand,
  itemPrice,
  itemPriceSign,
  productType,
}) => {
  return (
    <>
      <div className="bg-white shadow-md w-full h-full flex flex-col text-[16px] ">
        <div className="w-full min-h-[270px] rounded-t-lg">
          <img
            className="w-full h-[300px] object-cover rounded-t-lg"
            src={itemImg}
            alt=""
          />
        </div>
        <div className="flex flex-col px-4 py-5 gap-3">
          <p className="font-bold text-slate-950">{itemName}</p>
          <p className="text-gray-400">{itemBrand}</p>
          <p className="text-gray-400">{productType}</p>
          <p className="text-slate-950">
            <span>{itemPriceSign}</span>
            {itemPrice}
          </p>
          <button className="border-2 border-slate-950 rounded-lg hover:bg-slate-950 duration-300 hover:text-white h-[40px]">
            Add To bag
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemListing;
