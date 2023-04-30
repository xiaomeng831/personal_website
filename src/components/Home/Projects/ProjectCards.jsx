import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} style={{width:"300px", margin:"auto"}} alt="card-img" />
      <Button variant="primary" href={props.ghLink} target="_blank" style={{width:"150px", margin:"auto"}}>
          <BsGithub /> &nbsp; {"Go to Github"}
        </Button>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
