import { eventPageRoute } from "../../routes";
import { sortData } from "../utils/sort";
export const getEventPageLinks = (eventId, event, t) => {
  let links = [
    {
      label: t("event-home"),
      path: eventPageRoute + `/${eventId}`,
    },
  ];
  if (event.gallery_enabled) {
    links = [
      ...links,
      ...[
        {
          label: t("gallery"),
          path: eventPageRoute + `/${eventId}/gallery`,
        },
      ],
    ];
  }
  if (event.speakers_enabled) {
    links = [
      ...links,
      ...[
        {
          label: t("speakers"),
          path: eventPageRoute + `/${eventId}/speakers`,
        },
      ],
    ];
  }
  if (event.extra_pages.length) {
    const activeExtraPages = sortData(
      event.extra_pages.filter((eb) => eb.active),
      "sort",
      "asc"
    );
    const dropDownList = activeExtraPages.map((p) => {
      const pageTitleInPath = p.title.split(" ").join("-");
      return {
        label: p.title,
        path: `/events/${eventId}/${pageTitleInPath}/${p.id}`,
      };
    });
    links = [
      ...links,
      {
        label: t("more"),
        isDropDown: true,
        dropDownList,
      },
    ];
  }
  return links;
};
