import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillProject } from "react-icons/ai"

function Projects() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://github.com/xiaomeng831/BloodBank"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration:"none",color:"white"}}
        >
          <AiFillProject /><br />        
          <span style={{fontSize:"2rem"}}>Blood Bank</span>  
        </a>               
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://github.com/xiaomeng831/react_blog"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration:"none",color:"white"}}
        >
          <AiFillProject /><br />        
          <span style={{fontSize:"2rem"}}>Blog</span>  
        </a>               
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://github.com/xiaomeng831/savvy_teamwork_cloneEdition"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration:"none",color:"white"}}
        >
          <AiFillProject /><br />        
          <span style={{fontSize:"2rem"}}>Mobile App</span>  
        </a>               
      </Col>    
    </Row>
  );
}

export default Projects;
