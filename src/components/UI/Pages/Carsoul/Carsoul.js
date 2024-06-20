import React from "react";
import home from "../../../../assets/images/home.jpg";
import home1 from "../../../../assets/images/home1.jpg";
import home2 from "../../../../assets/images/home2.jpg";
const Carsoul = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
       data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={home}
              style={{ height: "85vh", objectFit: "cover" }}
              className="d-block w-100"
              alt="Home"
            />
          </div>
          <div className="carousel-item">
            <img
              src={home1}
              style={{ height: "85vh", objectFit: "cover" }}
              className="d-block w-100"
              alt="Home1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={home2}
              style={{ height: "85vh", objectFit: "cover" }}
              className="d-block w-100"
              alt="Home2"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carsoul;
