import React, { memo } from "react";
import { Col, Nav, NavLink, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { eventPageRoute } from "../routes";

const Gallery = memo(function () {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();
  const handleClickNavLink = (target) => {
    navigate(eventPageRoute + `/${id}/gallery/${target}`);
  };
  return (
    <>
      <Col sm={12} lg={12}>
        <Row className="justify-content-center my-5 px-1">
          <Col sm={12}>
            <Row className="justify-content-center mb-3">
              <h3 className="event-section-name">{t("gallery")}</h3>
            </Row>
          </Col>
          <Col sm={12}>
            <Row className="justify-content-center mb-3">
              <Nav className="gallery-navs">
                <NavLink onClick={() => handleClickNavLink("images")}>
                  {t("images")}
                </NavLink>
                <NavLink onClick={() => handleClickNavLink("videos")}>
                  {t("videos")}
                </NavLink>
              </Nav>
            </Row>
          </Col>
          <Outlet />
        </Row>
      </Col>
    </>
  );
});
export default Gallery;
