import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import homeImg from "./assets/home.jpg";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
  const data = {
    img: homeImg,
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <FeaturedProducts />
      <Marquee />
    </>
  );
};

export default Home;
