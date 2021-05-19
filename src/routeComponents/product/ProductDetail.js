import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "./ProductDetail.css"
import background from '../../components/images/backgroundanis/background-signup-01.png'


import api from "../../apis/index";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import ConfirmationModal from "../../components/ConfirmationModal";

function ProductDetails() {
  const [state, setState] = useState({
    name: "",
    description: "",
    glutenFree: "",
    lactoseFree: "",
    sugarFree: "",
    caseinFree: "",
    vegan: "",
    price: 0,
    image_url: "",
    transactions: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <div>
      {loggedInUser.user.role === "ADMIN" ? (
        <div className="row d-flex justify-content-end">
          <Link to={`/product/edit/${id}`} className="btn btn-warning mr-3">
            Edit
          </Link>
          {/* Abrimos um modal de confirmação antes de deletar o produto */}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      ) : null}
      <img src={background} alt="background" class="bg" />
      <img
        className="card-img product-img mx-auto mt-2 imageDetail"
        src={state.image_url}
        alt="product-image"
      />
      <div className="card-body">

        <h4 className="card-title my-auto">
          <small>{state.name}</small>
        </h4>

        <div>
          <p>
            <small> {state.description}</small>
          </p>
        </div>


        <p>
          <small>Gluten Free {state.glutenFree}</small>
        </p>
        <p>
          <small>Lactose Free {state.lactoseFree}</small>
        </p>
        <p>
          <small>Sugar Free {state.sugarFree}</small>
        </p>
        <p>
          <small>Casein Free {state.caseinFree}</small>
        </p>
        <p>
          <small>Vegan {state.vegan}</small>
        </p>



        <h3 className="card-text">
          {Number(state.price).toLocaleString(window.navigator.languages[0], {
            style: "currency",
            currency: "EUR",
          })}
        </h3>

        <div className="form-group d-inline-block mr-3">
          <label htmlFor="productDetailQuantity">Quantity: </label>
          <input
            type="number"
            id="productDetailQuantity"
            className="form-control"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log(cart);
            if (quantity > 0 ) { setCart([...cart, { qtt: quantity, productId: id }]) };
          }}
        >
          Add to Cart
        </button>
      </div>

      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={() => history.push(`/product/delete/${id}`)}
        title="Are you sure you want to delete this product?"
      >
        <p>This action is irreversible. To confirm, click "Confirm".</p>
      </ConfirmationModal>
    </div>
  );
}

export default ProductDetails;
