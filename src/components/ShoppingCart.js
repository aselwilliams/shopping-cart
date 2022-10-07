import Aside from "./Aside";
import Main from "./Main";

function ShoppingCart() {
  return (
    <div>
      <h1>My Shopping Cart</h1>
      <div className="wrapper">
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default ShoppingCart;
