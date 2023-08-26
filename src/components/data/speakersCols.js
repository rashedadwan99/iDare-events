import { isArabic } from "../../locales/language";
// getRoomName
//getImageName
export const getSpeakersCols = (t) => {
  return [
    {
      label: t("speakers"),
      path: isArabic() ? "name_ar" : "name",
      isImg: true,
      src: "image",
    },
    {
      label: t("session_title"),
      path: isArabic() ? "session_title" : "session_title_ar",
    },
    { label: t("venue"), path: "room_id" },
    { label: t("event"), path: "event_id" },
  ];
};
