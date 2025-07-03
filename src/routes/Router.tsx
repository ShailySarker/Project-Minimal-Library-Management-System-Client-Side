import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import AddBook from "../pages/AddBook/AddBook";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: LandingPage
      },
      {
        path: "create-book",
        Component: AddBook
      },
    ]
  },
  {
    path: "/*",
    Component: NotFound
  }
]);

