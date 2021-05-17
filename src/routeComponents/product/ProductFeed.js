import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import api from "../../apis/index";

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
    <div className="row">
      {product.map((product) => {
        return (
          <div key={product._id} className="col-12 col-sm-4 col-md-4 mx-auto">
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductFeed;
