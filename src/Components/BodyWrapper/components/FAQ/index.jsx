
import React from "react";
import "./style.scss";

const FAQ = () => {
  const [toggleans, setToggleAnswer] = React.useState({});

  const toggleState = (id) => {
    setToggleAnswer({ ...toggleans, [id]: !toggleans[id] });
  };

  React.useEffect(() => {
    toggleState;
  }, [toggleans]);

  const faqs = [
    {
      id: 1,
      question: "Are your honey kosher ?",
      answer: "Yes, all of our honeys are COR Certified.",
    },
    {
      id: 2,
      question: "Are your honey kosher ?",
      answer: "Yes, all of our honeys are COR Certified.",
    },
  ];

  return (
    <div className="faq__container">
      <h1>Frequently Asked Questions</h1>
      <p>Questions you might ask about our products and services.</p>

      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div key={faq.id}>
              <div className="qstn" onClick={() => toggleState(faq.id)}>
                <h3>{faq.question}</h3>
                <p className={`${toggleans[faq.id] && "show"}`}>
                  <i className="ri-arrow-down-s-line"></i>
                </p>
              </div>
              {toggleans[faq.id] && (
                <div className="desp">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
