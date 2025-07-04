import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LazyLoader from "../components/LazyLoader";

const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));
const AllBooks = React.lazy(() => import("../pages/AllBooks/AllBooks"));
const AddBook = React.lazy(() => import("../pages/AddBook/AddBook"));
const BookDetails = React.lazy(() => import("../pages/BookDetails/BookDetails"));
const EditBook = React.lazy(() => import("../pages/EditBook/EditBook"));
const BorrowSummary = React.lazy(() => import("../pages/BorrowSummary/BorrowSummary"));
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
      {
        path: "borrow-summary",
        element: <Suspense fallback={<LazyLoader />}>
          <BorrowSummary />
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

