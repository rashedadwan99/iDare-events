import React, { useEffect } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import EventFirstSection from "../components/EventFirstSection";
import EventIntro from "../components/EventIntro";
import { Col, Row } from "react-bootstrap";
import { isArabic } from "../locales/language";
import EventOrganizers from "../components/EventOrganizers";
import EventRooms from "../components/EventRooms";
import EventSponsors from "../components/EventSponsors";
import EventFooter from "../components/EventFooter";
import "../styles/single-event-page.css";
function SingleEventPage() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));

  const isSwitched = useSelector((state) => state.language.isSwitched);
  useEffect(() => {}, [isSwitched]);
  const isInActiveSection = (dataSection) => {
    const inActiveArray = dataSection.filter((o) => o.active === "0");
    const isAllinActivated = dataSection.length === inActiveArray.length;
    return isAllinActivated;
  };
  return (
    <Row className={`event-page ${isArabic() ? "arabic" : ""}`}>
      <Col sm={12} lg={12}>
        <EventFirstSection event={event} />
      </Col>
      <Col sm={12} lg={12}>
        <EventIntro event={event} />
      </Col>
      <Col sm={12} lg={12}>
        <EventOrganizers event={event} isInActiveSection={isInActiveSection} />
      </Col>
      <Col sm={12} lg={12}>
        <EventRooms event={event} isInActiveSection={isInActiveSection} />
      </Col>
      <Col sm={12} lg={12}>
        <EventSponsors event={event} />
      </Col>
      <Col sm={12} lg={12}>
        <EventFooter />
      </Col>
    </Row>
  );
}

export default SingleEventPage;
