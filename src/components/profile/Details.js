import React from "react";
import ProfileInfo from "./ProfileInfo";
import DetailsContainer from "./DetailsContainer";
import Badges from "./Badges";
import PImage from "./PImage";
function Details() {
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
