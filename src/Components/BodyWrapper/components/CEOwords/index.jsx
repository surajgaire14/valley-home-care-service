import React from "react";
import quote from "../../../../images/quote.png";
import "./style.scss";

const CEOWords = () => {
  return (
    <div className="ceo__container">
      <div className="wrapper">
        <div className="image__container">
          <img
            src="https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="neharika-kc"
            width={400}
            height={400}
          />
        </div>
        <div className="testimonial">
          <h2>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestias sed magni fuga reiciendis ut dignissimos dolore, porro hic
            accusamus!"
          </h2>
          <div className="info">
            <p>- Neharika KC </p>
            <p>Founder and CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOWords;
