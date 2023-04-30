import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiRedis,
  SiMongodb,
  SiMicrosoftazure,
  SiAmazonaws,
  SiDocker,
  SiNginx,
  SiJenkins
} from "react-icons/si";
import { MdHttp } from "react-icons/md";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">      
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">      
        <MdHttp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">      
        <SiJenkins />
      </Col>
    </Row>
  );
}

export default Toolstack;
