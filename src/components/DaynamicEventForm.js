import React from "react";
import { useSelector } from "react-redux";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import FormElement from "./common/FormElement";
import { sortData } from "./utils/sort";

const DaynamicEventForm = memo(function ({ event, data, setData }) {
  const additionalFields = sortData(event.additional_fields, "sort", "asc");
  const isArabic = useSelector((state) => state.language.isArabic);

  return additionalFields.map((a) => {
    return (
      <Col xs={11} sm={11} key={a.id}>
        <Row className="align-items-center mb-2 event-input-text">
          {a.additional_field_type_id === 1 && (
            <FormElement
              placeholder={isArabic ? a.label_ar : a.label}
              data={data}
              setData={setData}
              value={data[a.name] ? data[a.name] : ""}
              name={`${a.name}`}
            />
          )}
          {a.additional_field_type_id === 2 && (
            <FormElement
              element="select"
              defaultOption={isArabic ? a.label_ar : a.label}
              options={a.options}
              path={isArabic ? "name_ar" : "name"}
              name={`${a.name}`}
              data={data}
              setData={setData}
            />
          )}
        </Row>
      </Col>
    );
  });
});
export default DaynamicEventForm;
