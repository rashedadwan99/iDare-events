import React, { useState } from "react";
import { memo } from "react";
import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { Row } from "react-bootstrap/esm";
import { getToken, setToken } from "../services/userService";
import { FAILED, SUCCESS } from "../services/httpService";
import { Toast } from "./common/Toast";
import { emailPattern } from "../patterns";
import { registerPageRoute } from "../routes";
import { toggleIsAuth } from "../redux/actions/userActions";
import { useLocation, useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "./common/Button";
import { scrollToTop } from "./utils/scrollToTop";

const LoginForm = memo(function () {
  const isAuth = useSelector((state) => state.user.isAuth);
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    const { email, password } = data;
    if (!password || !email) return Toast("info", t("fill_all"));
    if (!emailPattern.test(email)) return Toast("info", t("email validation"));
    setIsLoading(!isLoading);

    const { data: responseData } = await getToken(data);
    if (responseData.AZSVR === SUCCESS) {
      setToken(responseData.api_token);

      setIsLoading(true);
      dispatch(toggleIsAuth(!isAuth));

      scrollToTop();
      Toast("success", t("login-message"));
    }
    if (responseData.AZSVR === FAILED) {
      setIsLoading(false);

      return Toast("error", t("invalid_email_password"));
    }
  };
  const handleToggleForms = () => {
    navigate(registerPageRoute, { state: location.state });
    scrollToTop();
  };
  return (
    <>
      <Row className="justify-content-center mb-4">
        <h3>{t("login")}</h3>
      </Row>
      <Form>
        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              data={data}
              setData={setData}
              value={data.email}
              name="email"
              placeholder={t("email")}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              data={data}
              setData={setData}
              value={data.password}
              name="password"
              type="password"
              placeholder={t("password")}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col>
            <span onClick={handleToggleForms} className="toggle-forms-message">
              {t("dont-have-account")}
            </span>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col>
            <CommonButton
              element="button"
              label={t("login")}
              onClick={handleLogin}
              disabled={isLoading}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
});
export default LoginForm;
