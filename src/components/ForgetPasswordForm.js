import React, { useState } from "react";
import { memo } from "react";
import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { Row } from "react-bootstrap/esm";
import CommonButton from "./common/Button";
import { Toast } from "./common/Toast";

const ForgetPasswordForm = memo(function () {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const [data, setData] = useState({
    phone: "",
    national_number: "",
  });
  const { phone, national_number } = data;
  const handleCheckInfo = () => {
    if (!phone || !national_number) return Toast("info", t("fill_all"));
  };
  return (
    <>
      <Row className="justify-content-center mb-4">
        <h3>{t("change_password_form")}</h3>
      </Row>
      <Form>
        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              data={data}
              setData={setData}
              value={national_number}
              name="national_number"
              placeholder={t("national_number")}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              data={data}
              setData={setData}
              value={phone}
              name="phone"
              type="phone"
              placeholder={t("phone")}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col></Col>
        </Row>
      </Form>
    </>
  );
});
export default ForgetPasswordForm;
