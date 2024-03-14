import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-9/12 mx-auto">
      {cartItems.length == 0 ? (
        <div className="text-center">
          <p className="text-2xl">You cart is empty!!!</p>
          <Link to="/" className="mt-10 inline-block text-lg bg-black text-white p-2 w-[200px] rounded">Go to home</Link>
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-6">
            <h1 className="font-bold text-2xl">Cart ({cartItems.length})</h1>
            <button className="rounded bg-black text-white p-2" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
          <ItemList items={cartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
