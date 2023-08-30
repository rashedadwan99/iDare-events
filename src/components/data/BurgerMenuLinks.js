import { homePageRoute, loginPageRoute, myEventPageRoute } from "../../routes";
import { getEventPageLinks } from "./eventPageLinks";

export const getBurgerLinks = (
  handleLogout,
  t,
  isAuth,
  eventId,
  event,
  myEvents
) => {
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];
  if (eventId) {
    links = [...links, ...getEventPageLinks(eventId, event, t)];
  }
  if (isAuth && myEvents.length) {
    links = [...links, ...[{ label: t("my-events"), path: myEventPageRoute }]];
  }
  if (isAuth) {
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
