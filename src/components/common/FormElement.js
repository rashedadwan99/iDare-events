import React from "react";
import PropTypes, { element } from "prop-types";
import Input from "./Input";
import CommonButton from "./Button";
import TextArea from "./TextArea";
import { Button } from "react-bootstrap";
import SelectMenu from "./SelectMenu";
import "../../styles/form.css";
import { language } from "../../locales/language";

function FormElement({
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
  placeholderText,
  path,
  ...rest
}) {
  const onChange = (e) => {
    const { name, value } = e.target;

    if (typeof data !== "object") return setData(value.trimLeft());
    setData({
      ...data,
      [name]: value.trimLeft(),
    });
  };
  if (element === "button") return <CommonButton {...rest} label={label} />;
  else if (element === "textarea")
    return <TextArea {...rest} onChange={onChange} name={name} />;
  else if (element === "select")
    return (
      <SelectMenu
        defaultOption={defaultOption}
        options={options}
        setData={setData}
        data={data}
        name={name}
        path={path}
      />
    );

  return (
    <Input
      {...rest}
      type={type}
      onChange={onChange}
      icon={icon}
      label={label}
      value={value}
      name={name}
    />
  );
}
if (element !== Button)
  FormElement.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    data: PropTypes.object,
    setData: PropTypes.func,
  };
export default FormElement;
