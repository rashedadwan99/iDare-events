import moment from "moment";
import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const DateOfBirthPicker = ({
  placeholderText,
  data,
  setData,
  name,
  icon,
  max,
  min,
  label,
}) => {
  const handleDateChange = (date) => {
    moment.locale("en");
    const formattedDate = moment(date).format("yyyy-MM-DD");

    setData({ ...data, [name]: formattedDate });
  };

  const adjustedMinDate = min ? new Date(min) : null;
  if (adjustedMinDate) {
    adjustedMinDate.setDate(adjustedMinDate.getDate() + 1);
  }

  const adjustedMaxDate = max ? new Date(max) : null;
  if (adjustedMaxDate) {
    adjustedMaxDate.setDate(adjustedMaxDate.getDate() - 1);
  }

  const { isArabic } = useSelector((state) => state.language);

  const handleKeyDown = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {label && (
        <Form.Label
          style={isArabic ? { textAlign: "right", width: "100%" } : {}}
        >
          {label}
        </Form.Label>
      )}
      <div
        className="date-picker-container"
        style={isArabic ? { direction: "rtl", textAlign: "right" } : {}}
      >
        <span className="date-picker-icon">{icon}</span>

        <DatePicker
          selected={data[name]}
          onChange={handleDateChange}
          timeFormat="yyyy-MM-dd"
          dateFormat="yyyy-MM-dd"
          placeholderText={placeholderText}
          maxDate={!max ? null : adjustedMaxDate}
          minDate={!min ? null : adjustedMinDate}
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          onKeyDown={handleKeyDown} // Prevent typing
        />
      </div>
    </>
  );
};

export default DateOfBirthPicker;
