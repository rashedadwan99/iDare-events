import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import Canvas from "./common/Canvas";
import BurgerMenu from "./BurgerMenu";

function RightHeaderSide() {
  const [toggleOpenCanvas, setToggle] = useState(false);
  return (
    <Col xs={6} sm={6} md={6}>
      <Row className="justify-content-end px-2 align-items-center">
        <LanguageSwitcher />
        <Canvas
          toggleCanvas={toggleOpenCanvas}
          bodyComponent={
            <BurgerMenu
              handleCloseCanvas={() => setToggle(!toggleOpenCanvas)}
            />
          }
        >
          <RxHamburgerMenu style={{ fontSize: "20px" }} />
        </Canvas>
      </Row>
    </Col>
  );
}

export default RightHeaderSide;
