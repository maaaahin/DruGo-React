import React from "react";
import "./PillSpinner.css"; // external CSS

const PillSpinner = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "150px" }}>
      <div className="pill-loader mb-3"></div>
      <div className="text-muted fw-medium">Fetching your medicines...</div>
    </div>
  );
};

export default PillSpinner;
