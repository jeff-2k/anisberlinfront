import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "../../contexts/cartContext";
import { AuthContext } from "../../contexts/authContext";
import "./Checkout.css"

import background from '../../components/images/backgroundanis/background-signup-01.png'


import api from "../../apis/index.js";

const stripePromise = loadStripe(
  "pk_test_51IstEYLZPuQrlsd14oIqnHqtHriq6gtgD3fxTXCDeSGx3C7e2auwW70YtIzfz2KhBLdyLsUNjGsfp1APj5pLssOO00aqN7I1xn"
);

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const tempState = [];

      for (let productInCart of cart) {
        const response = await api.get(`/products/${productInCart.productId}`);

        const { _id, image_url, price, name } = response.data;

        tempState.push({ _id, image_url, price, name, qtt: productInCart.qtt });
      }

      setState([...tempState]);
    }
    fetchProducts();
  }, [cart]);

  console.log(cart);

  async function handleSubmit() {
    try {
      const stripe = await stripePromise;

      const data = {
        buyerId: loggedInUser.user._id,
        products: state.map((product) => {
          return { productId: product._id, qtt: product.qtt };
        }),
      };

      const response = await api.post("/create-checkout-session", data);

      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirecionar o comprador pra página de pagamento do Stripe
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-5 Order">
      <img src={background} alt="background" class="bg" />
      <h1 className="mb-2 checkoutFont">Order Summary</h1>
      <div className="list-group">
        {state.map((product) => {
          return (
            <div>
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="list-group-item list-group-item-action"
            >
              <div className="order d-flex w-100 justify-content-between row">
                <div className="col-4">
                  <img
                    className="mw-100"
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>

                <div className="info col-8">
                  <h5 className="price mb-1">{product.name}</h5>
                  <h3>
                    {product.price.toLocaleString(
                      window.navigator.languages[0],
                      { style: "currency", currency: "EUR" }
                    )}
                  </h3>
                  <small>Quantity: {product.qtt}</small>
                </div>
                <button className="del btn btn-danger mx-auto mt-2" onClick={() => {
              const index = cart.findIndex( (toDelete) => toDelete.productId === product._id)
              const cartClone = [... cart]
              if (index > -1){
                cartClone.splice(index, 1)
              setCart( [... cartClone] )
              }
           }}>Delete</button>
             </div>
            </Link>
          </div>
          );
        })}
        <button className="buttonGreenOrder btn-lg my-5" onClick={handleSubmit} style={{"minWidth": "120px"}}>
          Confirm Order
        </button>
        <br/>
        <div className="spacefooter my-5"></div>
      </div>
    </div>
  );
}

export default Checkout;
