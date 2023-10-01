import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Logo from "../images/Logo";
import { getImageSrc } from "../services/imageServices";
import logo from "../images/logo.jpg";
import { useEffect } from "react";
import { useState } from "react";

function LeftHeaderSide() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const [img, setImg] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);
  useEffect(() => {
    setIsImageLoading(true);
    if (id) {
      setImg(getImageSrc(event.image));
      setIsImageLoading(false);

      return;
    }
    setImg(logo);
    setIsImageLoading(false);
  }, [id, event]);
  return (
    <Col xs={6} sm={3} md={2}>
      <Row className="justify-content-start px-2">
        {!isImageLoading && <Logo src={img} alt="logo" event={event} />}
      </Row>
    </Col>
  );
}

export default LeftHeaderSide;
