import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import data from "../js/data";

const Home = () => {
  return (
    <div className="page-wrapper">
      <MainContent />
      <SideContent data={data} />
    </div>
  );
};

export default Home;
