import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../../images/WORKMARK_WHITE.png";
import image from "../../images/RED_BG.jpg";

function LandingPageTitleCard() {
  return (
    // fluid makes the container take up all horizontal space
    <Navbar style={{ backgroundImage: `url(${image}` }}>
      <Container fluid>
        <Navbar.Brand>
          <Image src={logo} width="50" height="50" alt="Ethan Evans logo" />
        </Navbar.Brand>
        <Container>
          <Nav
            className="column justify-content-end container" /* puts navigation to the right in a column */
          >
            <Nav.Item>
              <Nav.Link
                href="/Home"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Mentoring Network
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Free Resources
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Container>
      <br />
    </Navbar>
  );
}

export default LandingPageTitleCard;