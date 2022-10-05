import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="gold">Xiaomeng Xu </span>
            from <span className="gold"> Beijing, China.</span> I go by <span className="gold">Brady</span>.
            <br />I am a new immigrant to <span className="gold">Canada</span> ( recently got our PR card ) and graduated form <span className="gold">Algonquin College</span> this year.            
            <br />Before I came here, I was a full stack developer with <span className="gold">3 years work experience</span> mainly in React.js, express.js and Spring Boot. 
            <br />The company I used to work for is a finance company which is a subsidiary of Chinese largest consumer electronics group.
            <br />I'm adept at <span className="gold">Java</span> and <span className="gold">JavaScript</span> development. Besides programming, I also like to travel. I have been to 10 countries.

          </p>
                   
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
