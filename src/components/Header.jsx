import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useApiContext } from "../context/DataContext/ContextApi";
import Cart from "./CartComponents/Cart";
import { IoMdClose } from "react-icons/io";
import { PiMinusBold } from "react-icons/pi";

const Header = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { handleSearch, searchButton, dataStatus, cart, setCart, loggedIn } =
    useApiContext();

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
            <li className="hover:text-primary-200 duration-300">SHOP ALL</li>
          </Link>
          <Link to="/collections">
            <li className="hover:text-primary-200 duration-300">COLLECTION</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-primary-200 duration-300">ABOUT US</li>
          </Link>
          {loggedIn ? (
            <li className="hover:text-primary-200 duration-300 cursor-pointer">
              LOG OUT
            </li>
          ) : (
            <Link to="/login-signup">
              <li className="hover:text-primary-200 duration-300">
                LOGIN-SIGNUP
              </li>
            </Link>
          )}
        </ul>
        <ul className="flex justify-around gap-5">
          {dataStatus === "success" ? (
            <li
              onClick={() => setSearch()}
              className="flex flex-col items-center cursor-pointer hover:text-primary-200 duration-300">
              <HiMagnifyingGlass size={20} />
              <span className="text-[14px]">SEARCH</span>
            </li>
          ) : (
            <li className="flex flex-col items-center cursor-wait hover:text-primary-200 duration-300">
              <HiMagnifyingGlass size={20} />
              <span className="text-[14px]">SEARCH</span>
            </li>
          )}
          {loggedIn ? (
            <>
              <Link to="/account">
                <li className="flex flex-col items-center hover:text-primary-200 duration-300">
                  <IoPersonOutline size={20} />
                  <span className="text-[14px]">ACCOUNT</span>
                </li>
              </Link>
              <li
                onClick={() => setCart(!cart)}
                className="flex flex-col items-center cursor-pointer hover:text-primary-200 duration-300">
                <SlBag size={20} />
                <span className="text-[14px]">CART</span>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
      {searchModal ? (
        <div className="fixed top-[67px] md:top-[82px] left-[50%] translate-x-[-50%] bg-white max-w-[1200px] w-full rounded-b-md h-auto drop-shadow-md">
          <div className="flex flex-row w-full items-center h-auto px-2 py-3 ">
            <input
              onChange={handleSearch}
              className="outline-none w-full h-auto text-slate-950 hover:text-primary-200 duration-300"
              type="text"
              placeholder="Enter Search..."
            />
            <div className="flex flex-row gap-2">
              <HiMiniMagnifyingGlass
                className="cursor-pointer hover:text-primary-200 duration-300"
                size={25}
                onClick={searchButton}
              />
              <IoMdClose
                className="cursor-pointer hover:text-primary-200 duration-300"
                onClick={() => setSearch()}
                size={25}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-full h-auto flex md:hidden shadow-md justify-between items-center px-5 py-2">
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex flex-col items-center">
          <IoMenuSharp size={25} />
          <span>Menu</span>
        </button>
        <Link to="/">
          <p className=" text-primary-200 text-2xl">Gaganda</p>
        </Link>
        <button
          onClick={() => setCart(!cart)}
          className="flex flex-col items-center">
          <SlBag size={25} />
          <span>Cart</span>
        </button>
      </div>
      {mobileMenu ? (
        <div className="w-full h-screen bg-white fixed top-0 left-0 z-[60] duration-300 translate-y-0">
          <div className="bg-primary-200 w-full h-auto px-2 py-3 text-white flex items-center justify-between">
            <p className="text-lg">MENU</p>
            <IoMdClose onClick={() => setMobileMenu(!mobileMenu)} size={25} />
          </div>
          <ul className="text-slate-950 gap-5 px-2 py-3">
            <li onClick={() => setMobileMenu(!mobileMenu)} className="flex ">
              <span
                className="flex items-center gap-3 py-3"
                onClick={() => setSearch()}>
                <HiMiniMagnifyingGlass className="cursor-pointer" size={25} />
                <span>SEARCH</span>
              </span>
            </li>
            <Link to="/account">
              <li
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex items-center gap-3 py-3">
                <IoPersonOutline size={23} />
                <span>ACCOUNT</span>
              </li>
            </Link>
            <Link to="/shop">
              <li
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex items-center gap-3 py-3">
                <PiMinusBold size={25} />
                SHOP ALL
              </li>
            </Link>
            <Link to="/collections">
              <li
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex items-center gap-3 py-3">
                <PiMinusBold size={25} />
                COLLECTION
              </li>
            </Link>
            <Link to="/login-signup">
              <li
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex items-center gap-3 py-3">
                <PiMinusBold size={25} />
                LOGIN-SIGNUP
              </li>
            </Link>
            <Link to="/about">
              <li
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex items-center gap-3 py-3">
                <PiMinusBold size={25} />
                ABOUT US
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="w-full h-screen bg-white fixed top-0 left-0 z-[60]  duration-300 translate-y-[-100%]">
          <div className="bg-primary-200 w-full h-auto px-2 py-3 text-white flex items-center justify-between">
            <p className="text-lg">MENU</p>
            <IoMdClose onClick={() => setMobileMenu(!mobileMenu)} size={25} />
          </div>
        </div>
      )}
      {cart ? <Cart /> : ""}
    </div>
  );
};

export default Header;
