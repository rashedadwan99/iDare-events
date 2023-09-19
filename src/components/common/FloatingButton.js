import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../../styles/eventStyles";
import "../../styles/floatingbutton.css";

const FloatingButton = ({ event }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    isVisible && (
      <div
        className="floating-button"
        onClick={handleClick}
        style={handlePrimaryButtonStyleWhenHover(event)}
      >
        <FaArrowUp />
      </div>
    )
  );
};

export default FloatingButton;
