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
      className="div-best row col-12 col-sm-4 col-md-4 m-0"
      id="bestseller"
      style={{ minWidth: "100%", marginTop: "-20%" }}
    >
      <div />
      <div>
        <h1 className="bt-title mt-5" style={{ left: "50%" }}>
          Best Sellers
        </h1>
      </div>
      <div className="row">
        {product
          .map((product) => {
            return (
              <div
                key={product._id}
                className="card card-fixed-height text-dark shadow rounded border-0 m-1 text-center my-5"
                style={{ width: "25%", height: "40%" }}
              >
                <div>
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
