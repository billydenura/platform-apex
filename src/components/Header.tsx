import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CSSProperties } from "../types";

const Header = () => {
  const [isActiveMenu, setIsActiveManu] = useState(true);
  const [isActiveClose, setIsActiveClose] = useState(false);

  return (
    <div className="container" style={style.container}>
      <div className="shown-header" style={style.shownHeader}>
        <NavLink to="/" style={commonLinkStyles}>
          <div className="header-logo" style={style.headerLogo}>
            APEX 3.0
          </div>
        </NavLink>
        <div className="header-menu">
          <span
            className="material-icons"
            style={isActiveMenu ? style.isShow : style.notShow}
            onClick={() => {
              setIsActiveManu((current) => !current);
              setIsActiveClose((current) => !current);
            }}
          >
            menu
          </span>
          <span
            className="material-icons"
            style={isActiveClose ? style.isShow : style.notShow}
            onClick={() => {
              setIsActiveClose((current) => !current);
              setIsActiveManu((current) => !current);
            }}
          >
            close
          </span>
        </div>
      </div>
      <div
        className="header-lists"
        style={isActiveClose ? style.headerLists : style.notShow}
      >
        <NavLink
          to="/about-us"
          className="header-list"
          style={style.headerList}
          onClick={() => {
            setIsActiveManu((current) => !current);
            setIsActiveClose((current) => !current);
          }}
        >
          About Us
        </NavLink>
        <NavLink
          to="/products"
          className="header-list"
          style={style.headerList}
          onClick={() => {
            setIsActiveManu((current) => !current);
            setIsActiveClose((current) => !current);
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/find-us"
          className="header-list"
          style={style.headerList}
          onClick={() => {
            setIsActiveManu((current) => !current);
            setIsActiveClose((current) => !current);
          }}
        >
          Find Us
        </NavLink>
      </div>
    </div>
  );
};

const commonLinkStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "12px 0",
  textDecoration: "none",
};

const style: CSSProperties = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // maxWidth: "670px",
    backgroundColor: "rgb(1, 42, 74)",
    position: "fixed",
  },
  shownHeader: {
    ...commonLinkStyles,
    maxWidth: "670px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  },
  headerLogo: {
    marginLeft: "10px",
    fontSize: "20px",
    color: "white",
  },
  isShow: {
    display: "block",
    color: "white",
    marginRight: "10px",
    cursor: "pointer",
  },
  notShow: {
    display: "none",
  },
  headerLists: {
    ...commonLinkStyles,
    // display: "none",
    // justifyContent: "right",
    flexDirection: "column",
  },
  headerList: {
    ...commonLinkStyles,
    fontSize: "20px",
    color: "white",
  },
};

export default Header;
