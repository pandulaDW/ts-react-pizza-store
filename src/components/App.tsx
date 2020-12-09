import * as React from "react";
import AppStateProvider from "./AppState";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "../styles/App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";

const App = () => {
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
