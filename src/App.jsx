import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Community from "./components/Community";
export const App = () => {
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
