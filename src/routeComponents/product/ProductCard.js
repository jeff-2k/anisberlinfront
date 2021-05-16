import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {

  // function renderIcons(product){
  //   console.log(props.product)
  //   switch(props.product){
  //     case props.product.glutenFree === "yes":
  //       return <img src="../anis_icons/icons_sem gluten-p.png" alt="gluten-free" />;
  //     case (props.product.lactoseFree) === "yes":
  //       return <img src="../anis_icons/icons_sem lactose-p.png" alt="lactose-free" />;
  //     case (props.product.sugarFree) === "yes":
  //       return <img src="../anis_icons/icons_sem caseina-p.png" alt="sugar-free" />;
  //     case (props.product.caseinFree) === "yes":
  //         return <img src="../anis_icons/icons_sem caseina-p.png" alt="casein-free" />;
  //     case (props.product.vegan) === "yes":
  //         return <img src="../anis_icons/icons_vegan-p.png" alt="vegan-free" />;  
  //   }
  //   }

  return (
    <Link
      className="text-decoration-none "
      key={props.product._id}
      to={`/product/${props.product._id}`}
    >
      <div
        className="card card-fixed-height text-dark shadow rounded border-0 m-1"
        style={{ width: "100%" }}
      >
        <div className="card-img-container d-flex justify-content-center align-items-center">
          <img
            className="card-img product-img"
            src={props.product.image_url}
            alt="product-image"
          />
        </div>

        <div className="card-body">
          <h4
            title={props.product.name}
            className="card-title card-title-fixed-height text-truncate"
          >
            <small>{props.product.name}</small>

            <div className="card-icon">
        {/* {renderIcons(props.product)} */}
        </div>
          </h4>

        

          <h3 className="card-text">
            {Number(props.product.price).toLocaleString(
              window.navigator.languages[0],
              { style: "currency", currency: "EUR" }
            )}
          </h3>
          <p className="mb-0">
            <small className="card-text">{props.product.description}</small>
          </p>

          <p className="card-text mb-0 text-truncate">
            <small>{props.product.tagline}</small>
          </p>
          <p className="card-text mb-0">
            {/* <small>
              <strong>Created by:</strong>{" "}
              {props.product.contributed_by
                ? props.product.contributed_by.split("<")[0]
                : ""}
            </small> */}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
