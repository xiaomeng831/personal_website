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
              <Col md={3} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Personal Portfolio"
                  description="A personal website with React.js, Bootstrap, Vercel platform"
                  ghLink="https://github.com/xiaomeng831/personal_website"
                />
              </Col>

              <Col md={3} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Personal Blog"
                  description="A personal bolg with React.js, Node.js and MySQL"
                  ghLink="https://github.com/xiaomeng831/react_blog"
                />
              </Col>

              <Col md={3} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Savvy Renos and Design"
                  description="An Android Application is built for a renovation company with Dart, Flutter and Firebase Database"
                  ghLink="https://github.com/xiaomeng831/savvy_teamwork"            
                />
              </Col>

              <Col md={3} className="project-card">
                <ProjectCard
                  imgPath={project}
                  title="Simple Social Media"
                  description="A simple web application with MERN stack (MongoDB, Express.js, React.js, Node.js)"
                  ghLink="https://github.com/xiaomeng831/mini_social_media"            
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
