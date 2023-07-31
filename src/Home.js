import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import homeImg from "./images/home.jpg";

const Home = () => {
  const data = {
    img: homeImg,
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Marquee />
    </>
  );
};

export default Home;
