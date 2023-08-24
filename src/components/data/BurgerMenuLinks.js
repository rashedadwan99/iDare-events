import { CiLogout } from "react-icons/ci";
import { BiHome } from "react-icons/bi";
import { homePageRoute, loginPageRoute } from "../../routes";

export const getBurgerLinks = (handleLogout, t, isAuth) => {
  let links = [
    {
      label: t("home"),
      // icon: <BiHome />,
      path: homePageRoute,
    },
  ];
  links = [
    ...links,
    isAuth
      ? {
          label: t("logout"),
          icon: <CiLogout />,
          onClick: () => {
            handleLogout();
          },
        }
      : { label: t("login"), path: loginPageRoute },
  ];

  return links;
};
