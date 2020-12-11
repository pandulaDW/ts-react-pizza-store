import React from "react";
import { Pizza } from "../types";
import { useStateDispatch } from "./AppState";
import styles from "../styles/SpecialOffer.css";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();
  const handleAddToCart = () => {
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

  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add Pizza
      </button>
    </div>
  );
};

export default SpecialOffer;
