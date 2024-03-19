import React from "react";
import { useApiContext } from "../context/DataContext/ContextApi";
import AccountItem from "../components/CartComponents/AccountItem";

const Account = () => {
  const { cartItems, items, user } = useApiContext();
  const userName = user.firstName;
  const userEmail = user.email;
  return (
    <div className="max-w-[1200px] min-h-[90vh] mx-auto px-2 py-3 mt-[84px]">
      <div className="w-full h-auto flex flex-col md:flex-row gap-3">
        <div className="w-full h-[min-content] md:max-w-[300px] px-2 py-3 bg-white shadow-md rounded-md">
          <h1 className="text-slate-950 text-xl font-bold">User Details</h1>
          <p>Name: {userName}</p>
          <p>Email: {userEmail}</p>
        </div>
        <div className="w-full h-auto max-w-[900px] px-2 py-3 flex flex-col">
          <h1 className="text-slate-950 text-xl font-bold">Cart Items</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {items.map((product) => {
              const cartQty = cartItems[product.id] || 0;
              if (cartQty > 0) {
                return (
                  <AccountItem
                    key={product.id}
                    data={product}
                    cartQty={cartQty}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
