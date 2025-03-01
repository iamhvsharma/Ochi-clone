import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full font-['Poppins'] min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />

    </div>
  );
};

export default App;
