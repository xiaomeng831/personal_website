import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="azure">Xiaomeng Xu </span> from <span className="azure"> Beijing, China.</span> I go by <span className="azure">Brady</span>.
            <br /><br />I am a new immigrant to <span className="azure">Canada</span> ( recently got our PR card ) and graduated form <span className="azure">Algonquin College</span> this year. My location is in <span className="azure">Ottawa</span>.            
            <br /><br />Before I came here, I was a full stack developer with <span className="azure">3 years</span> work experience mainly on <span className="azure">React.js</span> and <span className="azure">Spring Boot</span>. 
            <br /><br />The company I used to work for is a finance company which is a subsidiary of Chinese largest consumer electronics group.
            <br /><br />I'm adept at <span className="azure">Java</span> and <span className="azure">JavaScript</span> development. Besides programming, I also like to travel. I have been to 10 countries.

          </p>
                   
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
