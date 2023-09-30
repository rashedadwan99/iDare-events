import {
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
  recommendedEventPageRoute,
} from "../../routes";
import { getEventPageLinks } from "./eventPageLinks";

export const getNavLinks = (
  handleLogout,
  t,
  isAuth,
  eventId,
  event,
  myEvents,
  recommendedEvents,
  isArabic
) => {
  console.log(isArabic);
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];
  if (eventId) {
    links = [...links, ...getEventPageLinks(eventId, event, t, isArabic)];
  }
  if (isAuth) {
    if (myEvents.length) {
      links = [
        ...links,
        ...[{ label: t("my-events"), path: myEventPageRoute }],
      ];
    }
    if (recommendedEvents.length) {
      links = [
        ...links,
        ...[
          {
            label: t("recommended-events"),
            path: recommendedEventPageRoute,
          },
        ],
      ];
    }

    links = [
      ...links,
      ...[
        {
          label: t("logout"),
          onClick: () => {
            handleLogout();
          },
        },
      ],
    ];
  } else {
    links = [...links, ...[{ label: t("login"), path: loginPageRoute }]];
  }

  return links;
};
