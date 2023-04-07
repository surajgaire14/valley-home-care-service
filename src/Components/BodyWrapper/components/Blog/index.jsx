import React from "react";
import "./style.scss";

const Blog = () => {
  return (
    <div className="blog__container" id="blog__container">
      <h1>Blog</h1>
      <div className="blog__wrapper">
        {[0, 1, 2].map((_, index) => {
          return (
            <div className="blog" key={index}>
              <img
                src="https://img.freepik.com/free-photo/doctor-nurse-discussing-digital-tablet_107420-84816.jpg?w=1380&t=st=1680532823~exp=1680533423~hmac=72967a97956fb04e25f16ee9cded315306a6780c8aefdbcf5e4c1fba75c206ed"
                alt="health-care"
                width={400}
                height={300}
              />
              <div className="info">
                <p className="date">April 3rd,2023</p>
                <h2 className="blog__heading">Many People Prefer to Recover</h2>
                <p className="desp">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam eum voluptas perferendis provident voluptates
                  maiores aut cupiditate accusamus placeat quas?
                </p>
                <div className="icons">
                  <p>
                    <i className="ri-user-line"></i> Suraj Gaire
                  </p>
                  <p>
                    <i className="ri-chat-3-fill"></i>3
                  </p>
                  <p>
                    <i className="ri-eye-line"></i> 100
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn__wrapper">
        <button className="readmore__btn">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
