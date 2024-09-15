import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function MainPage() {
  return (
    <div
      style={{
        backgroundColor: "fff",
        height: "100vh",
        color: "white",
      }}
    >
      <Navbar style={{ backgroundColor: "#050505" }}>
        <Container
          className="d-flex justify-content-end"
          style={{
            marginRight: "0px",
          }}
        >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/logo.png"
              width={200}
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
