import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImageSrc } from "../services/imageServices";
import { sortData } from "../components/utils/sort";
import "../styles/gallery.css";
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
        <Container fluid id="#gallery">
          {sortedImages.map((g, i) => {
            return (
              <Image
                key={i}
                src={getImageSrc(g.image)}
                alt="gallery"
                className="img-responsive"
              />
            );
          })}
        </Container>
      </Row>
    </Col>
  );
}

export default Gallery;
