import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
function Details() {
  const { t } = useTranslation();
  const { value: user } = useSelector((state) => state.user);
  const { isArabic } = useSelector((state) => state.language);
  if (user.gender.name)
    return (
      <Row className="justify-content-center my-4">
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={6}
          className={`details-container py-3${isArabic ? " ar" : ""}`}
          style={isArabic ? { direction: "rtl" } : {}}
        >
          <div className="grid-container">
            <div>
              <span className="data-title">{t("name")}</span>
              <br />
              <span>{user.name}</span>
            </div>
            <div>
              <span className="data-title">{t("email")}</span>
              <br />
              <span>{user.email}</span>
            </div>
            <div>
              <span className="data-title">{t("phone")}</span>
              <br />
              <span>{user.phone}</span>
            </div>
            <div>
              <span className="data-title">{t("gender")}</span>
              <br />
              <span>{isArabic ? user.gender.name_ar : user.gender.name}</span>
            </div>
            <div>
              <span className="data-title">{t("Country")}</span>
              <br />
              <span>{isArabic ? user.country.name_ar : user.country.name}</span>
            </div>
            <div>
              <span className="data-title">{t("City")}</span>
              <br />
              <span>{isArabic ? user.city.name_ar : user.city.name}</span>
            </div>
            <div>
              <span className="data-title">{t("national_number")}</span>
              <br />
              <span>{user.national_number}</span>
            </div>
          </div>
        </Col>
      </Row>
    );
}

export default Details;