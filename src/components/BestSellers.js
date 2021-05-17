import { useState, useEffect } from "react";
import ProductCard from "../routeComponents/product/ProductCard";
import api from "../apis/index";

function BestSellers() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get("/products/609eb7a179fa9f0c24ddd223");

        setProducts({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div key={product._id} className="col-12 col-sm-4 col-md-3 mx-auto">
      <div>
        <h3>Best Sellers</h3>
        <hr />
      </div>
      <div className="flex">
        <ProductCard product={product} />
      </div>
    </div>
  );
}

export default BestSellers;
