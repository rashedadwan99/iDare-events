import React from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom/dist";
import "../styles/authpage.css";
function AuthPage() {
  return (
    <>
      <Row className="justify-content-center my-5 ">
        <Col xs={11} sm={10} md={8} lg={5} className="auth-forms py-5">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default AuthPage;
