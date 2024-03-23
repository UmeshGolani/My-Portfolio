import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Umesh Golani </span>
            from <span className="purple"> Bidar, India.</span>
            <br />
            I have completed B. Tech in CSE.
            <br />
            From  Guru Nanak Dev Engineering College, Bidar
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games :- Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Arts and Crafts :- Animations
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Umesh Golani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
