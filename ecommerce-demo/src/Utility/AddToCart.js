import { useContext } from "react";
import { DataContext } from "../assets/Components/DataProvider/DataProvider";
import { Type } from "./action.type";

export function AddToCart() {
  const [, dispatch] = useContext(DataContext);

  const addCartItem = (product) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { product },
    });
  };

  return { addCartItem };
}
