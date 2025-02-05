import Banner from "./Componets/Banner/Banner";
import Banner2 from "./Componets/Banner/Banner2";
import Footer from "./Componets/Footer/Footer";
import Hero from "./Componets/Hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import Service from "./Componets/Service/Service";
import Subscribe from "./Componets/Subscribe/Subscribe";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <div>
        <Hero />
        <Service />
        <Banner />
        <Subscribe />
        <Banner2 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
