import React from "react";
import logo from "./logo.jpg";
import { Image } from "react-bootstrap";

function Logo() {
  return <Image src={logo} alt="logo" className="logo" />;
}

export default Logo;
