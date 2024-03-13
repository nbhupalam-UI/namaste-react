import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

import { UserDataContextProvider } from "./utils/UserDataContext";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";

import "../index.css";

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Naga Pradeep Bhupalam",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserDataContextProvider value={{ loggedInUser: userName, setUserName }}>
        <div className="text-[16px]">
          <Header />
          <section className="my-0 mx-auto max-w-[90%] pt-[140px]">
            <Outlet />
          </section>
        </div>
      </UserDataContextProvider>
    </Provider>
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
