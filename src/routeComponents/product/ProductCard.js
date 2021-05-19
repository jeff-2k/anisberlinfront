import { Link } from "react-router-dom";
import "./ProductCard.css";

import glutenFree from '../anis_icons/icons_sem gluten-p.png'
import lactoseFree from '../anis_icons/icons_sem lactose-p.png'
import sugarFree from '../anis_icons/icons_sem açucar-p.png'
import caseinFree from '../anis_icons/icons_sem caseina-p.png'
import vegan from '../anis_icons/icons_vegan-p.png'

function ProductCard(props) {

  function renderIcons(product){
    console.log(props)
    return (
      <div className="icons">
        {props.product.glutenFree === "yes" ? <img src={glutenFree} alt="gluten-free"  style={{"height": "20px"}}/> : null }
        {props.product.lactoseFree === "yes" ? <img src={lactoseFree} alt="lactose-free" style={{"height": "20px"}}/> : null }
        {props.product.sugarFree === "yes" ? <img src={sugarFree} alt="sugar-free" style={{"height": "20px"}}/> : null }
        {props.product.caseinFree === "yes" ? <img src={caseinFree} alt="casein-free" style={{"height": "20px"}}/> : null }
        {props.product.caseinFree === "yes" ? <img src={vegan} alt="vegan" style={{"height": "20px"}}/> : null }
      </div>
    )
    }


  return (
    <Link
      className="text-decoration-none"
      key={props.product._id}
      to={`/product/${props.product._id}`}
    >
      <div
        className="card card-fixed-height text-dark shadow rounded border-0 m-1 text-center my-5"
        style={{ width: "100%", height: "50%"}}
      >
        <div className="card-img-container d-flex justify-content-center align-items-center">
          <img
            className="card-img product-img"
            src={props.product.image_url}
            alt="product-image"
          />
        </div>

        <div>
        <div className="card-body p-0 mt-2" style={{ height: "35%" }}>
          <h4
            title={props.product.name}
            className="card-title card-title-fixed-height text-truncate pb-0"
          >
            <small>{props.product.name}</small>
          </h4>
          </div>

          <h3 className="card-text" style={{ height: "25%" }}>
            {Number(props.product.price).toLocaleString(
              window.navigator.languages[0],
              { style: "currency", currency: "EUR" }
            )}
          </h3>
          
          <div className="render-icon" > 
          {renderIcons(props.product)}
          </div>   
        </div>
      </div>
      <br></br>
    </Link>
  );
}

export default ProductCard;
