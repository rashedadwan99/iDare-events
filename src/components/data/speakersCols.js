import { isArabic } from "../../locales/language";
const getRoomName = (roomId, data) => {
  const room = data.rooms.find((r) => r.id === roomId);
  return isArabic() ? room.name_ar : room.name;
};
export const getSpeakersCols = (t, event) => {
  return [
    {
      label: t("speakers"),
      path: isArabic() ? "name_ar" : "name",
      isImg: true,
      src: "image",
    },
    {
      label: t("time"),

      isTime: true,
    },
    {
      label: t("session_title"),
      path: isArabic() ? "session_title_ar" : "session_title",
    },
    {
      label: t("venue"),
      dataPath: "room_id",
      getRowData: (roomId, data = event) => getRoomName(roomId, data),
    },
  ];
};
