import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import CommonAliceCarousel from "./common/CommonAliceCarousel";
import EventSectionContainer from "./common/EventSectionContainer";

function EventSponsors({ event }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(
      event.sponsors.map((s) => {
        return (
          <Image
            src={getImageSrc(s.image)}
            alt="sponsor"
            onClick={() => {
              window.location.href = s.link;
            }}
            key={s.id}
            role="presentation"
            style={{ cursor: "pointer" }}
          />
        );
      })
    );
  }, []);

  return event.sponsors.length ? (
    <EventSectionContainer name="cooperation">
      <Row className="justify-content-center mb-5 mt-3 event-sponsors">
        <CommonAliceCarousel items={images} />
      </Row>
    </EventSectionContainer>
  ) : (
    <></>
  );
}

export default EventSponsors;
