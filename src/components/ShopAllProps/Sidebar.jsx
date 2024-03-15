import React from "react";
import { useApiContext } from "../../context/DataContext/ContextApi";

const Sidebar = () => {
  const {
    brandType,
    productType,
    handleBrandFilter,
    handleFilter,
    handleProductFilter,
  } = useApiContext();

  return (
    <div className="w-[300px] hidden lg:flex flex-col gap-3 bg-white h-[max-content] p-3 shadow-md rounded-lg">
      <h1 className="font-bold text-xl">FILTERS</h1>
      <select
        onChange={(e) => handleProductFilter(e.target.value)}
        className="py-3 border-b-2 border-gray-200">
        <option value="">Product Type</option>
        {productType.map((product, index) => {
          return (
            <option key={index} value={product}>
              {product}
            </option>
          );
        })}
      </select>
      <select
        onChange={(e) => handleBrandFilter(e.target.value)}
        className="py-3 border-b-2 border-gray-200">
        <option value="">Brand</option>
        {brandType.map((brand, index) => {
          return (
            <option key={index} value={brand}>
              {brand}
            </option>
          );
        })}
      </select>
      <button
        onClick={handleFilter}
        className="text-slate-950 border-2 border-slate-950 w-full py-3">
        Apply
      </button>
    </div>
  );
};

export default Sidebar;
