import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { Home } from "./Home";
import { Search } from "./Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
