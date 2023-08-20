import { NavLink } from "react-router-dom";
import { CSSProperties, grupData } from "../types";
import { GrupAtom } from "./GrupAtom";
import { useRecoilValue } from "recoil";

const Products = () => {
  const data: grupData[] = useRecoilValue(GrupAtom);
  return (
    <div>
      <div style={style.container}>
        <h1 style={style.title}>PRODUCTS OF APEX 3.0</h1>
        <h2>Take a Look on each team product</h2>
        <div style={style.boxWrapper}>
          {data.map((data: grupData) => {
            return (
              <NavLink to={data.linkGrup} style={style.box}>
                <img src={data.srcLogo} style={style.gruopLogo} />
                <p style={style.grupName}>{data.title}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const commonLinkStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
  textDecoration: "none",
};

const style: CSSProperties = {
  container: {
    ...commonLinkStyles,
    maxWidth: "670px",
    margin: "70px auto",
    flexDirection: "column",
  },
  title: {
    ...commonLinkStyles,
    fontSize: "45px",
  },
  boxWrapper: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px",
  },
  box: {
    ...commonLinkStyles,
    flexDirection: "column",
    width: "250px",
    height: "350px",
    borderRadius: "15px",
    backgroundColor: "rgb(215, 237, 146)",
    margin: "10px",
  },
  gruopLogo: {
    height: "250px",
    widows: "250px",
  },
  grupName: {
    borderRadius: "15px",
    height: "100px",
    backgroundColor: "rgb(153, 217, 139)",
    width: "250px",
    fontSize: "30px",
    margin: "0",
    textAlign: "center",
    alignItems: "center",
  },
};

export default Products;
