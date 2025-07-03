import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LazyLoader from "../components/LazyLoader";

const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));
const AllBooks = React.lazy(() => import("../pages/AllBooks/AllBooks"));
const AddBook = React.lazy(() => import("../pages/AddBook/AddBook"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Suspense fallback={<LazyLoader />}>
          <LandingPage />
        </Suspense>
      },
      {
        path: "books",
        element: <Suspense fallback={<LazyLoader />}>
          <AllBooks />
        </Suspense>
      },
      {
        path: "create-book",
        element: <Suspense fallback={<LazyLoader />}>
          <AddBook />
        </Suspense>
      },
    ]
  },
  {
    path: "/*",
    element: <Suspense fallback={<LazyLoader />}>
      <NotFound />
    </Suspense>
  }
]);

