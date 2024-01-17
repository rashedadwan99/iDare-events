import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import DomParser from "./common/DomParser";

function GalleryVideos() {
  const videos = useSelector((state) => state.events.eventMedia.videos);
  return videos.map((v) => {
    return (
      <Col key={v.id} xs={11} sm={11} md={8} lg={5}>
        <DomParser htmlResponse={v.embed_code} />
      </Col>
    );
  });
}

export default GalleryVideos;
