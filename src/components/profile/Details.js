import React from "react";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import DetailsContainer from "./DetailsContainer";
import Badges from "./Badges";
import PImage from "./PImage";
function Details() {
  const { value: user } = useSelector((state) => state.user);
  if (user.gender && user.gender.name)
    return (
      <>
        <PImage />
        <DetailsContainer title="profile-info">
          <ProfileInfo />
        </DetailsContainer>
        <DetailsContainer title="badges">
          <Badges />
        </DetailsContainer>
      </>
    );
}

export default Details;
