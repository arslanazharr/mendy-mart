import { NavLink } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-logo-social">
        <NavLink to="/">
          <h1>Mendy's Mart</h1>
        </NavLink>
        <div className="footer-social-links">
          <a href="">
            <AiOutlineInstagram />
          </a>
          <a href="">
            <AiOutlineFacebook />
          </a>
          <a href="">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
      <div className="footer-quick-links">
        <h1>Quick Links</h1>
        <div className="footer-quick-links-">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </div>
      <div className="footer-news-letter-form">
        <h1>GET THE LATEST DEAL UPDATES</h1>
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          autoComplete="off"
        />
        <button>Sign Me Up!</button>
      </div>
    </div>
  );
};

export default Footer;
