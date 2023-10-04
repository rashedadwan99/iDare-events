import React from "react";
import { memo } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom/dist";
import Footer from "../components/Footer";
const AuthPage = memo(function () {
  return (
    <>
      <Row className="justify-content-center my-5 ">
        <Col xs={11} sm={10} md={8} lg={5} className="auth-forms py-5">
          <Outlet />
        </Col>
        <Footer />
      </Row>
    </>
  );
});

export default AuthPage;
