import React, { useState, useEffect } from "react";
import { FaQuestionCircle } from "react-icons/fa";
// import faq from "../js/faq.data";
import axios from "axios";
import faq from "../js/faq.data";

const Faq = () => {
  const [faqs, setFaqs] = useState([]) ;
  const url = "http://localhost:5000/";

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const response = await axios.get(`${url}faq`);
        //  console.table(response);
        setFaqs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    return () => {
      getFaqs();
    };
  }, []);

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
