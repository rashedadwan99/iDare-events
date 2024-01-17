import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import Header from "../components/Header";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { GetEventMedia } from "../redux/actions/eventActions";
import { sortData } from "../components/utils/sort";
import DomParser from "../components/common/DomParser";
import { Col } from "react-bootstrap";
const EventPage = memo(function () {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedVideos = sortData(event.you_tube_videos, "id", "desc");
  const sortedImages = sortData(event.gallery_images, "sort", "asc");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      GetEventMedia({
        images: sortedImages,
        videos: sortedVideos.map((v) => {
          return (
            <Col key={v.id} xs={11} sm={11} md={8} lg={5}>
              <DomParser htmlResponse={v.embed_code} />
            </Col>
          );
        }),
      })
    );
    if (event) {
      const eventFontLink = event.google_fonts_link;
      const eventFontCode = event.google_fonts_code;
      const container = document.createElement("div");
      const style = document.createElement("style");
      if (eventFontLink && eventFontCode) {
        container.innerHTML = eventFontLink;
        style.innerHTML = `.App{
          ${eventFontCode}
        }`;
        document.head.appendChild(container);
        document.head.appendChild(style);
      }

      return () => {
        container.innerHTML = "";
        style.innerHTML = "";
        if (eventFontLink && eventFontCode) {
          document.head.removeChild(container);
          document.head.removeChild(style);
        }
        dispatch(
          GetEventMedia({
            images: [],
            videos: [],
          })
        );
      };
    }
  }, [event]);

  if (event && event.id && event.active)
    return (
      <>
        <Header />

        <EventBody event={event} />
        <FloatingButton event={event} />
      </>
    );
  return <NotFound />;
});

export default EventPage;
