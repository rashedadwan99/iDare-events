import React, { useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { loginPageRoute } from "../routes";
import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { Row } from "react-bootstrap/esm";
import CommonButton from "./common/Button";
import { Toast } from "./common/Toast";
import { FAILED, SUCCESS } from "../services/httpService";
import { resetPassword } from "../services/userService";
import { scrollToTop } from "./utils/scrollToTop";
const ForgetPasswordForm = memo(function () {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    phone: "",
    national_number: "",
    new_password: "",
  });
  const { phone, national_number, new_password } = data;
  const handleSavePassword = async () => {
    if (!phone || !national_number || !new_password)
      return Toast("info", t("fill_all"));
    if (new_password.length < 8) return Toast("info", t("new_password length"));
    setIsLoading(true);

    const { data: responseData } = await resetPassword(data);
    if (responseData.AZSVR === SUCCESS) {
      Toast("success", t("password_is_updated"));
      setIsLoading(false);

      scrollToTop();
      navigate(loginPageRoute);
    }
    if (responseData.AZSVR === FAILED) {
      setIsLoading(false);
      Toast("error", t("password_isn't_updated"));
    }
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
        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              data={data}
              setData={setData}
              value={new_password}
              name="new_password"
              type="password"
              placeholder={t("new_password")}
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center mt-3">
          <Col xs={6} sm={6}>
            <span
              className="back-btn"
              onClick={() => navigate(loginPageRoute)}
              aria-disabled={isLoading}
            >
              {t("back")}
            </span>
          </Col>
          <Col xs={6} sm={6}>
            <CommonButton
              label={t("save")}
              onClick={handleSavePassword}
              disabled={isLoading}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
});
export default ForgetPasswordForm;
