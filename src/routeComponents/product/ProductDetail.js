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
    <div className="details">
    <img src={background} alt="background" class="bg"/>
    <div>
      <div className="detail  d-flex bd-highlight">
      <img
        className="imageDetail card-img product-img mx-auto mt-5"
        src={state.image_url}
        alt="product-image"
      />
      <div className="details card-body mx-5">

        <h4 className="card-title my-auto mb-0">
          <small>{state.name}</small>
        </h4>

        <div>
          <p>
            <small> {state.description}</small>
          </p>
        </div>

        <div className="more-info mt-5">
        <p>
          <strong className="mt-5">Gluten Free:  {state.glutenFree}</strong>
        </p>
        <p>
          <strong className="mr-5">Lactose Free:  {state.lactoseFree}</strong>
        </p>
        <p>
          <strong className="mr-5">Sugar Free:   {state.sugarFree}</strong>
        </p>
        <p>
          <strong className="mr-5">Casein Free:   {state.caseinFree}</strong>
        </p>
        <p>
          <strong className="mr-5">Vegan: {state.vegan}</strong>
        </p>
        </div>


        <h3 className="card-text mt-5 ">
          {Number(state.price).toLocaleString(window.navigator.languages[0], {
            style: "currency",
            currency: "EUR",
          })}
        </h3>

        <div className="form-group d-inline-block mr-3 ">
          <label htmlFor="productDetailQuantity">Quantity: </label>
          <input
            type="number"
            id="productDetailQuantity"
            className="form-control"
            min="0"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
        </div>
        <button
          className="add btn"
          onClick={() => {
            console.log(cart);
            if (quantity > 0 ) { setCart([...cart, { qtt: quantity, productId: id }]) };
          }}
        >
          Add to Cart
        </button>
          </div>
        </div>
      </div>
      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={() => history.push(`/product/delete/${id}`)}
        title="Are you sure you want to delete this product?"
      >
        <p>This action is irreversible. To confirm, click "Confirm".</p>
      </ConfirmationModal>
      
      {loggedInUser.user.role === "ADMIN" ? (
        <div className="row d-flex justify-content-end mr-2">
          <Link to={`/product/edit/${id}`} className="btn btn-warning mr-3">
            Edit
          </Link>
          {/* Abrimos um modal de confirmação antes de deletar o produto */}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  
  );
}
export default ProductDetails;
