import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { Home } from "./Home";
import { Search } from "./Search";
import { Category } from "./category";
import { Videos } from "./videos";

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
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
    ],
  },
]);

export default router;
