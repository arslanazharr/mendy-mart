import { LiaShippingFastSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import "../styles/services.css";

const Services = () => {
  return (
    <div className="services-main">
      <div className="service1 service">
        <LiaShippingFastSolid />
        <p>FREE AND FAST SHIPPING</p>
      </div>
      <div className="service2 service">
        <div className="service-2">
          <GrSecure />
          <p>SECURE CHECKOUT</p>
        </div>
        <div className="services-02">
          <BiSupport />
          <p>SECURE CHECKOUT</p>
        </div>
      </div>

      <div className="service3 service">
        <GiReceiveMoney />
        <p>EASY RETURNS</p>
      </div>
    </div>
  );
};

export default Services;
