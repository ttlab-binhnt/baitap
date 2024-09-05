import React from "react";
import "./LandingPage.css";

export const LandingPage = ({ items }) => {
  return (
    <>
      <h1 className="myH1">Inside Open Art</h1>

      <div></div>
      <div className="container">
        {items.map((item, index) => (
          <div className="items" key={index}>
            {item.icon}
            <h2>{item.title}</h2>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
