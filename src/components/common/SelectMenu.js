import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useResolvedPath } from "react-router-dom";
import ClickOutsideAlerter from "./ClickOutSideAlerter";
import { en, language } from "../../locales/language";
import "../../styles/selectmenu.css";
const SelectMenu = ({
  defaultOption: title,
  options,
  setData,
  data,
  name,
  path,
}) => {
  const [defaultOption, setDefaultOption] = useState();
  useEffect(() => {
    setDefaultOption(title);
  }, [language()]);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useResolvedPath();
  useEffect(() => setDefaultOption(title), [pathname]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOption = (option) => {
    setIsOpen(false);
    setDefaultOption(option[path]);
    setData({ ...data, [name]: option.id });
  };
  return (
    <ClickOutsideAlerter onOutsideClick={() => setIsOpen(false)}>
      <div
        className="select-menu"
        style={language() === en ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="select-menu__header" onClick={toggleMenu}>
          <span>
            <AiFillCaretDown
              style={isOpen ? { transform: "rotateX(180deg)" } : {}}
            />
          </span>
          <span className="default-option">{defaultOption}</span>
        </div>

        <div className={`select-menu__options ${isOpen ? "open" : ""}`}>
          {options.map((o) => (
            <div
              className="select-menu__option"
              key={o[path]}
              onClick={() => handleClickOption(o)}
            >
              {o[path]}
            </div>
          ))}
        </div>
      </div>
    </ClickOutsideAlerter>
  );
};

export default SelectMenu;
