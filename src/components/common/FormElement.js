import React from "react";
import { useCallback } from "react";
import { memo } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { element } from "prop-types";
import Input from "./Input";
import CommonButton from "./Button";
import TextArea from "./TextArea";
import SelectMenu from "./SelectMenu";
import DateOfBirthPicker from "./DatePicker";

const FormElement = memo(function ({
  data,
  setData,
  value,
  name,
  type = "text",
  icon,
  element = "input",
  label,
  defaultOption,
  options,
  path,
  path2,
  placeholder,
  max,
  min,
  ...rest
}) {
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      if (typeof data !== "object") return setData(value.trimLeft());
      setData({
        ...data,
        [name]: value.trimLeft(),
      });
    },
    [data, setData]
  );
  if (element === "button") return <CommonButton {...rest} label={label} />;
  else if (element === "textarea")
    return (
      <TextArea
        {...rest}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    );
  else if (element === "select")
    return (
      <SelectMenu
        defaultOption={defaultOption}
        options={options}
        setData={setData}
        data={data}
        name={name}
        path2={path2}
        path={path}
        label={label}
      />
    );
  else if (type === "date") {
    return (
      <DateOfBirthPicker
        type={type}
        onChange={onChange}
        icon={icon}
        label={label}
        value={value}
        data={data}
        setData={setData}
        name={name}
        placeholderText={placeholder}
        max={max}
        min={min}
        {...rest}
      />
    );
  }
  return (
    <Input
      {...rest}
      type={type}
      onChange={onChange}
      icon={icon}
      label={label}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  );
});
if (element !== Button)
  FormElement.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    data: PropTypes.object,
    setData: PropTypes.func,
  };
export default FormElement;
