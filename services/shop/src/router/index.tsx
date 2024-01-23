import { App } from "@/components/App";
import { ShopPageLazy } from "@/components/pages";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/shop",
    element: <App />,

    // children: [
    //   {
    //     path: "/",
    //     element: (
    //       <React.Suspense fallback={<h1>Loading</h1>}>
    //         <ShopPageLazy />
    //       </React.Suspense>
    //     ),
    //   },
    // ],
  },
];
export const router = createBrowserRouter(routes);

export default routes;
