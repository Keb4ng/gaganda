import React from "react";

const AccountItem = (props) => {
  const { name, api_featured_image, brand, price, price_sign } = props.data;
  const { cartQty } = props;
  const totalAmmount = cartQty * price;
  return (
    <div className="shadow-md rounded-md flex flex-col gap-3 mx-auto max-w-[300px] w-full">
      <div className="w-full h-full max-h-[250px]">
        <img
          className="w-full h-full  object-cover"
          src={api_featured_image}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-3 justify-between py-2 px-2">
        <div>
          <p className="text-lg text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </p>
          <p className="text-md text-gray-400">{brand}</p>
        </div>
        <div>
          <p>
            Unit Price: {price_sign}
            {price}
          </p>
          <p>
            Total Price: {price_sign}
            {totalAmmount}
          </p>
          <p>Qty: {cartQty}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
