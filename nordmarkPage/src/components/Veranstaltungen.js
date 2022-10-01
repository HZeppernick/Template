import { Col, Container, Row } from "react-bootstrap"
import projImg1 from "../assets/img/fox-free-icon-font.png"
import projImg2 from "../assets/img/beer-free-icon-font.png"
import projImg3 from "../assets/img/balloons-free-icon-font.png"
import projImg4 from "../assets/img/restaurant-free-icon-font.png"
import projImg5 from "../assets/img/video-camera-free-icon-font.png"
import projImg6 from "../assets/img/sword-free-icon-font.png"


export const Veranstaltungen = () => {

    return(

        <section className="veranstaltungen" id="veranstaltungen">
            <Container>
                <Row>
                    <Col>
                        <h2>Veranstaltungen</h2>
                        <br />
                        <h4>im Wintersemester 2022/2023</h4>
                        <br />
                        <br />
                        <div className="eventBox">
                        <div className="eventBox1">
                            <img src={projImg1} alt="" />
                            <h4>Fuxen-OE</h4>
                            <h5>01.10.2022</h5>
                        </div>
                        <div className="eventBox2">
                            <img src={projImg2} alt="" />
                            <h4>Ankneipe</h4>
                            <h5>15.10.2022</h5>
                            <p>20:00 c.t.</p>
                        </div>
                        <div className="eventBox3">
                            <img src={projImg3} alt="" />
                            <h4>Halloween-Party</h4>
                            <h5>29.10.2022</h5>
                        </div>
                        <div className="eventBox4">
                            <img src={projImg4} alt="" />
                            <h4>Jubiläums-Küchenschnack</h4>
                            <h5>12.11.2022</h5>
                        </div>
                        </div>
                            <br />
                            <br />
                            <br />
                        <div className="eventBoxRow2">
                            <div className="eventBoxRow21">
                                <img src={projImg5} alt="" />
                                <h4>Feuerzangen-bowle</h4>
                                <h5>15.12.2022</h5>
                            </div>
                            <div className="eventBoxRow22">
                                <img src={projImg2} alt="" />
                                <h4>Gotenkommers</h4>
                                <h5>16.12.2022</h5>
                                <p>20:00 c.t.</p>
                            </div>
                            <div className="eventBoxRow23">
                                <img src={projImg6} alt="" />
                                <h4>Mittelerde-Motto-Kneipe</h4>
                                <h5>14.01.2023</h5>
                            </div>
                            <div className="eventBoxRow24">
                                <img src={projImg2} alt="" />
                                <h4>Abkneipe</h4>
                                <h5>25.02.2023</h5>
                                <p>20:00 c.t.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}