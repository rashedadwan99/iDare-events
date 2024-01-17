import React, { useEffect, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCountries } from "../services/countriesService";
import { FAILED, SUCCESS } from "../services/httpService";
import { Form, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import FormElement from "./common/FormElement";
import { genderOptions } from "./data/genders";
import { registerUser, setToken } from "../services/userService";
import { Toast } from "./common/Toast";
import { emailPattern, isNumber } from "../patterns";
import { useLocation, useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { loginPageRoute } from "../routes";
import { toggleIsAuth } from "../redux/actions/userActions";
import CommonButton from "./common/Button";
import { getCities } from "../services/citiesService";
import { scrollToTop } from "./utils/scrollToTop";

const RegisterForm = memo(function () {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [Countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    national_number: "",
    password: "",
    gender_id: "",
    country_id: "",
    city_id: "",
    allergies: "",
    disability: "",
    is_disabled: "",
  });
  const isArabic = useSelector((state) => state.language.isArabic);
  useEffect(() => {
    const getCountriesAndCitiesHandler = async () => {
      const { data: countiesData } = await getCountries();
      if (countiesData.AZSVR === SUCCESS) setCountries(countiesData.Countries);
      else {
        Toast("error", t("error_occoured"));
      }
      const { data: citiesData } = await getCities();
      if (citiesData.AZSVR === SUCCESS) setCities(citiesData.Cities);
      else {
        Toast("error", t("error_occoured"));
      }
    };
    getCountriesAndCitiesHandler();
  }, [t]);
  const isSwitched = useSelector((state) => state.language.isSwitched);
  const location = useLocation();
  useEffect(() => {
    setData({
      email: "",
      name: "",
      phone: "",
      password: "",
      gender_id: "",
      national_number: "",
      country_id: "",
      city_id: "",
      allergies: "",
      disability: "",
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
      national_number,
      country_id,
      city_id,
    } = data;
    if (
      !name ||
      !phone ||
      !password ||
      !gender_id ||
      !national_number ||
      !country_id ||
      !email ||
      !city_id
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
      setIsLoading(true);
      Toast("success", t("account_created"));
      dispatch(toggleIsAuth(!isAuth));
      scrollToTop();
    }
    if (responseData.AZSVR === FAILED) {
      setIsLoading(false);
      Toast("error", t("user_exists"));
    }
  };
  const handleToggleForms = () => {
    navigate(loginPageRoute, { state: location.state });
    scrollToTop();
  };

  return (
    <Col>
      <Row className="justify-content-center mb-4">
        <h3>{t("register")}</h3>
      </Row>
      <Form>
        <Row className="justify-content-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={data.name}
            name="name"
            placeholder={t("name")}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={data.email}
            name="email"
            placeholder={t("email")}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={data.password}
            name="password"
            type="password"
            placeholder={t("password")}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={data.phone}
            name="phone"
            type="tel"
            placeholder={t("phone")}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={data.national_number}
            name="national_number"
            type="tel"
            placeholder={t("national_number")}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <FormElement
            name="allergies"
            value={data.allergies}
            placeholder={t("Medical_allergy")}
            data={data}
            setData={setData}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <FormElement
            name="disability"
            value={data.disability}
            placeholder={t("sepcial_needs")}
            data={data}
            setData={setData}
          />
        </Row>
        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              name="country_id"
              defaultOption={t("Country")}
              options={Countries}
              data={data}
              setData={setData}
              path={isArabic ? "name_ar" : "name"}
              element="select"
            />
          </Col>
        </Row>

        <Row className="justify-content-center mb-2">
          <Col>
            <FormElement
              name="city_id"
              defaultOption={t("City")}
              options={cities}
              data={data}
              setData={setData}
              path={isArabic ? "name_ar" : "name"}
              element="select"
            />
          </Col>
          <Col>
            <FormElement
              name="gender_id"
              defaultOption={t("gender")}
              options={genderOptions(t)}
              data={data}
              setData={setData}
              path="name"
              element="select"
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <span onClick={handleToggleForms} className="toggle-forms-message">
            {t("have-account")}
          </span>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col>
            <CommonButton
              element="button"
              label={t("register")}
              onClick={handleRegister}
              disabled={isLoading}
            />
          </Col>
        </Row>
      </Form>
    </Col>
  );
});
export default RegisterForm;
