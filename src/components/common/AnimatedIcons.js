import React from "react";
import { BsSquare } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
function AnimatedIcons() {
  return (
    <>
      <div className="animated-icons__square position">
        <BsSquare />
      </div>

      <div className="animated-icons__close position">
        <AiOutlineClose />
      </div>
      <div className="animated-icons__gray-bar position" />
    </>
  );
}

export default AnimatedIcons;
