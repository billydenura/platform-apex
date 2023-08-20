import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HeaderLayout;
