import { NavLink } from "react-router-dom";
import "../styles/heroSection.css";

const HeroSection = (props) => {
  const { img } = props.myData;
  return (
    <section>
      <div className="hero-main">
        <div className="hero-intro">
          <span>Welcome to</span>
          <h1>Mendy's Mart</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            possimus sapiente magni sunt nulla numquam similique aut totam quod
            quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sequi, accusantium.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            iusto quo amet hic! Aperiam officiis reiciendis repellat dolore,
            quisquam soluta magni sapiente ea. Amet labore impedit harum cum.
            Sit, in.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            iusto quo amet hic! Aperiam officiis reiciendis repellat dolore,
            quisquam soluta magni sapiente ea. Amet labore impedit harum cum.
            Sit, in.
          </p>
          <NavLink to="/products">
            <button>SHOP NOW</button>
          </NavLink>
        </div>
        <div className="hero-img">
          <img src={img} alt={img} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
