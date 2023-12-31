import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Row } from "react-bootstrap";
import NotFoundImage from "../images/notfound.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Row className="justify-content-center mt-5">
        <h3>{t("not-found")}</h3>
      </Row>

      <Row className="justify-content-center my-5">
        <Image
          src={NotFoundImage}
          alt="not-found"
          className="not-found_image"
          fluid
          loading="lazy"
        />
      </Row>
      <Footer />
    </>
  );
}

export default NotFound;
