import * as React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";
import CartCSS from "../styles/Cart.module.css";

interface Props {}
interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  private containerRef: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.containerRef = React.createRef();
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleOutsideClick = (el: MouseEvent) => {
    if (
      this.containerRef.current &&
      !this.containerRef.current.contains(el.target as Node)
    )
      this.setState({ isOpen: false });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  // cleaning up
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
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
            <div className={CartCSS.cartContainer} ref={this.containerRef}>
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
