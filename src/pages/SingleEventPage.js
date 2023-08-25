import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import EventFirstSection from "../components/EventFirstSection";
import EventIntro from "../components/EventIntro";
import { Col, Row } from "react-bootstrap";
import { isArabic, language } from "../locales/language";
import EventSectionContainer from "../components/common/EventSectionContainer";
import EventOrganizers from "../components/EventOrganizers";
import EventRooms from "../components/EventRooms";
import { storageBaseURL } from "../services/httpService";
import EventSponsors from "../components/EventSponsors";
import "../styles/single-event-page.css";
function SingleEventPage() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const isLoading = useSelector((state) => state.events.isLoading);

  const isSwitched = useSelector((state) => state.language.isSwitched);
  useEffect(() => {}, [isSwitched]);

  const handleBackgroundStyle = (image) => {
    return {
      backgroundImage: `url(${storageBaseURL + image})`,
      bacgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  };
  const event = allEvents.find((e) => e.id === parseInt(id));
  const handlePrimaryButtonStyle = () => {
    return {
      backgroundColor: event.primary_button_background_color,
      color: event.primary_button_text_color,
      border: `1px solid ${event.primary_button_background_color}`,
    };
  };
  const handlePrimaryButtonStyleWhenHover = () => {
    return {
      backgroundColor: event.primary_button_background_color_2,
      color: event.primary_button_text_color,
      border: `1px solid ${event.primary_button_background_color_2}`,
    };
  };
  if (!isLoading)
    return (
      <Row className={`event-page ${isArabic() ? "arabic" : ""}`}>
        <Col sm={12} lg={12}>
          <EventFirstSection
            event={event}
            handleBackgroundStyle={handleBackgroundStyle}
          />
        </Col>
        <Col sm={12} lg={12}>
          <EventSectionContainer name="about-event">
            <EventIntro
              event={event}
              {...{
                handlePrimaryButtonStyle,
                handlePrimaryButtonStyleWhenHover,
              }}
            />
          </EventSectionContainer>
        </Col>
        <Col sm={12} lg={12}>
          <EventSectionContainer name="organizers">
            <EventOrganizers
              handleBackgroundStyle={handleBackgroundStyle}
              event={event}
            />
          </EventSectionContainer>
        </Col>
        <Col sm={12} lg={12}>
          <EventSectionContainer name="rooms">
            <EventRooms event={event} />
          </EventSectionContainer>
        </Col>
        <Col sm={12} lg={12}>
          <EventSectionContainer name="cooperation">
            <EventSponsors event={event} />
          </EventSectionContainer>
        </Col>
      </Row>
    );
  else return "loading...";
}

export default SingleEventPage;
