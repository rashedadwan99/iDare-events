import { useSelector } from "react-redux";
import {
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
  profileRoute,
  projectRoute,
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
  const Projects = useSelector((state) => state.projects.value);
  const { t } = useTranslation();
  const handleLabel = (label) => {
    if (label.length >= 30) {
      return `${label.slice(0, 30)} ..`;
    }
    return label;
  };
  const dropDownList = Projects.map((p) => {
    return {
      label: handleLabel(p.name),
      label_ar: handleLabel(p.name),
      path: projectRoute + `/${p.id}`,
    };
  });
  let links = [
    {
      label: t("home"),
      path: homePageRoute,
    },

    {
      label: t("projects"),
      isDropDown: true,
      dropDownList: dropDownList,
    },
  ];
  if (eventId) {
    links = [...links, ...getEventPageLinks(eventId, event, t)];
  }
  if (isAuth) {
    links = [
      ...links,
      {
        label: t("profile"),
        path: profileRoute,
      },
    ];
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
