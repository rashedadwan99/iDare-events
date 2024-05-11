import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getImageSrc } from "../../services/imageServices";
import { useTranslation } from "react-i18next";
function Badges() {
  const { badges } = useSelector((state) => state.user);
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center">
      <Col>
        <div className="badges-container">
          {badges.length ? (
            badges.map((b) => {
              return (
                <Image src={getImageSrc(b.image)} className="m-3" key={b.id} />
              );
            })
          ) : (
            <p>{t("no-badges")}</p>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Badges;
