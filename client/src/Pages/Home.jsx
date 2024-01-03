import "./home.css";
import FloatingNav from "../Components/FloatingNav/FloatingNav";
import Header from "../Components/header/header";
import About from "../Components/about/about";
import Featured from "../Components/Featured/Featured";
import Portfolio from "../Components/portfolio/portfolio";
import Contact from "../Components/contact/Contact";
import Footer from "../Components/footer/footer";
import Skill from "../Components/Skills/Skill";

const Home = () => {
  return (
    <div className="home">
      <FloatingNav />
      <Header />
      <About />
      <Skill />
      <Featured />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
