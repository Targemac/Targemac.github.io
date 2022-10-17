import React from "react";
import "../assets/css/benefits.css";
import char3 from "../assets/images/char3.jpg";

const Benefits = (props) => {
  return (
    <div className="benefits-wrapper">
      <div className="benefits-header"> {props.name} best quality software</div>
      <div className="benefits-grp">
        <div className="benefit">
          <div className="benefit-body">
            <div className="benefit-title">fully integrated services</div>
            <div className="benefit-description">
              we build and deliver fully integrated webpages with customized
              control panels that fills your company needs.{" "}
            </div>
          </div>
          <div className="benefit-image">
            <img src={char3} alt="" />
          </div>
        </div>
        <div className="benefit">
          <div className="benefit-image">
            <img src={char3} alt="" />
          </div>
          <div className="benefit-body">
            <div className="benefit-title">Mobile optimized</div>
            <div className="benefit-description">
              we ensure your users gets the best experince on the mobile phones,
              natives apps for platforms.{" "}
            </div>
          </div>
        </div>
        <div className="benefit">
          <div className="benefit-body">
            <div className="benefit-title">quality is our priority</div>
            <div className="benefit-description">
              we have teams of proffessional developers, designers and managers
              that ensures delivering the best software for your company.{" "}
            </div>
          </div>
          <div className="benefit-image">
            <img src={char3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
