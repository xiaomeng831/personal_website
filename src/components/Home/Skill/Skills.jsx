import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";



function Skills() {
  return (
    <Container id="Skills" fluid className="about-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6}>
          <h2 className="project-heading">
            <strong className="azure">Language</strong> and <strong className="azure">Framework</strong>
          </h2>
          <Techstack />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6}>
          <h2 className="project-heading">
            other <strong className="azure">techs</strong>
          </h2>
          <Toolstack />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
