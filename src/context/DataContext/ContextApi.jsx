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
  const navigate = useNavigate();
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
    console.log(searchData);
  };

  const searchButton = () => {
    const filtered = items.filter((item) => {
      return item.name.includes(searchData);
    });
    setFilteredItems(filtered);
    navigate("/shop");
  };

  useEffect(() => {
    if (dataStatus === "success") {
      setItems(data);
      setFilteredItems(data);
      console.log(data);
    }
  }, [dataStatus, data]);

  if (error) {
    <p>Error Loading data</p>;
  }
  if (isLoading) {
    <p>Loading data...</p>;
  }

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
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
