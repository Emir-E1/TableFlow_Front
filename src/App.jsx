import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import GetStarted from "./Pages/GetStarted";
import Home from "./Pages/Home";
import ComingSoon from "./ui/ComingSoon";
import Orders from "./Pages/Orders";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import ProductManagement from "./Pages/ProductManagement";

const router = createBrowserRouter([
  { path: "/", element: <GetStarted /> },
  {
    path: "/app",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",

        element: <Home />,
        children: [
          {
            path: "orders",
            element: <Orders />,
            children: [{ element: null, path: "payments" }],
          },
        ],
      },
      { path: "discount", element: <ComingSoon /> },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "settings",
        element: <Settings />,
        children: [
          { index: true, element: <ComingSoon /> },

          { path: "product-management", element: <ProductManagement /> },
        ],
      },
      { path: "logout", element: <ComingSoon /> },
      { path: "contact", element: <ComingSoon /> },
      { path: "notification", element: <ComingSoon /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
