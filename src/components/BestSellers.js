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
    <div className="row" id="bestsellers">
      {product
        .map((product) => {
          return (
            <div
              key={product._id}
              className="col-12 col-sm-4 col-md-4 mx-auto"
              style={{ "margin-bottom": "-18%" }}
            >
              <div>
                <h1>Best Sellers</h1>
              </div>
              <div>
                <ProductCard product={product} />
              </div>
            </div>
          );
        })
        .filter((product, i) => i < 3)}
    </div>
  );
}

export default BestSellers;
