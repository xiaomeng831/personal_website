import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import project from "../../../Assets/project.png";
import library from "../../../Assets/library.png";
import bookstore from "../../../Assets/bookstore.png";
import AndroidApp from "../../../Assets/AndroidApp.png";
import blog from "../../../Assets/blog.png";


function Projects() {
  return (

    <Container id="Projects" fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          About My <strong className="azure">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={library}
              title="library app"
              description="A library web application with TypeScript, React, Java, Spring and Mysql"
              ghLink="https://github.com/xiaomeng831/library_app"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              title="Book Store Web"
              description="A Book Store web application with ASP.NET and Sql Server"
              ghLink="https://github.com/xiaomeng831/BookStoreWeb"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={project}
              title="Personal Portfolio"
              description="A personal website with React.js, Bootstrap, Vercel platform"
              ghLink="https://github.com/xiaomeng831/personal_website"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={blog}
              title="Personal Blog"
              description="A personal bolg with React.js, Node.js and MySQL"
              ghLink="https://github.com/xiaomeng831/react_blog"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={AndroidApp}
              title="Savvy Renos and Design"
              description="An Android Application is built for a renovation company with Dart, Flutter and Firebase Database"
              ghLink="https://github.com/xiaomeng831/savvy_teamwork"
            />
          </Col>

        </Row>
        <Row style={{ height: '100px' }}></Row>
      </Container>
    </Container>
  );
}

export default Projects;
