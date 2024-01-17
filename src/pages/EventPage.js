import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import Header from "../components/Header";
import NotFound from "./NotFound";
import { fontCode, fontLink } from "../styles/eventStyles";
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
    if (event) {
      const style = document.createElement("style");
      const eventFontLink = event.google_fonts_link ?? fontLink;

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

      const container = document.createElement("div");
      container.innerHTML = eventFontLink;

      if (eventFontLink) {
        document.head.appendChild(container);
        document.head.appendChild(style);
        window.removeEventListener("touchstart", {
          passive: true,
        });
      }

      return () => {
        container.innerHTML = "";
        if (eventFontLink) {
          document.head.removeChild(container);
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

  if (event && event.id)
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
