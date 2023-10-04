import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import { useTranslation } from "react-i18next";
import RoomDescription from "./RoomDescription";
import EventSectionContainer from "./common/EventSectionContainer";
import { useSelector } from "react-redux";
import AosContainer from "./common/Aos";

function EventRooms({ event, isInActiveSection }) {
  const { t } = useTranslation();
  const isArabic = useSelector((state) => state.language.isArabic);
  if (!isInActiveSection(event.rooms))
    return (
      <EventSectionContainer name="rooms">
        <Row className="justify-content-center mb-3">
          {[...event.rooms].map((r) => {
            if (r.active)
              return (
                <Col
                  xs={11}
                  sm={11}
                  md={5}
                  lg={4}
                  className="m-3 py-1"
                  key={r.id}
                >
                  <AosContainer
                    animation_name_scroll_down="zoom-in"
                    animation_name_scroll_up="zoom-out"
                  >
                    <Row className="justify-content-center align-items-center">
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        className="event-room p-5"
                      >
                        <Image
                          src={getImageSrc(r.image)}
                          alt=""
                          fluid
                          loading="lazy"
                        />
                        <Row className="event-room__name mt-2">
                          {isArabic ? r.name_ar : r.name}
                        </Row>
                        <Row className="event-hover my-3">{t("hover")}</Row>
                        <RoomDescription r={r} />
                      </Col>
                    </Row>
                  </AosContainer>
                </Col>
              );
            return <></>;
          })}
        </Row>
      </EventSectionContainer>
    );
}

export default EventRooms;
