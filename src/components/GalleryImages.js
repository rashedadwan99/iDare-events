import React from "react";
import { Container, Image } from "react-bootstrap";
import { toggleOpenModal } from "../redux/actions/modalAction";
import { useDispatch, useSelector } from "react-redux";
import { getImageSrc } from "../services/imageServices";
import { sortData } from "./utils/sort";
import { useParams } from "react-router-dom";

function GalleryImages() {
  const dispatch = useDispatch();
  const handleShowImage = (Children) => {
    dispatch(toggleOpenModal(Children, null, { padding: "0" }));
  };
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedImages = sortData(event.gallery_images, "sort", "asc");
  return (
    <Container fluid id="gallery">
      {sortedImages.map((g, i) => {
        return (
          <Image
            loading="lazy"
            fluid
            onClick={() =>
              handleShowImage(
                <Image
                  src={getImageSrc(g.image)}
                  alt="gallery"
                  fluid
                  loading="lazy"
                />
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
  );
}

export default GalleryImages;
