import React from "react";
import "./Banner.css";
import Contact from "./Contact";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row banner">
        <div className="col-12 col-md-6">
          <div className="m-5 p-5">
            <h1 className="heading">
              Quality painting services for lasting beauty and durability.
            </h1>
            <p>
              We can give you that one-of-a-kind, personalized touch you've been
              searching for with our custom designs and special coatings. Let us
              help you transform your space into a sanctuary with our expert
              painting services.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Banner;
