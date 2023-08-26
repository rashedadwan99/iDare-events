import {
  eventPageRoute,
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
} from "../../routes";

export const getBurgerLinks = (handleLogout, t, isAuth, eventId) => {
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];

  if (isAuth) {
    links = [...links, ...[{ label: t("my-events"), path: myEventPageRoute }]];
    if (eventId) {
      links = [
        ...links,
        ...[
          {
            label: t("speakers"),
            path: eventPageRoute + `/${eventId}` + "/speakers",
          },
          {
            label: t("gallery"),
            path: eventPageRoute + `/${eventId}` + "/gallery",
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
