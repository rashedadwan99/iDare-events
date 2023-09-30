import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { eventPageRoute, homePageRoute } from "../routes";
import { smoothScrolling } from "../components/utils/smoothScrolling";

function Logo({ event, ...rest }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(event ? eventPageRoute + `/${event.id}` : homePageRoute);
    smoothScrolling();
  };
  return (
    <Image {...rest} onClick={handleNavigate} style={{ cursor: "pointer" }} />
  );
}

export default Logo;
