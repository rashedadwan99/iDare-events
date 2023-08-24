import React from "react";
import HomeLandingPage from "../components/HomeLandingPage";
import HomeEvents from "../components/HomeEvents";
import "../styles/home-page.css";
function HomePage() {
  return (
    <>
      <HomeLandingPage />
      <HomeEvents />
    </>
  );
}

export default HomePage;
