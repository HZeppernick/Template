import { Nav, Tab, Col, Container, Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/fox-free-icon-font.png"
import projImg2 from "../assets/img/beer-free-icon-font.png"
import projImg3 from "../assets/img/balloons-free-icon-font.png"


export const Veranstaltungen = () => {

    const veranstaltungen = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return(

        <section className="veranstaltungen" id="veranstaltungen">
            <Container>
                <Row>
                    <Col>
                        <h2>Veranstaltungen</h2>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                <div className="column">
                                    <img src={projImg1} alt="Image" />
                                    
                                    <img src={projImg2} alt="Image" />
                                    
                                    <img src={projImg3} alt="Image" />
                                    
                                </div>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Lorem ipsum
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Lorem ipsum
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}