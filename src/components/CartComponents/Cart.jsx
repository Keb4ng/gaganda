import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useApiContext } from "../../context/DataContext/ContextApi";
import CartProps from "./CartProps";
import { MdClose } from "react-icons/md";

const Cart = () => {
  const {
    cart,
    setCart,
    cartItems,
    items,
    checkOut,
    checkOutMsg,
    setCheckOutMsg,
  } = useApiContext();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    items.forEach((product) => {
      const cartQty = cartItems[product.id] || 0;
      total += cartQty * product.price;
    });
    setTotalAmount(total);
  }, [cartItems, items]);

  return (
    <div className="overlay bg-slate-950/20 w-full min-h-[100vh] fixed z-50 right-0 top-0 overflow-y-scroll">
      <div className="relative">
        <div className="absolute min-w-[100%] md:min-w-[420px] h-auto min-h-[100vh] bg-white right-0 px-3">
          <div className="w-full px-2 py-3 border-b-2 border-slate-300 flex flex-row items-center justify-between">
            <p className="text-[22px] font-bold text-slate-950">CART</p>
            <IoClose
              className="cursor-pointer"
              onClick={() => setCart(!cart)}
              size={25}
            />
          </div>
          <div className="flex flex-col items-center w-full h-auto gap-5">
            {items.map((product) => {
              const cartQty = cartItems[product.id] || 0;
              if (cartQty > 0) {
                return (
                  <CartProps
                    key={product.id}
                    data={product}
                    cartQty={cartQty}
                  />
                );
              }
              return null;
            })}
          </div>
          {totalAmount ? (
            <div className="border-t-2 border-gray-300 px-2 py-2 flex flex-col gap-3 mt-5">
              <div className="flex flex-row items-center justify-between">
                <p>SUBTOTAL: ${totalAmount}</p>
              </div>
              <button
                onClick={() => checkOut()}
                className="bg-primary-200 w-full rounded-lg text-white px-2 py-3 hover:bg-white hover:text-primary-200 duration-200 border-2 hover:border-primary-200">
                Check Out
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {checkOutMsg ? (
          <div
            onClick={() => {
              setCheckOutMsg(!checkOutMsg);
              setCart(false);
            }}
            className="bg-black/40 w-full h-full min-h-[100vh] absolute top-0 left-0 flex justify-center items-center z-[100]">
            <div className="w-[200px] h-[150px] px-2 py-2 flex flex-col bg-white rounded-md shadow-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-t-8 border-primary-200">
              <div className="flex justify-end">
                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    setCheckOutMsg(!checkOutMsg);
                    setCart(false);
                  }}
                  size={20}
                />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-center uppercase font-bold text-slate-800">
                  Check out Successful!
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
