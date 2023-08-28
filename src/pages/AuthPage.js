import React from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom/dist";
import "../styles/authpage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AuthPage() {
  return (
    <>
      <Header />
      <Row className="justify-content-center my-5 ">
        <Col xs={11} sm={10} md={8} lg={5} className="auth-forms py-5">
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default AuthPage;
