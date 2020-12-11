import React from "react";
import { Pizza } from "../types";
import styles from "../styles/SpecialOffer.css";
import withAddToCart, { AddToCartProps } from "./AddToCartHOC";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={() => addToCart(pizza)}>
        Add Pizza
      </button>
    </div>
  );
};

export default withAddToCart(SpecialOffer);
