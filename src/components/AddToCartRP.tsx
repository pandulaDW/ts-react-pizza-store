import React from "react";
import { AddToCartProps } from "./AddToCartHOC";
import { useStateDispatch } from "./AppState";

interface Props {
  children: (props: AddToCartProps) => JSX.Element;
}

const AddToCartRP: React.FC<Props> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (pizza) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
        },
      },
    });
  };
  return children({ addToCart });
};

export default AddToCartRP;
