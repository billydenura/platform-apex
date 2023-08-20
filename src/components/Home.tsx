import { NavLink } from "react-router-dom";
import { CSSProperties } from "../types";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcom to APEX 3.0</h1>
      <p style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <NavLink to="products" style={commonLinkStyles}>
        <button style={styles.button}>START</button>
      </NavLink>
    </div>
  );
};

const commonLinkStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
  textDecoration: "none",
};

const styles: CSSProperties = {
  container: {
    ...commonLinkStyles,
    flexDirection: "column",
    margin: "70px auto",
    maxWidth: "670px",
  },
  text: {
    ...commonLinkStyles,
    textAlign: "center",
    fontSize: "16px",
  },
  button: {
    width: "200px",
    height: "60px",
    fontSize: "30px",
    backgroundColor: "rgb(45, 125, 160)",
    borderRadius: "50px",
    color: "white",
    display: "block",
  },
};

export default Home;
