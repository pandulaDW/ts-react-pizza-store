import React from "react";
import { Pizza } from "../types";
import styles from "../styles/SpecialOffer.css";
import AddToCartRP from "./AddToCartRP";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <AddToCartRP>
        {({ addToCart }) => (
          <button type="button" onClick={() => addToCart(pizza)}>
            Add Pizza
          </button>
        )}
      </AddToCartRP>
    </div>
  );
};

export default SpecialOffer;
