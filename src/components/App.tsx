import * as React from "react";
import AppStateProvider from "./AppState";
import pizzas from "../data/pizzas.json";
import PizzaItem from "./Pizza";
import AppCSS from "../styles/App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

  // This is how to add document event listeres in functional componenets
  React.useEffect(() => {
    const listener = () => alert("hello");
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
