import React from "react";
import { Pizza } from "../types";
import { useStateDispatch } from "./AppState";

// Added props should be ommited from the original props, otherwise they become
// required to be added when mounting

export interface AddToCartProps {
  addToCart: (pizza: Pizza) => void;
}

function withAddToCart<OrgProps extends AddToCartProps>(
  Component: React.ComponentType<OrgProps>
) {
  const AddToCartHOC = (props: Omit<OrgProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick: AddToCartProps["addToCart"] = (pizza) => {
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
      <Component {...(props as OrgProps)} addToCart={handleAddToCartClick} />
    );
  };

  return AddToCartHOC;
}

export default withAddToCart;
