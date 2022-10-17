import "./App.css";
import Benefits from "./pages/Benefits";
import Footer from "./pages/Footer";
import LandingPage from "./pages/LandingPage";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Benefits name="phoenix's" />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
