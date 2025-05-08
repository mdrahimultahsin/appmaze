import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Apps from "../pages/Apps";
import Profile from "../pages/Profile/Profile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import Spinner from "../components/Spinner/Spinner";
import PrivateRouter from "../provider/PrivateRouter";
import ProfileDetails from "../pages/Profile/ProfileDetails";
import ChangePassword from "../pages/Profile/ChangePassword";
import Support from "../pages/Support/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Apps,
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/support",
        Component: Support,
        loader: () => fetch("/support.json"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/appdetails/:id",
        element: (
          <PrivateRouter>
            <AppDetails></AppDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRouter>
                <ProfileDetails></ProfileDetails>
              </PrivateRouter>
            ),
          },
          {
            path: "changePassword",
            element: (
              <PrivateRouter>
                <ChangePassword />
              </PrivateRouter>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
