import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import SingleProductImages from "./components/SingleProductImages";
import FormatCurrency from "./helper/FormatCurrency";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import "./styles/singleProduct.css";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleProductLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  // console.log("Single Product data: ", id);

  const {
    image,
    name,
    company,
    price,
    description,
    // category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleProductLoading) {
    return <div>loading....</div>;
  }
  return (
    <>
      <PageNavigation title={name} />
      <div className="single-prd-main">
        <div className="single-prd-img">
          <SingleProductImages imgs={image} />
        </div>
        <div className="single-prd-info">
          <h1>{name}</h1>
          <div className="single-prd-feedback">
            <p>{stars}</p>
            <p>({reviews} reviews)</p>
          </div>
          <div className="single-prd-mrp">
            <p>MRP:</p>
            <del>
              <FormatCurrency price={price * 11} />
            </del>
          </div>
          <div className="single-prd-real-price">
            <p>Deal of the day:</p>
            <span>
              <FormatCurrency price={price * 10} />
            </span>
          </div>
          <div className="single-prd-desc">
            <p>{description}</p>
          </div>
          <div className="single-prd-icons">
            <div className="icons-div">
              <LiaShippingFastSolid className="icon" />
              <p>Free Shipping</p>
            </div>
            <div className="icons-div">
              <PiArrowsClockwiseBold className="icon" />
              <p>30 Days Replacement</p>
            </div>
            <div className="icons-div">
              <RiSecurePaymentLine className="icon" />
              <p>Secure Payment</p>
            </div>
            <div className="icons-div">
              <GiPayMoney className="icon" />
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="single-prd-other-info">
            <p>
              Available: <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
            </p>
            <p>
              Brand: <span>{company}</span>
            </p>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
