import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import { useTranslation } from "react-i18next";
import { isArabic } from "../locales/language";
import RoomDescription from "./RoomDescription";

function EventRooms({ event }) {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center mb-3">
      {[...event.rooms].map((r) => {
        return (
          <Col xs={11} sm={11} md={5} lg={4} className="m-3 py-1" key={r.id}>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} sm={12} md={12} lg={10} className="event-room p-5">
                <Image src={getImageSrc(r.image)} alt="" fluid />
                <Row className="event-room__name mt-2">
                  {isArabic() ? r.name_ar : r.name}
                </Row>
                <Row className="event-hover my-3">{t("hover")}</Row>
                <RoomDescription r={r} />
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
}

export default EventRooms;
