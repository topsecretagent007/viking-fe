import React, {useEffect} from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Community from "./components/Community";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Community />
      </div>
      <Footer />
    </>
  );
};

export default App;
