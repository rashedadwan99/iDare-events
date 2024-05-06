import React from "react";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import DetailsContainer from "./DetailsContainer";
function Details() {
  const { value: user } = useSelector((state) => state.user);
  if (user.gender && user.gender.name)
    return (
      <>
        <DetailsContainer title="profile-info">
          <ProfileInfo />
        </DetailsContainer>
        <DetailsContainer title="badges"></DetailsContainer>
      </>
    );
}

export default Details;
