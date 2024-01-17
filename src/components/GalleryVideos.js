import { useSelector } from "react-redux";

function GalleryVideos() {
  const videos = useSelector((state) => state.events.eventMedia.videos);
  console.log(videos);
  return videos.map((v) => v);
}

export default GalleryVideos;
