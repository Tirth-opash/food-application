import Header from "./componets/Layout/Header";
import React, { useState } from "react";
import "./App.css";
import Meals from "./componets/Meals/Meals";
import Cart from "./componets/Cart/Cart";
import CardProvider from "./store/CardProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
