import "./home.css";
import FloatingNav from "../Components/FloatingNav/FloatingNav";
import Header from "../Components/header/header";
import About from "../Components/about/about";
import Experience from "../Components/experience/experience";
import Featured from "../Components/Featured/Featured";
import Portfolio from "../Components/portfolio/portfolio";
import Contact from "../Components/contact/Contact";
import Footer from "../Components/footer/footer";

const Home = () => {
  return (
    <div className="home">
      <FloatingNav />
      <Header />
      <About />
      <Experience />
      <Featured />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
