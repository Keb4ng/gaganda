import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../../components/ApiConfig/MakeUpApi";
import { useNavigate } from "react-router-dom";

export const ApiContext = createContext();

export const ContextApiProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [cart, setCart] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [productMsg, setProductMsg] = useState(false);
  const [checkOutMsg, setCheckOutMsg] = useState(false);
  const navigate = useNavigate();

  // cart functions

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < items.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const handleAddtoCart = (itemId) => {
    const count = cartItems[itemId] || 0;
    setCartItems((prev) => ({ ...prev, [itemId]: count + 1 }));
    setProductMsg(!productMsg);
  };

  const checkOut = () => {
    setCheckOutMsg(!checkOutMsg);
    setCartItems(getDefaultCart(0));
  };
  // query / other buttons functions

  const {
    status: dataStatus,
    error,
    isLoading,
    data,
  } = useQuery({
    queryKey: ["Make-Up Data"],
    queryFn: getData,
  });

  const productType = Array.from(
    new Set(items.map((item) => item.product_type))
  );

  const brandType = Array.from(new Set(items.map((item) => item.brand)));

  const handleProductFilter = (product) => {
    setProductFilter(product);
  };

  const handleBrandFilter = (brand) => {
    setBrandFilter(brand);
  };

  const handleFilter = () => {
    const filtered = items.filter((item) => {
      if (productFilter.length !== 0 && brandFilter.length !== 0) {
        return (
          item.product_type === productFilter && item.brand === brandFilter
        );
      }
      if (productFilter.length !== 0) {
        return item.product_type === productFilter;
      }
      if (brandFilter.length !== 0) {
        return item.brand === brandFilter;
      }
      return item;
    });
    setFilteredItems(filtered);
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const searchButton = () => {
    const filtered = items.filter((item) => {
      return item.name.includes(searchData);
    });
    setFilteredItems(filtered);
    navigate("/shop");
  };

  const sortAsc = () => {
    const sortedItems = filteredItems.sort((a, b) =>
      a.name - b.name ? 1 : -1
    );
    setFilteredItems(sortedItems);
  };

  const sortPriceAsc = () => {
    const sortedItems = filteredItems.sort((a, b) => a.price - b.price);
    setFilteredItems(sortedItems);
  };

  const sortPriceDesc = () => {
    const sortedItems = filteredItems.sort((a, b) => b.price - a.price);
    setFilteredItems(sortedItems);
  };

  useEffect(() => {
    if (dataStatus === "success") {
      setItems(data);
      setFilteredItems(data);
      console.log(data);
    }
  }, [dataStatus, data]);

  return (
    <ApiContext.Provider
      value={{
        items,
        error,
        isLoading,
        filteredItems,
        setFilteredItems,
        brandType,
        productType,
        handleBrandFilter,
        handleFilter,
        handleProductFilter,
        handleSearch,
        searchButton,
        dataStatus,
        cart,
        setCart,
        sortAsc,
        sortPriceAsc,
        sortPriceDesc,
        loggedIn,
        setLoggedIn,
        cartItems,
        addToCart,
        removeFromCart,
        handleAddtoCart,
        productMsg,
        setProductMsg,
        getDefaultCart,
        checkOut,
        checkOutMsg,
        setCheckOutMsg,
        user,
        setUser,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
