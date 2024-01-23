import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
//@ts-ignore
import shopRouter from "shop/Router";
//@ts-ignore
import aboutRouter from "about/Router";
console.log(shopRouter);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [...shopRouter, ...aboutRouter],
  },
]);
export { router };
