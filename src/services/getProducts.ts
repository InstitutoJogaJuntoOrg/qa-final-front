import axios from "axios";
import { SetStateAction, Dispatch } from "react";
import { Products } from "../context/products";

export const getProducts = async (
  setProducts: Dispatch<SetStateAction<Products[]>>
) => {
  try {
    const jwt = localStorage.getItem('jwt')
    const res = await axios.get<Products[]>("http://localhost:3300", { headers: {'Authorization': jwt}});
    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};