import "./App.css";

import Header from "./components/Header";
// import { render } from "react-dom";
// import { BrowserRouter, Routes, route } from "react-router-dom";
// import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PersonalSummary from "./components/PersonalSummary";
// import Projects from "./components/Projects";
import Languages from "./components/Languages";
import IntroBanner from "./components/IntroBanner";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroBanner />
      <PersonalSummary />
      {/* <Projects /> */}
      <Home />
      <SideContent/>
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
