import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = document.getElementById("root");

if (!root) {
  throw Error("root required");
}
const container = createRoot(root);

container.render(<RouterProvider router={router} />);
