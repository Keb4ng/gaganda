import React, { useState } from "react";
import ItemListing from "../ListingProps/ItemListing";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useApiContext } from "../../context/DataContext/ContextApi";
import { Link } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";

const MainDisplay = () => {
  const { filteredItems, sortAsc, sortDesc, isLoading } = useApiContext();
  const [sortOptions, setSortOptions] = useState(false);
  return (
    <div className="max-w-[900px] w-full h-auto">
      <div className="flex flex-row justify-between">
        <p className="text-gray-400">46 Products</p>
        <div className="flex flex-row gap-3 relative">
          <p className="text-gray-400">SORT BY:</p>
          <button
            onClick={() => setSortOptions(!sortOptions)}
            className="flex flex-row items-center">
            A-Z <MdOutlineKeyboardArrowDown />
          </button>
          {sortOptions ? (
            <ul className="absolute w-[150px] h-auto top-5 bg-white px-2 py-2 rounded-md shadow-md">
              <li className="cursor-pointer" onClick={sortAsc}>
                A-Z
              </li>
              <li className="cursor-pointer" onClick={sortDesc}>
                Z-A
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <LuLoader2 className="animate-spin" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredItems.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ItemListing
                  itemImg={product.api_featured_image}
                  itemName={product.name}
                  itemBrand={product.brand}
                  productType={product.product_type}
                  itemPrice={product.price}
                  itemPriceSign={product.price_sign}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
