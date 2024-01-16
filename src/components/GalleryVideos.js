import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sortData } from "./utils/sort";
import DomParser from "./common/DomParser";
import { Col } from "react-bootstrap";

function GalleryVideos() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedVideos = sortData(event.you_tube_videos, "id", "desc");

  return sortedVideos.map((v) => {
    return (
      <Col key={v.id} xs={11} sm={11} md={8} lg={5}>
        <DomParser htmlResponse={v.embed_code} />
      </Col>
    );
  });
}

export default GalleryVideos;
