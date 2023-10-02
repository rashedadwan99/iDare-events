import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useResolvedPath } from "react-router-dom";
import ClickOutsideAlerter from "./ClickOutSideAlerter";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux";
import {
  handleSelectEventMenu,
  handleSelectHeaderMenu,
} from "../../styles/eventStyles";
// import "../../styles/selectmenu.css";
import { memo } from "react";
const SelectMenu = memo(function ({
  defaultOption: title,
  options,
  setData,
  data,
  name,
  path,
  path2,
}) {
  const isArabic = useSelector((state) => state.language.isArabic);
  const [defaultOption, setDefaultOption] = useState(title);
  const { id } = useParams();

  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useResolvedPath();
  useEffect(() => setDefaultOption(title), [pathname, title]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOption = (option) => {
    setIsOpen(false);
    setDefaultOption(option[path]);
    setData({ ...data, [name]: option.value ? option.value : option.id });
  };
  const handleSelectStyle = (header_style) => {
    if (id && event && header_style) return handleSelectHeaderMenu(event);
    if (id && event) return handleSelectEventMenu(event);
  };

  return (
    <ClickOutsideAlerter onOutsideClick={() => setIsOpen(false)}>
      <div
        className="select-menu"
        style={isArabic ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <div
          className="select-menu__header"
          onClick={toggleMenu}
          style={handleSelectStyle(true)}
        >
          <span>
            <AiFillCaretDown
              style={isOpen ? { transform: "rotateX(180deg)" } : {}}
            />
          </span>
          <span className="default-option">{defaultOption}</span>
        </div>

        <div
          className={`select-menu__options ${isOpen ? "open" : ""}`}
          style={handleSelectStyle()}
        >
          {options.map((o) => (
            <div
              className="select-menu__option"
              key={o[path]}
              onClick={() => handleClickOption(o)}
            >
              <span>{o[path]}</span>
              <span className="option_2">
                {o[path2]} {o[path2] >= 0 && "JOD"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ClickOutsideAlerter>
  );
});
export default SelectMenu;
