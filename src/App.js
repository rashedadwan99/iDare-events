import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes, useLocation } from "react-router-dom/dist";
import {
  authPageRoute,
  eventPageRoute,
  forgetPasswordFormRoute,
  gallery,
  galleryImages,
  galleryVideos,
  homePageRoute,
  loginPageRoute,
  myEventPageRoute,
  notfoundPageRoute,
  recommendedEventPageRoute,
  registerPageRoute,
} from "./routes";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux/es";
import {
  getUpcomingEventsAction,
  getMyEventsAction,
  getRecommendedEventAction,
} from "./redux/actions/eventActions";

import { language } from "./locales/language";
import { getUserToken } from "./services/userService";
import { toggleIsAuth } from "./redux/actions/userActions";
import Speakers from "./pages/Speakers";
import Gallery from "./pages/Gallery";
import EventHome from "./components/EventHome";
import Canvas from "./components/common/Canvas";
import MyEvents from "./pages/MyEvents";
import CommonModal from "./components/common/CommonModal";
import NotFound from "./pages/NotFound";
import RecommendedEvents from "./pages/RecommendedEvents";
import EventExtraPage from "./pages/EventExtraPage";
import PagesContainer from "./pages/PagesContainer";
import EventPage from "./pages/EventPage";
import ForgetPasswordForm from "./components/ForgetPasswordForm";
import GalleryImages from "./components/GalleryImages";
import GalleryVideos from "./components/GalleryVideos";
const App = () => {
  const dispatch = useDispatch();
  const userToken = getUserToken();
  const isAuth = useSelector((state) => state.user.isAuth);
  const allEvents = useSelector((state) => state.events.allEvents);
  useEffect(() => {
    document.documentElement.lang = language();
    if (userToken) {
      dispatch(toggleIsAuth(true));
    } else {
      dispatch(toggleIsAuth(false));
    }
  }, [dispatch, userToken]);
  useEffect(() => {
    dispatch(getUpcomingEventsAction());
    if (userToken) {
      dispatch(getRecommendedEventAction());
    }
  }, [userToken, dispatch]);
  useEffect(() => {
    if (userToken && allEvents.length >= 1) {
      dispatch(getMyEventsAction());
    }
  }, [userToken, allEvents, dispatch]);
  const location = useLocation();
  return (
    <Container fluid id="App" className="App">
      <CommonModal />
      <Canvas />
      <ToastContainer />

      <Routes>
        <Route path={homePageRoute} element={<PagesContainer />}>
          <Route path={homePageRoute} element={<HomePage />} />
          <Route path={eventPageRoute + "/:id"} element={<EventPage />}>
            <Route path={eventPageRoute + "/:id"} element={<EventHome />} />
            <Route
              path={eventPageRoute + "/:id/speakers"}
              element={<Speakers />}
            />
            <Route path={gallery} element={<Gallery />}>
              <Route path={galleryImages} element={<GalleryImages />} />
              <Route path={galleryVideos} element={<GalleryVideos />} />
            </Route>
            <Route
              path={eventPageRoute + "/:id/:page_title/:page_id"}
              element={<EventExtraPage />}
            />
          </Route>
          <Route
            path={authPageRoute}
            element={
              !isAuth ? (
                <AuthPage />
              ) : location.state ? (
                <Navigate to={location.state} replace />
              ) : (
                <Navigate to={homePageRoute} replace />
              )
            }
          >
            <Route path={loginPageRoute} element={<LoginForm />} />
            <Route
              path={forgetPasswordFormRoute}
              element={<ForgetPasswordForm />}
            />
            <Route path={registerPageRoute} element={<RegisterForm />} />
          </Route>
          <Route
            path={myEventPageRoute}
            element={
              isAuth ? <MyEvents /> : <Navigate to={homePageRoute} replace />
            }
          />
          <Route
            path={recommendedEventPageRoute}
            element={
              isAuth ? (
                <RecommendedEvents />
              ) : (
                <Navigate to={homePageRoute} replace />
              )
            }
          />
          <Route path={notfoundPageRoute} element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
