import {
  eventPageRoute,
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
} from "../../routes";

const eventPageLinks = (links, eventId, event, t) => {
  if (event.gallery_enabled) {
    links = [
      ...links,
      ...[
        {
          label: t("gallery"),
          path: eventPageRoute + `/${eventId}` + "/gallery",
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
          path: eventPageRoute + `/${eventId}` + "/speakers",
        },
      ],
    ];
  }
  return links;
};

export const getBurgerLinks = (handleLogout, t, isAuth, eventId, event) => {
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },
  ];

  if (isAuth) {
    links = [...links, ...[{ label: t("my-events"), path: myEventPageRoute }]];
    if (eventId) {
      links = [...eventPageLinks(links, eventId, event, t)];
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
