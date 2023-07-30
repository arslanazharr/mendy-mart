import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    img: "https://img.freepik.com/free-photo/portrait-young-lady-shirt-denim-shorts-standing-with-colorful-shopping-bags-hands-screaming-while-happily-looking-aside-pink-background_574295-1188.jpg?w=996&t=st=1690744001~exp=1690744601~hmac=67804e993c9a31fc1051b49afcd33e593ca57acaa07908548beb9634ecd9e1e2",
  };
  return <HeroSection myData={data} />;
};

export default Home;
