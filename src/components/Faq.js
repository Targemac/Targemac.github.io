import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import faq from "../js/faq.data";

const Faq = () => {
  return (
    <div className="faq-wrapper">
      <div className="faq-head" id="faq_head">
        frequently asked questions
      </div>
      <div className="faq-body" id="faq_body">
        {faq.frqQuest.map((item) => (
          <div key={item.id} className="faq-body-item">
            <div className="faq-body-question">
              <div>
                {" "}
                <FaQuestionCircle />
              </div>
              <div> {item.question}</div>
            </div>
            <div className="faq-body-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
