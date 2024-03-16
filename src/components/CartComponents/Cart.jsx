import React from "react";
import { IoClose } from "react-icons/io5";
import { useApiContext } from "../../context/DataContext/ContextApi";
import CartProps from "./CartProps";

const Cart = () => {
  const { cart, setCart } = useApiContext();
  return (
    <div className="overlay bg-slate-950/20 w-full h-screen fixed z-50 right-0 top-0">
      <div className="relative">
        <div className="absolute min-w-[300px] md:min-w-[420px] bg-white h-screen right-0 px-3">
          <div className="w-full px-2 py-3 border-b-2 border-slate-300 flex flex-row items-center justify-between">
            <p className="text-[22px] font-bold text-slate-950">CART</p>
            <IoClose
              className="cursor-pointer"
              onClick={() => setCart(!cart)}
              size={25}
            />
          </div>
          <div className="flex flex-col items-center w-full h-auto ">
            <CartProps /> <CartProps />
          </div>
          <div className="border-t-2 border-gray-300 px-2 py-2 flex flex-col gap-3 mt-5">
            <div className="flex flex-row items-center justify-between">
              <p>SUBTOTAL</p>
              <p>$12312</p>
            </div>
            <button className="bg-primary-200 w-full rounded-lg text-white px-2 py-3">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
