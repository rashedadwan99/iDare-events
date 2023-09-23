import React from "react";
import { useTranslation } from "react-i18next";

function Premium() {
  const { t } = useTranslation();
  return <div className="event-premium">{t("premium")}</div>;
}

export default Premium;
