import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImageSrc } from "../services/imageServices";
import { sortData } from "../components/utils/sort";
import { toggleOpenModal } from "../redux/actions/modalAction";
import "../styles/gallery.css";
function Gallery() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedImages = sortData(event.gallery_images, "sort", "asc");
  const handleShowImage = (Children) => {
    dispatch(toggleOpenModal(Children, null, { padding: "0" }));
  };
  return (
    <Col sm={12} lg={12}>
      <Row className="justify-content-center my-5 px-1">
        <Col sm={12}>
          <Row className="justify-content-center mb-5">
            <h3 className="event-section-name">{t("gallery")}</h3>
          </Row>
        </Col>
        <Container fluid id="gallery">
          {sortedImages.map((g, i) => {
            return (
              <Image
                onClick={() =>
                  handleShowImage(
                    <Image src={getImageSrc(g.image)} alt="gallery" />
                  )
                }
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
