import React from "react";
import ItemListing from "../ListingProps/ItemListing";
import { useApiContext } from "../../context/DataContext/ContextApi";
import { Link } from "react-router-dom";

const Featured = () => {
  const { items } = useApiContext();

  return (
    <div className="max-w-[1200px] mx-auto my-5 h-auto flex flex-col">
      <h1 className="text-center text-[24px] my-5">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items
          .filter((product) => {
            if (product.brand === "marienatie") {
              return product;
            }
          })
          .slice(0, 4)
          .map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ItemListing
                  itemImg={product.api_featured_image}
                  itemName={product.name}
                  itemBrand={product.brand}
                  itemPrice={product.price}
                  itemPriceSign={product.price_sign}
                  productType={product.product_type}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Featured;
