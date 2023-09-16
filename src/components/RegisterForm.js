import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SelectMenu from "./common/SelectMenu";
import { getCountries } from "../services/countriesService";
import { FAILED, SUCCESS } from "../services/httpService";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import FormElement from "./common/FormElement";
import { genderOptions } from "./data/genders";
import { yesOrNo } from "./data/yesAndNoOptions";
import { registerUser, setToken } from "../services/userService";
import { Toast } from "./common/Toast";
import { emailPattern, isNumber } from "../patterns";
import { useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { homePageRoute, loginPageRoute } from "../routes";
import { toggleIsAuth } from "../redux/actions/userActions";

function RegisterForm() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    gender_id: "",
    is_refugee: "",
    national_number: "",
    country_id: "",
    is_disabled: "",
  });
  useEffect(() => {
    const getCountriesHandler = async () => {
      const { data } = await getCountries();
      if (data.AZSVR === SUCCESS) setOptions(data.Countries);
    };
    getCountriesHandler();
  }, []);
  const isSwitched = useSelector((state) => state.language.isSwitched);

  useEffect(() => {
    setData({
      email: "",
      name: "",
      phone: "",
      password: "",
      gender_id: "",
      is_refugee: "",
      national_number: "",
      country_id: "",
      is_disabled: "",
    });
  }, [isSwitched]);
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async () => {
    const {
      email,
      name,
      phone,
      password,
      gender_id,
      is_refugee,
      national_number,
      country_id,
      is_disabled,
    } = data;
    if (
      !name ||
      !phone ||
      !password ||
      !gender_id ||
      !is_refugee ||
      !national_number ||
      !country_id ||
      !is_disabled ||
      !email
    )
      return Toast("info", t("fill_all"));

    if (password.length < 8) return Toast("info", t("password length"));
    if (!emailPattern.test(email)) return Toast("info", t("email validation"));
    if (!isNumber.test(phone) || !isNumber.test(national_number))
      return Toast("info", t("number validation"));
    setIsLoading(!isLoading);

    const { data: responseData } = await registerUser(data);
    if (responseData.AZSVR === SUCCESS) {
      setToken(responseData.api_token);
      setIsLoading(!isLoading);

      Toast("success", t("account_created"));
      dispatch(toggleIsAuth(!isAuth));
      navigate(homePageRoute, { replace: true });

      window.scrollTo(0, 0);
    }
    if (responseData.AZSVR === FAILED) {
      setIsLoading(!isLoading);

      Toast("error", t("user_exists"));
    }
  };
  const handleToggleForms = () => {
    navigate(loginPageRoute);
    window.scrollTo(0, 0);
  };
  return (
    <Col>
      <Row className="justify-content-center mb-4">
        <h3>{t("register")}</h3>
      </Row>
      <Row className="justify-content-center mb-2">
        <Col>
          <FormElement
            data={data}
            setData={setData}
            value={data.name}
            name="name"
            placeholder={t("name")}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
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
      <Row className="justify-content-center mb-2">
        <Col>
          <FormElement
            data={data}
            setData={setData}
            value={data.phone}
            name="phone"
            type="tel"
            placeholder={t("phone")}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
        <Col>
          <FormElement
            data={data}
            setData={setData}
            value={data.national_number}
            name="national_number"
            type="tel"
            placeholder={t("national_number")}
          />
        </Col>
      </Row>

      <Row className="justify-content-center mb-2">
        <Col>
          <SelectMenu
            name="country_id"
            defaultOption={() => t("Country")}
            options={options}
            data={data}
            setData={setData}
            path="name"
          />
        </Col>
        <Col>
          <SelectMenu
            name="gender_id"
            defaultOption={() => t("gender")}
            options={genderOptions(t)}
            data={data}
            setData={setData}
            path="name"
          />
        </Col>
      </Row>

      <Row className="justify-content-center mb-2">
        <Col>
          <SelectMenu
            name="is_refugee"
            defaultOption={() => t("are you a refugee")}
            options={yesOrNo(t)}
            data={data}
            setData={setData}
            path="name"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
        <Col>
          <SelectMenu
            name="is_disabled"
            defaultOption={() => t("do you have a disability")}
            options={yesOrNo(t)}
            data={data}
            setData={setData}
            path="name"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col>
          <span onClick={handleToggleForms} className="toggle-forms-message">
            {t("have-account")}
          </span>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col>
          <FormElement
            element="button"
            label={t("register")}
            onClick={handleRegister}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default RegisterForm;
