import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { eventPageRoute, homePageRoute } from "../routes";
import { getImageSrc } from "../services/imageServices";
import { smoothScrolling } from "../components/utils/smoothScrolling";
import logo from "../images/logo.jpg";
function Logo({ ...rest }) {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const [event, setEvent] = useState(null);
  useEffect(() => {
    if (id) setEvent(allEvents.find((e) => e.id === parseInt(id)));
  }, [id, allEvents]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(event ? eventPageRoute + `/${event.id}` : homePageRoute);
    smoothScrolling();
  };
  return (
    <Image
      fluid
      {...rest}
      alt="logo"
      loading="lazy"
      src={event ? getImageSrc(event && event.image) : logo}
      onClick={handleNavigate}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Logo;
