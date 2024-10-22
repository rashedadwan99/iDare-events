import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormElement from "../common/FormElement";
import { useTranslation } from "react-i18next";
import { Toast } from "../common/Toast";
import { SUCCESS } from "../../services/httpService";
import { getCountries } from "../../services/countriesService";
import { getCities } from "../../services/citiesService";
import { genderOptions } from "../data/genders";
import CommonButton from "../common/Button";
import { setToken, updateProfile } from "../../services/userService";
import { getProfileAction } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { profileRoute } from "../../routes";

function EditForm() {
  const { isArabic } = useSelector((state) => state.language);
  const [isSending, setIsSending] = useState(false);
  const { value } = useSelector((state) => state.user);
  const [Countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({
    name: value.name,
    phone: value.phone,
    national_number: value.national_number,
    password: "",
    gender_id: value.gender_id,
    country_id: value.country_id,
    city_id: value.city_id,
    birthdate: value.birthdate,
  });
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
  }, []);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(profileRoute);
    window.scrollTo(0, 0);
  };
  const handleSave = async () => {
    let isValidPass = true;
    const {
      name,
      phone,
      password,
      gender_id,
      national_number,
      country_id,
      city_id,
      birthdate,
    } = data;
    if (
      !name ||
      !phone ||
      !gender_id ||
      !national_number ||
      !country_id ||
      !city_id ||
      !birthdate
    )
      return Toast("info", t("fill_all"));
    else {
      if (password.length <= 7 && password.length > 0) {
        isValidPass = false;
        return Toast("info", t("password length"));
      } else isValidPass = true;
      if (isValidPass) {
        try {
          const { password, ...otherData } = data;
          setIsSending(true);
          const { data: updatedData } = await updateProfile(
            password.length ? data : otherData
          );
          if (updatedData.AZSVR === SUCCESS) {
            setToken(updatedData.api_token);
            dispatch(getProfileAction());
            Toast("info", t("profile-updated"));
            setIsSending(false);
            handleNavigate();
          } else {
            Toast("error", t("error_occoured"));
            setIsSending(false);
          }
        } catch (error) {
          Toast("error", t("error_occoured"));
          setIsSending(false);
        }
      }
    }
  };

  return (
    <>
      <Row className="justify-content-center mt-4">
        <h3 className="sec-title">{t("profile-edit")}</h3>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs={11} sm={10} md={6} lg={4}>
          <Form className="edit-form">
            <Row className="justify-content-center my-2">
              <Col xs={11} sm={11}>
                <FormElement
                  data={data}
                  setData={setData}
                  value={data.name}
                  name="name"
                  label={t("name")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center my-2">
              <Col xs={11} sm={11}>
                <FormElement
                  data={data}
                  type="date"
                  setData={setData}
                  value={data.birthdate}
                  label={t("birthdate")}
                  name="birthdate"
                  max={new Date()}
                />
              </Col>
            </Row>

            <Row className="justify-content-center my-2">
              <Col xs={11} sm={11}>
                <FormElement
                  data={data}
                  setData={setData}
                  value={data.phone}
                  name="phone"
                  label={t("phone")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center my-2">
              <Col xs={11} sm={11}>
                <FormElement
                  data={data}
                  setData={setData}
                  value={data.national_number}
                  name="national_number"
                  label={t("national_number")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={11} sm={11} md={5}>
                <FormElement
                  name="country_id"
                  defaultOption={
                    isArabic
                      ? value.country && value.country.name_ar
                      : value.country && value.country.name
                  }
                  options={Countries}
                  data={data}
                  setData={setData}
                  path={isArabic ? "name_ar" : "name"}
                  element="select"
                  label={t("Country")}
                />
              </Col>
              <Col xs={11} sm={11} md={5}>
                <FormElement
                  defaultOption={
                    isArabic
                      ? value.gender && value.gender.name_ar
                      : value.gender && value.gender.name
                  }
                  label={t("gender")}
                  name="gender_id"
                  options={genderOptions(t)}
                  data={data}
                  setData={setData}
                  path="name"
                  element="select"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={11} sm={11} md={10}>
                <FormElement
                  name="city_id"
                  defaultOption={
                    isArabic
                      ? value.city && value.city.name_ar
                      : value.city && value.city.name
                  }
                  options={cities}
                  data={data}
                  setData={setData}
                  path={isArabic ? "name_ar" : "name"}
                  element="select"
                  label={t("City")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col xs={11} sm={11} md={10}>
                <FormElement
                  data={data}
                  setData={setData}
                  value={data.password}
                  name="password"
                  type="password"
                  label={t("password-change")}
                  placeholder={t("password")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col xs={11} sm={10}>
                <CommonButton
                  element="button"
                  label={t("save")}
                  onClick={handleSave}
                  disabled={isSending}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col xs={11} sm={10}>
                <CommonButton
                  element="button"
                  label={t("back")}
                  variant="danger"
                  onClick={handleNavigate}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default EditForm;
