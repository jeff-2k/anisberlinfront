import { useState, useEffect } from "react";
// import { Nav } from "react-bootstrap";
import ProductCard from "../routeComponents/product/ProductCard";
import api from "../apis/index";
import "./BestSellers.css";

function BestSellers() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get("/products");

        setProducts([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div
      className="div-best m-0 d-flex justify-content-center flex-column align-items-center"
      id="bestseller"
      style={{ maxWidth: "100%", marginTop: "-20%", height: "100%" }}
    >
      <div />
      <div className="row">
      <div className="call text-center my-5 col-12 " >
        <h2>FUNCTIONAL CONFECTIONERY</h2>
        <p>Only with selected ingredients to bring the best benefits to your health.</p>
        </div>
        </div>

        <h2 className="bestSeller-title bt-title mt-5" style={{ left: "50%" }}>
          Best Sellers
        </h2>
      
      <div className="row ">
        {product
          .map((product) => {
            return (
              <div
                key={product._id}
                className="div-best card card-fixed-height text-dark border-0 m-1 text-center my-5 col-12 col-sm-4 col-md-4 mx-auto "
                style={{ width: "30vw", height: "auto" }}
              >
                <div className="div-best2 card-text card-bestCollor ">
                  <ProductCard product={product} />
                </div>
              </div>
            );
          })
          .filter((product, i) => i > 1 && i < 5)}
      </div>
    </div>
    
  );
}
export default BestSellers;