import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import CommonButton from "./common/Button";
import StaticEventForm from "./StaticEventForm";
import DaynamicEventForm from "./DaynamicEventForm";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../styles/eventStyles";
import { Toast } from "./common/Toast";
import { registerEvent } from "../services/eventsService";
import { SUCCESS } from "../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { getMyEventsAction } from "../redux/actions/eventActions";
import { toggleOpenModal } from "../redux/actions/modalAction";
const EventForm = memo(function ({ event }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [staticData, setStaticData] = useState({
    event_id: event.id,
    ticket_type_id: "",
  });
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [daynamicData, setDaynamicData] = useState({});
  useEffect(() => {
    let obj = {};
    event.additional_fields.map((f) => {
      const { name } = f;
      return (obj = { ...obj, [name]: "" });
    });
    setDaynamicData(obj);
  }, [event.additional_fields]);
  console.log(daynamicData);
  const handleSubmit = async () => {
    if (!staticData.ticket_type_id) {
      return Toast("info", t("fill_required"));
    }
    const allAdditionalRequired = event.additional_fields.filter(
      (a) => a.required === 1
    );
    if (allAdditionalRequired.length) {
      for (const key in daynamicData) {
        const field = event.additional_fields.find((a) => a.name === key);

        if (
          key === field.name &&
          !daynamicData[key].length &&
          allAdditionalRequired.includes(field)
        ) {
          return Toast("info", t("fill_required"));
        }
      }
    }
    const allData = { ...staticData, ...daynamicData };
    setIsSendingRequest(true);
    const { data } = await registerEvent(allData);
    if (data.AZSVR === SUCCESS) {
      setIsSendingRequest(false);
      dispatch(getMyEventsAction());
      dispatch(toggleOpenModal());
      return Toast("info", t("event-register"));
    } else {
      setIsSendingRequest(false);
      return Toast("error", t("event-register-failed"));
    }
  };
  const isArabic = useSelector((state) => state.language.isArabic);
  return (
    <Row
      className={`justify-content-center event-form ${isArabic ? "ar" : ""}`}
    >
      <StaticEventForm
        event={event}
        data={staticData}
        setData={setStaticData}
      />

      <DaynamicEventForm
        event={event}
        setData={setDaynamicData}
        data={daynamicData}
      />

      <Col xs={11} sm={11}>
        <Row>
          <CommonButton
            primaryStyle={handlePrimaryButtonStyle(event)}
            primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
            label={t("register-event")}
            onClick={handleSubmit}
            disabled={isSendingRequest}
          />
        </Row>
      </Col>
    </Row>
  );
});
export default EventForm;
