import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Projects from "./Projects";
import family from "../../Assets/family.png";
import Toolstack from "./Toolstack";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="gold">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={family} alt="about" className="img-fluid" />
            </Tilt>
            
          </Col>
        </Row>
        <h1 className="project-heading">
          Personal <strong className="gold">Projects</strong>
        </h1>
        <Projects />


        <h1 className="project-heading">
          <strong className="gold">Language</strong> and <strong className="gold">Framework</strong>  
        </h1>

        <Techstack />

        <h1 className="project-heading">
          other <strong className="gold">techs</strong>
        </h1>
        <Toolstack />  


      </Container>
    </Container>
  );
}

export default About;
