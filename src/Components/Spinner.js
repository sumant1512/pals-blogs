import React from "react";

const Spinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "250px", height: "150px" }}
        src="loading.gif"
        alt="spinner"
      />
    </div>
  );
};

export default Spinner;
