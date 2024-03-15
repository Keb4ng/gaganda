import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  const [searchModal, setSearchModal] = useState(false);
  const setSearch = () => {
    setSearchModal(!searchModal);
  };
  return (
    <div className="fixed top-0 w-full z-50 shadow-md bg-white">
      <div className="max-w-[1200px] px-2 py-5 mx-auto h-auto hidden md:flex flex-row justify-between items-center">
        <Link to="/">
          <p className=" text-primary-200  text-2xl">Gaganda</p>
        </Link>
        <ul className="flex gap-5">
          <Link to="/shop">
            <li>SHOP ALL</li>
          </Link>
          <li>BEST SELLERS</li>
          <li>COLLECTION</li>
          <Link to="/about">
            <li>ABOUT US</li>
          </Link>
        </ul>
        <ul className="flex justify-around gap-5">
          <li
            onClick={() => setSearch()}
            className="flex flex-col items-center cursor-pointer">
            <HiMagnifyingGlass size={20} />
            <span className="text-[14px]">SEARCH</span>
          </li>
          <li className="flex flex-col items-center">
            <IoPersonOutline size={20} />
            <span className="text-[14px]">ACCOUNT</span>
          </li>
          <li className="flex flex-col items-center">
            <SlBag size={20} />
            <span className="text-[14px]">CART</span>
          </li>
        </ul>
      </div>
      {searchModal ? (
        <div className="fixed top-[82px] left-[50%] translate-x-[-50%] bg-white max-w-[1200px] w-full rounded-b-md h-auto drop-shadow-md">
          <div className="flex flex-row w-full items-center h-auto px-2 py-3 ">
            <input
              className="outline-none w-full h-auto text-slate-950"
              type="text"
              placeholder="Enter Search..."
            />
            <HiMiniMagnifyingGlass size={25} />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-full h-auto flex md:hidden shadow-md justify-between items-center px-5 py-2">
        <button className="flex flex-col items-center">
          <IoMenuSharp size={25} />
          <span>Menu</span>
        </button>
        <Link to="/">
          <p className=" text-primary-200 text-2xl">Gaganda</p>
        </Link>
        <button className="flex flex-col items-center">
          <SlBag size={25} />
          <span>Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
