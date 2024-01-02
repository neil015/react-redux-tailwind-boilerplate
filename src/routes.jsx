import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import { UserData } from "./pages/test/UserData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserData />,
  },
  {
    path: "/user-data",
    element: <UserData />,
  },
]);
