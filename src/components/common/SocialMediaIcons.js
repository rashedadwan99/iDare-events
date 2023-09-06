import React from "react";
import { socialLinks } from "../data/socialLinks";
import { Row } from "react-bootstrap/esm";
import "../../styles/social-media.css";
function SocialMediaIcons() {
  return (
    <>
      {socialLinks.map((s) => (
        <Row
          className="social-media-links mx-2"
          key={s.href}
          onClick={() => window.open(s.href, "_blank")}
        >
          {s.icon}
        </Row>
      ))}
    </>
  );
}

export default SocialMediaIcons;
