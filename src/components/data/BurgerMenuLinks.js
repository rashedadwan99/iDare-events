import {
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
  recommendedEventPageRoute,
} from "../../routes";
import { getEventPageLinks } from "./eventPageLinks";

export const getBurgerLinks = (
  handleLogout,
  t,
  isAuth,
  eventId,
  event,
  myEvents,
  recommendedEvents
) => {
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];
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
    if (eventId) {
      links = [...links, ...getEventPageLinks(eventId, event, t)];
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
