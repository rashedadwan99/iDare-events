import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormElement from "../common/FormElement";
import { useTranslation } from "react-i18next";
import { Toast } from "../common/Toast";
import { SUCCESS } from "../../services/httpService";
import { getCountries } from "../../services/countriesService";
import { getCities } from "../../services/citiesService";
import { genderOptions } from "../data/genders";

function EditForm() {
  const { isArabic } = useSelector((state) => state.language);
  const { value } = useSelector((state) => state.user);
  const [Countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({
    email: value.email,
    name: value.name,
    phone: value.phone,
    national_number: value.national_number,
    password: "",
    gender_id: value.gender_id,
    country_id: value.country_id,
    city_id: value.city_id,
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
  return (
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
                  isArabic ? value.country.name_ar : value.country.name
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
                name="city_id"
                defaultOption={isArabic ? value.city.name_ar : value.city.name}
                options={cities}
                data={data}
                setData={setData}
                path={isArabic ? "name_ar" : "name"}
                element="select"
                label={t("City")}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col xs={11} sm={11} md={10}>
              <FormElement
                defaultOption={
                  isArabic ? value.gender.name_ar : value.gender.name
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
        </Form>
      </Col>
    </Row>
  );
}

export default EditForm;
