import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import project from "../../Assets/project.png";


function Projects() {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      > 
        <Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              About My <strong className="azure">Projects </strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Lorem Ipsum"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  ghLink="https://"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Lorem Ipsum"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  ghLink="https://"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Lorem Ipsum"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  ghLink="https://"            
                />
              </Col>
              
            </Row>
          </Container>
        </Container>
      </motion.div>
    </AnimatePresence>  
  );
}

export default Projects;
