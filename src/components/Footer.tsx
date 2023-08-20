import { CSSProperties } from "../types";
import instagramSVG from "../assets/instagram.svg";
import tiktokSVG from "../assets/tiktok.svg";
import emailSVG from "../assets/email.svg";
import linkedinSVG from "../assets/linkedin.svg";

function Footer() {
  return (
    <div style={style.container}>
      <div style={style.footerContainer}>
        <div style={{ marginLeft: "10px" }}>
          <div>APEX 2023</div>
          <div>
            <a href="">
              <img src={instagramSVG} style={style.logo} />
            </a>
            <a href="">
              <img src={tiktokSVG} style={style.logo} />
            </a>
            <a href="">
              <img src={linkedinSVG} style={style.logo} />
            </a>
            <a href="">
              <img src={emailSVG} style={style.logo} />
            </a>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <span className="material-icons">copyright</span>
          <p> 2023 APEX3.0 by ARUNA SHANKARA</p>
        </div>
      </div>
    </div>
  );
}

const commonLinkStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
  textDecoration: "none",
};

const style: CSSProperties = {
  container: {
    ...commonLinkStyles,
    marginBottom: "0",
    backgroundColor: "rgb(168, 214, 229)",
    width: "100%",
    position: "fixed",
    bottom: "0",
  },
  footerContainer: {
    ...commonLinkStyles,
    maxWidth: "670px",
    width: "100%",
    margin: "10px auto",
    justifyContent: "space-between",
  },

  logo: {
    height: "32px",
  },
};

export default Footer;
