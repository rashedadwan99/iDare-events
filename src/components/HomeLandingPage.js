import React from "react";
import { Row } from "react-bootstrap";
import SocialMediaIcons from "./common/SocialMediaIcons";
import Writer from "./common/Writer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom/dist";
import { loginPageRoute } from "../routes";
import { getUserToken } from "../services/userService";
import AosContainer from "./common/Aos";
import AnimatedIcons from "./common/AnimatedIcons";
import { scrollToTop } from "./utils/scrollToTop";
function HomeLandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleJoinUs = () => {
    navigate(loginPageRoute);
    scrollToTop();
  };
  return (
    <Row className="justify-content-between landing-section">
      <AnimatedIcons />
      <AosContainer style={{ margin: "auto 0" }}>
        <h3>{t("idare")}</h3>
        <h5>
          <Writer sentence={t("purpose")} />
        </h5>
        <Row className="justify-content-center my-3">
          <SocialMediaIcons />
        </Row>
        {!getUserToken() && (
          <Row className="justify-content-center my-4">
            <h6 onClick={handleJoinUs}>{t("join_us")}</h6>
          </Row>
        )}
      </AosContainer>
    </Row>
  );
}

export default HomeLandingPage;
