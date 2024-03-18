import React from "react";
import { useApiContext } from "../../context/DataContext/ContextApi";

const CartProps = (props) => {
  const { name, brand, api_featured_image, price, id } = props.data;
  const { addToCart, removeFromCart } = useApiContext();
  const { cartQty } = props;
  const totalItemAmount = cartQty * price;
  return (
    <div className="w-[300px] md:w-full  h-auto flex flex-row border-b-2 box-border border-gray-300 px-2 py-3 justify-between gap-2">
      <div className="w-[200px] h-auto">
        {api_featured_image ? (
          <img
            className="w-full h-full object-cover"
            src={api_featured_image}
            alt={name}
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col gap-2 justify-center w-full h-auto items-center">
        <div>
          <p className="text-slate-950 text-md">{name}</p>
          <p className="text-gray-300 text-md">{brand}</p>
          <p>Unit Price: ${price}</p>
          <p>Total: ${totalItemAmount}</p>
          <div className="flex flex-row">
            <div className="flex bg-white border-2 border-gray-300 rounded-md px-2 justify-between text-md min-w-[130px] mr-5">
              <button onClick={() => removeFromCart(id)}>-</button>
              {cartQty}
              <button onClick={() => addToCart(id)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProps;
