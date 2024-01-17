import React from "react";
import { Container, Image } from "react-bootstrap";
import { toggleOpenModal } from "../redux/actions/modalAction";
import { useDispatch, useSelector } from "react-redux";
import { getImageSrc } from "../services/imageServices";

function GalleryImages() {
  const dispatch = useDispatch();
  const handleShowImage = (Children) => {
    dispatch(toggleOpenModal(Children, null, { padding: "0" }));
  };

  const images = useSelector((state) => state.events.eventMedia.images);

  return (
    <Container fluid id="gallery">
      {images.map((g, i) => {
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
