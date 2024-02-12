import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AddCoffePage from "../pages/AddCoffePage";
import ProductDetails from "./../components/ProductDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/addcoffie",
        element: <AddCoffePage />,
      },
      {
        path: "/coffiedetails",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
