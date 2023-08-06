import { NavLink } from "react-router-dom";
import "../styles/product.css";
import FormatCurrency from "../helper/FormatCurrency";

const Product = (curElem) => {
  const { id, name, image, price } = curElem;
  return (
    <div className="card">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="product-details">
          <div className="product-img">
            <img src={image} alt={name} />
          </div>
          <div className="product-info">
            <p>{name}</p>
            <span>{<FormatCurrency price={price} />}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
