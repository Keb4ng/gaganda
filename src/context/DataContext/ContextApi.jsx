import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../../components/ApiConfig/MakeUpApi";

export const ApiContext = createContext();
export const ContextApiProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const { status, error, isLoading, data } = useQuery({
    queryKey: ["Make-Up Data"],
    queryFn: getData,
  });

  const brandType = Array.from(new Set(items.map((item) => item.brand)));

  const productType = Array.from(
    new Set(items.map((item) => item.product_type))
  );

  const handleProductFilter = (product) => {
    setProductFilter(product);
  };

  const handleBrandFilter = (brand) => {
    setBrandFilter(brand);
  };

  const handleFilter = () => {
    const filtered = items.filter((item) => {
      const brandTypePass = brandFilter === "" || item.brand === brandFilter;
      const productTypePass =
        productFilter === "" || item.product_type === productFilter;
      return productTypePass & brandTypePass;
    });
    setFilteredItems(filtered);
  };

  useEffect(() => {
    if (status === "success") {
      setItems(data);
      setFilteredItems(data);
      console.log(data);
    }
  }, [status, data]);

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
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
