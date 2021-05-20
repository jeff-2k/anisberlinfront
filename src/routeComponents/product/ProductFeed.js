import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import api from "../../apis/index";
import "./ProductFeed.css";

function ProductFeed() {
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
    <div className="product-feed">
    <h2 className="all-products d-flex justify-content-center">All Products</h2>
    <div className="row">
      {product.map((product) => {
        return (
          <div
            key={product._id}
            className="col-12 col-sm-4 col-md-4 mx-auto"
            style={{ "marginBottom": "-18%" }}
          >
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default ProductFeed;
