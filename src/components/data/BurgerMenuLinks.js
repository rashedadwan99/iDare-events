import {
  eventPageRoute,
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
} from "../../routes";
import { getEventPageLinks } from "./eventPageLinks";

export const getBurgerLinks = (handleLogout, t, isAuth, eventId, event) => {
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];

  if (isAuth) {
    links = [...links, ...[{ label: t("my-events"), path: myEventPageRoute }]];

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
  if (eventId) {
    links = [...links,...getEventPageLinks(eventId, event, t)];
  }
  return links;
};
