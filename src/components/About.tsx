import { CSSProperties } from "../types";

const About = () => {
  return (
    <div>
      <div style={style.container}>
        {/* <h1>About APEX 3.0</h1> */}
        <h2 style={style.sectionTitle}>APEX 3.0</h2>
        <p style={style.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 style={style.sectionTitle}>Aruna Shankara</h2>
        <p style={style.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 style={style.sectionTitle}>APEX 3.0 Theme</h2>
        <p style={style.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 style={style.sectionTitle}>APEX 3.0 dimana dan kapan</h2>
        <p style={style.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
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
    padding: "0 20px",
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: "30px",
    fontFamily: "'Montserrat', sans-serif",
  },
  content: {
    fontSize: "15px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
};

export default About;
