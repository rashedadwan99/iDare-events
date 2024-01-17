import React, { memo } from "react";
import { Col, Nav, NavLink, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { eventPageRoute } from "../routes";
import { useResolvedPath } from "react-router-dom/dist";
import { useSelector } from "react-redux";

const Gallery = memo(function () {
  const { t } = useTranslation();
  const { id } = useParams();
  const { pathname } = useResolvedPath();
  const eventMedia = useSelector((state) => state.events.eventMedia);
  const navigate = useNavigate();
  const handleClickNavLink = (target) => {
    navigate(eventPageRoute + `/${id}/gallery/${target}`);
  };
  const getStyle = (subPath) => {
    if (pathname.includes(subPath)) {
      return {
        transform: "scale(1.2)",
        fontWeight: "800",
      };
    }
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
                {eventMedia.images.length ? (
                  <NavLink
                    onClick={() => handleClickNavLink("images")}
                    style={getStyle("images")}
                  >
                    {t("images")}
                  </NavLink>
                ) : (
                  <></>
                )}
                {eventMedia.videos.length ? (
                  <NavLink
                    onClick={() => handleClickNavLink("videos")}
                    style={getStyle("videos")}
                  >
                    {t("videos")}
                  </NavLink>
                ) : (
                  <></>
                )}
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
