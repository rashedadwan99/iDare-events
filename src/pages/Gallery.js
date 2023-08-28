import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImageSrc } from "../services/imageServices";
import { sortData } from "../components/utils/sort";
function Gallery() {
  const { t } = useTranslation();
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedImages = sortData(event.gallery_images, "sort", "asc");
  return (
    <Col sm={12} lg={12}>
      <Row className="justify-content-center my-5 px-1">
        <Col sm={12}>
          <Row className="justify-content-center mb-5">
            <h3 className="event-section-name">{t("gallery")}</h3>
          </Row>
        </Col>
        <Col xs={11} sm={10} md={10}>
          <Row className="justify-content-start">
            {sortedImages.map((g, i) => {
              return (
                <Col md={6} key={g.id}>
                  <Row style={{ height: "100%" }}>
                    <Image
                      src={getImageSrc(g.image)}
                      alt="gallery"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Gallery;
