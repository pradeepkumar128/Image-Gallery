import React, { useEffect, useState } from "react";
import Apidata from "../../../API/Apidata/Apidata";

const Carddata = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "All"
      ? Apidata
      : Apidata.filter((value) => value.category === selectedCategory);

  const uniqueCategories = [
    "All",
    ...new Set(Apidata.map((value) => value.category)),
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectedCategory]);

  return (
    <>
      <div
        className="container mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="row" style={{ width: "52%", textAlign: "center" }}>
          {uniqueCategories.map((category) => (
            <div className="col-md-3" key={category}>
              <button
                className={`btn btn-outline-dark ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center mt-5">
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5 text-center">
          <div className="row justify-content-center" style={{ gap: "40px" }}>
            {filteredData.map((value) => (
              <div className="col-lg-3 mb-3" key={value.id}>
                <div className="card" style={{ width: "18rem" }}>
                <img
            src={value.img}
            alt={value.title}
            style={{
              height: '200px', 
              objectFit: 'cover',
              width: '100%', 
            }}/>
                  <div className="card-body">
                    <h4
                      className="card-text"
                      style={{ textTransform: "uppercase" }}
                    >
                      {value.title}
                    </h4>
                    <p
                      className="card-desc"
                      style={{
                        color: "black",
                        fontSize: "14px",
                        overflow: "hidden",
                        textTransform: "capitalize",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        lineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carddata;
