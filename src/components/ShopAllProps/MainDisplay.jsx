import React from "react";
import ItemListing from "../ListingProps/ItemListing";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useApiContext } from "../../context/DataContext/ContextApi";
import { Link } from "react-router-dom";

const MainDisplay = () => {
  const { filteredItems } = useApiContext();
  return (
    <div className="max-w-[900px] h-auto">
      <div className="flex flex-row justify-between">
        <p className="text-gray-400">46 Products</p>
        <div className="flex flex-row gap-3">
          <p className="text-gray-400">SORT BY:</p>
          <button className="flex flex-row items-center">
            Relevance <MdOutlineKeyboardArrowDown />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredItems &&
          filteredItems.map((product) => {
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
    </div>
  );
};

export default MainDisplay;
