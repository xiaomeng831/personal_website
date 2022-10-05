import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiApachemaven,  
  SiNpm,
  SiDocker,
  SiNginx,
  SiApachetomcat,
  SiAmazonaws,
  SiBootstrap,
  SiMaterialui
} from "react-icons/si";
import { MdHttp } from "react-icons/md";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachetomcat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdHttp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">      
        <SiMaterialui />
      </Col>
    </Row>
  );
}

export default Toolstack;
