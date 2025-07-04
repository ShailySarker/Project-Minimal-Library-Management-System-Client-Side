import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LazyLoader from "../components/LazyLoader";
import BookDetails from "../pages/BookDetails/BookDetails";
import EditBook from "../pages/EditBook/EditBook";

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
      {
        path: "books/:id",
        element: <Suspense fallback={<LazyLoader />}>
          <BookDetails />
        </Suspense>
      },
      {
        path: "edit-book/:id",
        element: <Suspense fallback={<LazyLoader />}>
          <EditBook />
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

