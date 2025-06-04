import React, { memo } from "react";
import { Col, Nav, NavLink, Row, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { eventPageRoute } from "../routes";
import { useResolvedPath } from "react-router-dom/dist";
import { useSelector } from "react-redux";
import { HiPhotograph, HiPlay } from "react-icons/hi";

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
        transform: "scale(1.1)",
        fontWeight: "800",
        backgroundColor: "var(--primary-color, #007bff)",
        color: "white",
        borderRadius: "25px",
        boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
      };
    }
    return {
      backgroundColor: "var(--light-gray, #f8f9fa)",
      color: "var(--dark, #333)",
      borderRadius: "25px",
      transition: "all 0.3s ease",
    };
  };

  const getHoverStyle = () => ({
    backgroundColor: "var(--primary-color, #007bff)",
    color: "white",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0,123,255,0.2)",
  });

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
            <Row className="justify-content-center mb-4">
              <Nav className="gallery-navs d-flex justify-content-center gap-3">
                {eventMedia.images.length ? (
                  <NavLink
                    onClick={() => handleClickNavLink("images")}
                    style={getStyle("images")}
                    className="gallery-nav-item d-flex align-items-center px-4 py-2 text-decoration-none"
                    onMouseEnter={(e) => {
                      if (!pathname.includes("images")) {
                        Object.assign(e.target.style, getHoverStyle());
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!pathname.includes("images")) {
                        Object.assign(e.target.style, getStyle("images"));
                      }
                    }}
                  >
                    <HiPhotograph className="me-2" style={{ fontSize: "18px" }} />
                    <span className="me-2">{t("images")}</span>
                    <Badge 
                      bg="light" 
                      text="dark" 
                      className="ms-1"
                      style={{ fontSize: "12px" }}
                    >
                      {eventMedia.images.length}
                    </Badge>
                  </NavLink>
                ) : (
                  <></>
                )}
                {eventMedia.videos.length ? (
                  <NavLink
                    onClick={() => handleClickNavLink("videos")}
                    style={getStyle("videos")}
                    className="gallery-nav-item d-flex align-items-center px-4 py-2 text-decoration-none"
                    onMouseEnter={(e) => {
                      if (!pathname.includes("videos")) {
                        Object.assign(e.target.style, getHoverStyle());
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!pathname.includes("videos")) {
                        Object.assign(e.target.style, getStyle("videos"));
                      }
                    }}
                  >
                    <HiPlay className="me-2" style={{ fontSize: "18px" }} />
                    <span className="me-2">{t("videos")}</span>
                    <Badge 
                      bg="light" 
                      text="dark" 
                      className="ms-1"
                      style={{ fontSize: "12px" }}
                    >
                      {eventMedia.videos.length}
                    </Badge>
                  </NavLink>
                ) : (
                  <></>
                )}
              </Nav>
            </Row>
            {/* Add a subtle hint when videos are available but user is viewing images */}
            {eventMedia.videos.length > 0 && pathname.includes("images") && (
              <Row className="justify-content-center mb-3">
                <Col xs={12} className="text-center">
                  <div 
                    className="video-hint p-2"
                    style={{
                      backgroundColor: "rgba(255, 193, 7, 0.1)",
                      border: "1px solid rgba(255, 193, 7, 0.3)",
                      borderRadius: "10px",
                      fontSize: "14px",
                      color: "var(--warning, #856404)",
                      animation: "pulse 2s infinite"
                    }}
                  >
                    <HiPlay className="me-2" />
                    {t("Don't miss our")} {eventMedia.videos.length} {t("videos")}! 
                    <span 
                      onClick={() => handleClickNavLink("videos")}
                      style={{ 
                        cursor: "pointer", 
                        textDecoration: "underline",
                        fontWeight: "bold",
                        marginLeft: "5px"
                      }}
                    >
                      {t("Watch now")} →
                    </span>
                  </div>
                </Col>
              </Row>
            )}
          </Col>
          <Outlet />
        </Row>
      </Col>
    </>
  );
});
export default Gallery;
