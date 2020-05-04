import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AnimationWrapper from "./AnimationWrapper.js";
import Canvas from "../canvas/Canvas";
import Animation from "../canvas/Animation";
import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";
import ThemeCard from "./ThemeCard";
import "./HomePage.scss";
import Person from "./Person"; 

class HomePage extends React.Component {
  state = { redirect: false };


  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/projects" />;
    }

    return (
      <div>
        {/**INTRODUCTION SECTION */}
        <Container fluid style={{ padding: 0 }}>
          <center>
            <Navigation center={true} />
          </center>

          <AnimationWrapper>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh"
              }}
            >
              {/**Icon */}
              {/* PUT THE ANIMATION REF(IN CONSTRUCTOR) HERE*/}
              <Image
                fluid
                style={{ padding: 0, height: 300 }}
                className="main-graphic"
                src={require("./images/main-logo.png")}
              />
            </Col>
          </AnimationWrapper>
        </Container>

        {/**ABOUT SECTION */}
        <Container
          fluid
          className="boxShadowed"
          style={{ backgroundColor: "#202020", color: "#dddddd" }}
        >
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                What we do
              </h3>
            </Row>
            <Row>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}
              >
              2LE Masks provides PPE for clinics, hospitals, nursing homes, and individuals. By partnering with an FDA approved factory in Shanghai, China, 2LE Masks brings the Chinese expertise in working with the coronavirus to the United States. Our primary product is the highly sought after KN-95 mask, shown to the left. We are selling these at $3 per mask for orders of any size. All equipment is stored in the United States, allowing for quick delivery.
              </Col>
              <Col md={6} sm={12}
              style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="dash-graphic"
                src={require("./images/mask.JPG")}
              />
              </Col>
            </Row>
          </Container>
        </Container>
        {/**MASKS SECTION */}
        <Container
          fluid
          className="boxShadowed"
          style={{ backgroundColor: "#202020", color: "#dddddd" }}
        >
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                KN-95 Masks
              </h3>
            </Row>
            <Row>
            <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}
              >
              Packaging
              </Col>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}
              >
              Features
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}
              style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="dash-graphic"
                src={require("./images/packaging.JPG")}
              />
              </Col>
              <Col md={6} sm={12}
              style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="dash-graphic"
                src={require("./images/mask_advantages.JPG")}
              />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed"  style={{ backgroundColor: "#222222", color: "#dddddd" }}>
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                Our Team
              </h3>
            </Row>
            <Row>
            <Col
                md={4}
                sm={8}
                style={{
                  fontFamily: "Lora",
                  display: "flex-inline",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center"
                }}
              >
              Luke and Luke went to high school together and after selling electronics for a couple years, moved into personal protective equipment to address the ballooning demand in the United States due to the coronavirus.
              </Col>
              <Col
                lg={4}
                md={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Person
                  name="Luke Dorn" 
                  img="dorn"
                  onClick="mailto:twolectronics@gmail.com"
              />
              </Col>
              <Col
                lg={4}
                md={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Person
                  name="Luke Truitt" 
                  img="luke"
                  onClick="mailto:twolectronics@gmail.com"
              />
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
