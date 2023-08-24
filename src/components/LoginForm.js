import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { Row } from "react-bootstrap/esm";
import { getToken, setToken } from "../services/userService";
import { FAILED, SUCCESS } from "../services/httpService";
import { Toast } from "./common/Toast";
import { emailPattern } from "../patterns";
import { homePageRoute, registerPageRoute } from "../routes";
import { toggleIsAuth } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom/dist";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    const { email, password } = data;
    if (!password || !email) return Toast("info", t("please fill all fields"));
    if (!emailPattern.test(email)) return Toast("info", t("email validation"));

    const { data: responseData } = await getToken(data);
    if (responseData.AZSVR === SUCCESS) {
      setToken(data.api_token);

      navigate(homePageRoute, { replace: true });
      Toast("success", t("login-message"));
      dispatch(toggleIsAuth(true));
      window.scrollTo(0, 0);
    }
    if (responseData.AZSVR === FAILED)
      return Toast("error", t("invalid email or password"));
  };
  const handleToggleForms = () => {
    navigate(registerPageRoute);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Row className="justify-content-center mb-4">
        <h3>{t("login")}</h3>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <FormElement
            data={data}
            setData={setData}
            value={data.email}
            name="email"
            type="email"
            placeholder={t("email")}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
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
          <FormElement
            element="button"
            label={t("login")}
            onClick={handleLogin}
          />
        </Col>
      </Row>
    </>
  );
}

export default LoginForm;
