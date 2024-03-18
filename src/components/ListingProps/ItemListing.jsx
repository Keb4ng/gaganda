import React from "react";

const ItemListing = ({
  itemImg,
  itemName,
  itemBrand,
  itemPrice,
  itemPriceSign,
}) => {
  return (
    <>
      <div className="bg-white shadow-md w-full h-full flex flex-col text-[16px] max-w-[250px] md:max-w-[300px] mx-auto">
        <div className="w-full min-h-[270px] rounded-t-lg">
          {itemImg ? (
            <img
              className="w-full h-[300px] object-cover rounded-t-lg"
              src={itemImg}
              alt=""
            />
          ) : (
            <img
              className="w-full h-[300px] object-cover rounded-t-lg"
              src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png"
              alt="Missing Img"
            />
          )}
        </div>
        <div className="flex flex-col px-4 py-5 gap-3">
          <p className="font-bold text-slate-950 overflow-hidden text-ellipsis whitespace-nowrap">
            {itemName}
          </p>
          <p className="text-gray-400">{itemBrand}</p>
          <p className="text-slate-950">
            <span>{itemPriceSign}</span>
            {itemPrice}
          </p>
          <button className="border-2 border-slate-950 rounded-lg hover:bg-slate-950 duration-300 hover:text-white h-[40px]">
            View Item
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemListing;
