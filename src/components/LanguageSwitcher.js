import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { isArabic, language } from "../locales/language";
import { useDispatch } from "react-redux/es";
import { toggleLanguageAction } from "../redux/actions/languageActions";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: language(),
  });

  const languages = [
    { id: "en", label: "english" },
    { id: "ar", label: "العربية" },
  ];
  useEffect(() => {
    i18n.changeLanguage(data.id);
    localStorage.setItem("lng", data.id);
    document.documentElement.lang = data.id;
    dispatch(toggleLanguageAction());
  }, [data.id]);
  return (
    <div>
      <FormElement
        element="select"
        defaultOption={isArabic() ? "العربية" : "english"}
        options={languages}
        name="id"
        path="label"
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default LanguageSwitcher;
