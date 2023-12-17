import React from "react";
import { Row } from "react-bootstrap";
import { contactus } from "./data/ContactUs";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap/esm";
import Logo from "../images/Logo";
import logo from "../images/logo.jpg";
import SocialMediaIcons from "./common/SocialMediaIcons";
function Footer() {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center pt-5 pb-4 mt-5 footer">
      <Col sm={12}>
        <h3>{t("contact-us")}</h3>
        <h6>{t(contactus.location)}</h6>

        <h6>{t(contactus.street)}</h6>

        <h6>{t(contactus.phone)}</h6>

        <h6>{t(contactus.email)}</h6>
      </Col>
      <Col sm={12}>
        <Row className="justify-content-center my-3">
          <SocialMediaIcons />
        </Row>
      </Col>
      <Col sm={12}>
        <Row className="justify-content-center my-3">
          <Logo src={logo} alt="logo" className="logo" />
        </Row>
      </Col>
    </Row>
  );
}

export default Footer;
