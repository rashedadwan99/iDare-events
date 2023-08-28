import React from "react";
import HomeLandingPage from "../components/HomeLandingPage";
import HomeEvents from "../components/HomeEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home-page.css";
function HomePage() {
  return (
    <>
      <Header />
      <HomeLandingPage />
      <HomeEvents />
      <Footer />
    </>
  );
}

export default HomePage;
