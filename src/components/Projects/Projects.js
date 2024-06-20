import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/Projects/crypto.png";
import typing from "../../Assets/Projects/typing.png";
import shopping from "../../Assets/Projects/shopping.png";
import bookmyshow from "../../Assets/Projects/bookmyshow.png";
import vaccination from "../../Assets/Projects/vaccination.png";
import flipcommerce from "../../Assets/Projects/flipcommerce.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Dashboard Project"
              description="Developed a comprehensive cryptocurrency dashboard that provides real-time data and analytics for various
              cryptocurrencies.Designed and implemented the user interface using ReactJS, ensuring an intuitive and visually appealing
              dashboard layout. Integrated APIs to fetch real-time data from popular cryptocurrency exchanges, such as CoinGecko. Implemented data visualization features using charting libraries to display historical price trends and
              performance metrics."
              ghLink="https://github.com/UmeshGolani/CryptoTrackerP.git"
              demoLink="https://cryptodashboardumesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Typing Speed"
              description="Developed a web-based Typing Test application that allows users to assess and improve their typing speed and accuracy.
              ● Incorporated features such as countdown timer, progress tracking, and error highlighting to enhance the user experience.
              ● Authentication feature implemented using Firebase Authentication."
              ghLink="https://github.com/UmeshGolani/Typing-Test.git"
              demoLink="https://typing-test-umesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping Kart Project"
              description="Online code and markdown shopping build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown shopping for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the shopping supports auto save of work using Local Storage"
              ghLink="https://github.com/UmeshGolani/shopping-kart.git"
              demoLink="https://shoppingkartumesh.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookmyshow}
              isBlog={false}
              title="Book My Show"
              description="Designing Back End System for bookmyshow, that manages the data of, users, movies, theaters and shows. We have different
              controllers for different entities, using JpaRepository, swagger2. Database used is mysql."
              ghLink="https://github.com/UmeshGolani/BookMyShow.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaccination}
              isBlog={false}
              title="Vaccination Booking System"
              description="Developed a comprehensive vaccination booking system using Spring Boot, designed to streamline the appointment
              scheduling process for individuals.Implemented functionalities for managing appointments, tracking vaccine doses, and maintaining information about
              doctors, persons, and vaccination centers."
              ghLink="https://github.com/UmeshGolani/vaccination-booking-system.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipcommerce}
              isBlog={false}
              title="Flip Commerce App"
              description="Designed and implemented a robust e-commerce application, FlipCommerce, featuring a comprehensive set of
              DTOs, Enums, and Exception Models, coupled with efficient Repositories, Services, and Transformers.
              Demonstrated strong problem-solving skills in creating a seamless and scalable system for data exchange,
              error handling, and database interaction."
              ghLink="https://github.com/UmeshGolani/FlipCommerce.git"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
