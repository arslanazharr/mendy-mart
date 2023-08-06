import { useProductContext } from "../context/productContext";
import Product from "./Product";
import "../styles/product.css";

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="featured-main">
      <h1>Best Selling</h1>
      <div className="featured-products">
        {featuredProducts.map((curElem, index) => {
          return <Product key={index} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
