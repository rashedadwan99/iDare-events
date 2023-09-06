import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom/dist";
import {
  authPageRoute,
  eventPageRoute,
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
  registerPageRoute,
} from "./routes";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux/es";
import {
  getAllEventsAction,
  getMyEventsAction,
} from "./redux/actions/eventActions";
import SingleEventPage from "./pages/SingleEventPage";
import { language } from "./locales/language";
import { getUserToken } from "./services/userService";
import { useSelector } from "react-redux";
import { toggleIsAuth } from "./redux/actions/userActions";
import Speakers from "./pages/Speakers";
import Gallery from "./pages/Gallery";
import EventHome from "./components/EventHome";
import Canvas from "./components/common/Canvas";
import MyEvents from "./pages/MyEvents";
import CommonModal from "./components/common/CommonModal";
const App = () => {
  const dispatch = useDispatch();
  const userToken = getUserToken();
  const isAuth = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    document.documentElement.lang = language();
    dispatch(getAllEventsAction());
    if (userToken) {
      dispatch(toggleIsAuth(true));
    } else {
      dispatch(toggleIsAuth(false));
    }
  }, [dispatch, userToken]);
  useEffect(() => {
    if (userToken && isAuth) {
      dispatch(getMyEventsAction());
    }
  }, [userToken, dispatch, isAuth]);
  const isSwitched = useSelector((state) => state.language.isSwitched);
  useEffect(() => {}, [isSwitched]);

  return (
    <Container fluid>
      <CommonModal />
      <Canvas />
      <ToastContainer />

      <Routes>
        <Route path={homePageRoute} element={<HomePage />} />
        <Route path={eventPageRoute + "/:id"} element={<SingleEventPage />}>
          <Route path={eventPageRoute + "/:id"} element={<EventHome />} />
          <Route
            path={eventPageRoute + "/:id/speakers"}
            element={<Speakers />}
          />
          <Route path={eventPageRoute + "/:id/gallery"} element={<Gallery />} />
        </Route>
        <Route
          path={authPageRoute}
          element={
            !getUserToken() ? (
              <AuthPage />
            ) : (
              <Navigate to={homePageRoute} replace />
            )
          }
        >
          <Route path={loginPageRoute} element={<LoginForm />} />
          <Route path={registerPageRoute} element={<RegisterForm />} />
        </Route>
        <Route
          path={myEventPageRoute}
          element={
            getUserToken() ? (
              <MyEvents />
            ) : (
              <Navigate to={homePageRoute} replace />
            )
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
