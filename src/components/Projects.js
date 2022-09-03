import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/regex.png";
import projImg2 from "../assets/img/weather.png";
import projImg3 from "../assets/img/tft.png";
import projImg4 from "../assets/img/astro.png";
import projImg5 from "../assets/img/stargazer.jpg";
import projImg6 from "../assets/img/quiz.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Regex Tutorial",
      description: (
      <a href="https://github.com/umbrecon1/Gist-Regex-Tutorial">GitHub Page</a>),
      imgUrl: projImg1,
    },
    {
      title: "Weather Dashboard",
      description: (
        <a href="https://github.com/umbrecon1/Weather-App">GitHub Page</a>),      imgUrl: projImg2,
      
    },
    {
      title: "TFT Stat Tracker",
      description: (
        <a href="https://github.com/FluffyKyubey/tftstattrackercomparer">GitHub Page</a>),      imgUrl: projImg3,
    },
    {
      title: "S.H.I.P!!",
      description: (
        <a href="https://github.com/FluffyKyubey/shmup">GitHub Page</a>),      imgUrl: projImg4,
    },
    {
      title: "Stargazer",
      description: (
        <a href="https://github.com/kiira2125/StarGazer">GitHub Page</a>),      imgUrl: projImg5,
    },
    {
      title: "Waifu Quiz",
      description: (
        <a href="https://github.com/umbrecon1/Code-Quiz">GitHub Page</a>),      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A look into projects I've done and/or contributed to!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                             
                                />
                               
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
