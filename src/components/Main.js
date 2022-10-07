import React, { useContext } from "react";
import { StateContext } from "../StateProvider";
import ItemCard from "./ItemCard";

function Main() {
  const { cartItems } = useContext(StateContext);
  return (
    <main className="common">
      {cartItems.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </main>
  );
}

export default Main;
