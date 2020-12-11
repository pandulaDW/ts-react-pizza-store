import { AddToCartProps } from "./AddToCartHOC";
import { useStateDispatch } from "./AppState";

const useAddToCart = () => {
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

  return addToCart;
};

export default useAddToCart;
