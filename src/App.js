import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  Navigate,
  Route,
  Routes,
  useResolvedPath,
} from "react-router-dom/dist";
import {
  authPageRoute,
  eventPageRoute,
  homePageRoute,
  loginPageRoute,
  registerPageRoute,
} from "./routes";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux/es";
import { getAllEventsAction } from "./redux/actions/eventActions";
import SingleEventPage from "./pages/SingleEventPage";
import { language } from "./locales/language";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getUserToken } from "./services/userService";
import { useSelector } from "react-redux";
import { toggleIsAuth } from "./redux/actions/userActions";
import Speakers from "./pages/Speakers";
import Gallery from "./pages/Gallery";

const App = () => {
  const dispatch = useDispatch();
  const userToken = getUserToken();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { pathname } = useResolvedPath();
  useEffect(() => {
    document.documentElement.lang = language();
    dispatch(getAllEventsAction());
    if (userToken) {
      dispatch(toggleIsAuth(true));
    } else {
      dispatch(toggleIsAuth(false));
    }
  }, []);
  useEffect(() => {
    if (userToken) {
      <Navigate to={homePageRoute} replace />;
    } else {
      <Navigate to={loginPageRoute} replace />;
    }
  }, [isAuth]);
  const isLoading = useSelector((state) => state.events.isLoading);
  const isHomeOrAuthPage =
    pathname === homePageRoute || pathname === authPageRoute;
  return (
    <Container fluid>
      <ToastContainer />

      <Routes>
        <Route
          path={homePageRoute}
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path={eventPageRoute + "/:id"}
          element={
            <>
              <Header />
              {!isLoading ? <SingleEventPage /> : "loading.."}
            </>
          }
        />
        <Route
          path={eventPageRoute + "/:id/speakers"}
          element={
            <>
              <Header />
              {!isLoading ? <Speakers /> : "loading.."}
            </>
          }
        />
        <Route
          path={eventPageRoute + "/:id/gallery"}
          element={
            <>
              <Header />
              {!isLoading ? <Gallery /> : "loading.."}
            </>
          }
        />
        <Route
          path={authPageRoute}
          element={
            !getUserToken() ? (
              <>
                <Header />
                <AuthPage />
              </>
            ) : (
              <Navigate to={homePageRoute} replace />
            )
          }
        >
          <Route path={loginPageRoute} element={<LoginForm />} />
          <Route path={registerPageRoute} element={<RegisterForm />} />
        </Route>
      </Routes>
      {isHomeOrAuthPage && <Footer />}
    </Container>
  );
};

export default App;
