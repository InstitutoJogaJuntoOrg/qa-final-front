import { useContext } from "react";
import { ContextProducts, Products } from "../context/products";

export const useFilter = (name: keyof Products, type: string) => {
  const { products } = useContext(ContextProducts);
  const filteredItems = products.filter((item: Products) => item[name] === type);
  return filteredItems;
}
