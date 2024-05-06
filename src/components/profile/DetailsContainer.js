import React from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function DetailsContainer({ children, title }) {
  const { t } = useTranslation();

  return (
    <>
      <Row className="justify-content-center my-4">
        <h3 className="sec-title">{t(title)}</h3>
      </Row>
      {children}
    </>
  );
}

export default DetailsContainer;
