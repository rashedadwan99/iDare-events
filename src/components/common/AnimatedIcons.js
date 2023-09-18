import React from "react";
import { BsFillSquareFill, BsFillCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/animated-icons.css";
function AnimatedIcons() {
  return (
    <>
      <div className="animated-icons__square position">
        <BsFillSquareFill />
      </div>
      <div className="animated-icons__circle position">
        <BsFillCircleFill />
      </div>
      <div className="animated-icons__close position">
        <AiOutlineClose />
      </div>
    </>
  );
}

export default AnimatedIcons;
