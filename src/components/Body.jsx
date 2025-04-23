import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Timings from "./TimingList";
import BookSeat from "./BookSeat";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/timings",
      element: <Timings />,
    },
    {
      path: "/book-seat",
      element: <BookSeat />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
