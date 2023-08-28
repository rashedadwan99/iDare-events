import { eventPageRoute } from "../../routes";
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
          path: `${eventPageRoute}/${eventId}/gallery`,
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
          path: `${eventPageRoute}/${eventId}/speakers`,
        },
      ],
    ];
  }
  return links;
};
