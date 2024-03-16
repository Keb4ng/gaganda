import React from "react";

const CartProps = () => {
  return (
    <div className="w-full h-auto flex flex-row border-b-2 border-gray-300 px-2 py-3">
      <div className="w-[125px] h-auto">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 justify-center w-full h-auto">
        <p>Produce Name</p>
        <p>Price</p>
        <div className="flex flex-row">
          <div className="flex bg-white border-2 border-gray-300 rounded-md px-2 justify-between text-md min-w-[130px] mr-5">
            <button>-</button>1<button>+</button>
          </div>
          <button>X</button>
        </div>
      </div>
    </div>
  );
};

export default CartProps;
