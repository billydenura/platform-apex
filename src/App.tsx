import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./layout/HeaderLayout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: "about us",
      },
      {
        path: "/find-us",
        element: "find us",
      },
      {
        path: "/products",
        element: "product",
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
