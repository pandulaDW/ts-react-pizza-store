import React from "react";
import { Pizza } from "../types";
import PizzaCSS from "../styles/Pizza.module.css";
import useAddToCart from "./useAddToCart";

// interface Props extends AddToCartProps {
//   pizza: Pizza;
// }

interface Props {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();

  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={() => addToCart(pizza)}>
        Add Pizza
      </button>
    </li>
  );
};

export default PizzaItem;
