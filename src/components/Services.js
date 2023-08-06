import { TbTruckDelivery } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import "../styles/services.css";

const Services = () => {
  return (
    <div className="services-main">
      <div className="service1 service">
        <TbTruckDelivery className="service-icon" />
        <p>FREE AND FAST SHIPPING</p>
      </div>
      <div className="service2">
        <div className="service-2">
          <BiSupport className="service-icon" />
          <p>SECURE CHECKOUT</p>
        </div>
        <div className="service-2">
          <GrSecure className="service-icon" />
          <p>SECURE CHECKOUT</p>
        </div>
      </div>

      <div className="service3 service">
        <GiReceiveMoney className="service-icon" />
        <p>EASY RETURNS</p>
      </div>
    </div>
  );
};

export default Services;
