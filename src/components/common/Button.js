import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../styles/button.css";
function CommonButton({
  label,
  icon,
  primaryStyle,
  primaryStyleHover,
  style,
  ...rest
}) {
  const [customStyle, setCustomStyle] = useState(primaryStyle);
  const handleEnter = () => {
    setCustomStyle(primaryStyleHover);
  };
  const handleLeave = () => {
    setCustomStyle(primaryStyle);
  };

  return (
    <Button
      {...rest}
      className="common-button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={customStyle}
    >
      <div>{label}</div>
      {icon}
    </Button>
  );
}
export default CommonButton;
