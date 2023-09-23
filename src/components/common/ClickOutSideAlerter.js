import React, { useRef, useEffect } from "react";

const ClickOutsideAlerter = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div ref={wrapperRef} className="clickoutside-container">
      {children}
    </div>
  );
};

export default ClickOutsideAlerter;
