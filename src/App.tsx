import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HeaderLayout from "./layout/HeaderLayout";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contoh from "./components/pageKelompok/Contoh";

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
        element: <About />,
      },
      {
        path: "/find-us",
        element: "find us",
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/kelompok-contoh",
        element: <Contoh />,
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
