import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import CommonAliceCarousel from "./common/CommonAliceCarousel";

function EventSponsors({ event }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(
      event.sponsors.map((s) => (
        <Image
          src={getImageSrc(s.image)}
          alt="sponsor"
          onClick={() => {
            console.log("hi");
          }}
          key={s.id}
          role="presentation"
        />
      ))
    );
  }, []);

  return (
    <Row className="justify-content-center mb-5 mt-3 event-sponsors">
      <CommonAliceCarousel items={images} />
    </Row>
  );
}

export default EventSponsors;
