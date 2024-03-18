import React from "react";
import Sidebar from "../components/ShopAllProps/Sidebar";
import MainDisplay from "../components/ShopAllProps/MainDisplay";

const ShopAll = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] gap-5 mx-auto px-2 py-2 min-h-[100vh] mt-[104px]">
      <Sidebar />
      <MainDisplay />
    </div>
  );
};

export default ShopAll;
