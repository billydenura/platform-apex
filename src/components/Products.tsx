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
                <div style={style.grupLogoWrapper}>
                  <img src={data.srcLogo} style={style.gruopLogo} />
                </div>
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
    backgroundColor: "rgb(138, 194, 217)",
    margin: "10px",
  },
  gruopLogo: {
    height: "200px",
    widows: "200px",
    filter: "invert(1)",
    justifyContent: "center",
    marginTop: "25px",
  },
  grupName: {
    borderRadius: "15px",
    height: "100px",
    backgroundColor: "rgb(1, 71, 124)",
    width: "250px",
    fontSize: "30px",
    margin: "0",
    textAlign: "center",
    alignItems: "center",
    color: "white",
    lineHeight: "100px",
  },
  grupLogoWrapper: {
    height: "250px",
    widows: "250px",
  },
};

export default Products;
