import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import GetStarted from "./Pages/GetStarted";
import Home from "./Pages/Home";
import ComingSoon from "./ui/ComingSoon";
import Orders from "./Pages/Orders";

const router = createBrowserRouter([
  { path: "/", element: <GetStarted /> },
  {
    path: "/app",
    element: <AppLayout />,

    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
      { path: "discount", element: <ComingSoon /> },
      { path: "dashboard", element: <ComingSoon /> },
      { path: "settings", element: <ComingSoon /> },
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
