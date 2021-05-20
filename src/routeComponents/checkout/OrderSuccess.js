import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import { AuthContext } from "../../contexts/authContext";

import './OrderSuccess.css'
import api from "../../apis/index";
import background from '../../components/images/backgroundanis/background-signup-01.png'

function OrderSuccess() {
  const { cart, setCart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

  console.log(cart);

  useEffect(() => {
    async function createTransaction() {
      try {
        if (cart.length) {
          const response = await api.post("/transaction", {
            buyerId: loggedInUser.user._id,
            products: [...cart],
          });

          console.log(response);

          setCart([]);
          localStorage.removeItem("cart");
        } else {
          throw new Error("Empty cart!");
        }
      } catch (err) {
        console.error(err);
      }
    }
    createTransaction();
  }, [cart, setCart, loggedInUser]);

  return (
    <div className="order-sucess">
    <img src={background} alt="background" class="bg" />
      <i
        style={{ fontSize: "500%" }}
        className="bi bi-check-circle-fill text-success container-fluid"
      ></i>

      <h1 className="my-4">Order Confirmed!</h1>

      <p className="my-1">You will receive a confirmation soon.</p>

      <small >Thanks for buying from us!</small>

      <br />

      <Link to="/profile">See your profile account</Link>
    </div>
  );
}

export default OrderSuccess;
