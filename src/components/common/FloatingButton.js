import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "../../styles/floatingbutton.css";

const FloatingButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-button" onClick={handleClick}>
      <FaArrowUp />
    </div>
  );
};

export default FloatingButton;
