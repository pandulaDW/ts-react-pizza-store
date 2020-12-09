import * as React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";
import CartCSS from "../styles/Cart.module.css";

interface Props {}
interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce(
            (acc, curr) => acc + curr.quantity,
            0
          );
          return (
            <div className={CartCSS.cartContainer}>
              <button
                className={CartCSS.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{
                  display: this.state.isOpen ? "block" : "none",
                }}
              >
                <ul>
                  {state.cart.items.map((pizza) => (
                    <li key={pizza.id}>
                      {pizza.name} &times; {pizza.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
