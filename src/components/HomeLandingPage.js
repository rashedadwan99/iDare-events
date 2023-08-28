import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import SocialMediaIcons from "./common/SocialMediaIcons";
import Writer from "./common/Writer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom/dist";
import { loginPageRoute } from "../routes";
import { getUserToken } from "../services/userService";
function HomeLandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleJoinUs = () => {
    navigate(loginPageRoute);
    window.scrollTo(0, 0);
  };
  return (
    <Row className="justify-content-between landing-section">
      <Col sm={12} md={12} style={{ margin: "auto 0" }}>
        <Row className="justify-content-center my-3">
          <h3>{t("idare")}</h3>
        </Row>
        <Row className="justify-content-center my-3">
          <h5>
            <Writer sentence={t("purpose")} />
          </h5>
        </Row>
        <Row className="justify-content-center my-3">
          <SocialMediaIcons />
        </Row>
        {!getUserToken() && (
          <Row className="justify-content-center my-4">
            <h6 onClick={handleJoinUs}>{t("join_us")}</h6>
          </Row>
        )}
      </Col>
    </Row>
  );
}

export default HomeLandingPage;
