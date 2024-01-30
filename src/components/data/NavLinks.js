import { useSelector } from "react-redux";
import {
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
  recommendedEventPageRoute,
} from "../../routes";
import { getEventPageLinks } from "./eventPageLinks";
import { useTranslation } from "react-i18next";

export const GetNavLinks = (
  handleLogout,
  eventId,
  event,
  myEvents,
  recommendedEvents
) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const { t } = useTranslation();
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];
  if (eventId) {
    links = [...links, ...getEventPageLinks(eventId, event, t)];
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
