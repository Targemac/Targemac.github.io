import "./App.css";

import Header from "./components/Header";
// import { render } from "react-dom";
// import { BrowserRouter, Routes, route } from "react-router-dom";
// import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PersonalSummary from "./components/PersonalSummary";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import IntroBanner from "./components/IntroBanner";
import SideContent from "./components/SideContent";
import ScrollToTop from "./components/ScrollToTop";
import HireMe from "./components/HireMe";

import data from "./js/data";
import Faq from "./components/Faq";
const techSkills = data.tech_skills;
const baseURL = "http://localhost:5000/";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroBanner />
      <PersonalSummary />
      <HireMe baseURL={baseURL} />
      <SideContent techSkills={techSkills} />
      <Languages />
      <Projects baseURL={baseURL} />
      <Home />
      <HireMe baseURL={baseURL} />
      <Faq />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
