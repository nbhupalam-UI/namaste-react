import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import "../index.css";

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const AppLayout = () => {
  return (
    <div className="text-[16px]">
      <Header />
      <section className="my-0 mx-auto max-w-[90%] pt-[140px]">
        <Outlet />
      </section>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Contact us loading....</h1>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
