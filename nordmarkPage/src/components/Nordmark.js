import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/nordmark1-2.jpg";
import meter2 from "../assets/img/nordmark2-2.jpg";
import meter3 from "../assets/img/kickern.jpeg";
import meter4 from "../assets/img/stadtparkkneipe2013-02.jpeg"
import colorSharp from "../assets/img/color-sharp.png";

export const Nordmark = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="nordmark" id="nordmark">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <br />
                            <h2>
                                Die Nordmark
                            </h2>
                            <br />
                            <p>Bei der Akademisch-Musikalischen Verbindung Nordmark zu Hamburg treffen sich Studenten aus den verschiedensten Fakultäten, um gemeinsam Kultur zu erleben und selber zu gestalten. Zu diesem Zweck verfügen wir über ein eigenes Haus, sodass wir immer einen Probenraum für unseren Chor oder Platz für eine Theateraufführung haben. Wir nutzen das Haus natürlich auch für andere Veranstaltungen. Ob Pokerturnier, Kochabend, Vorträge oder eine Cocktailparty: Bei uns ist immer was los.
                            <br />
                            <br />Wenn ihr also neu seid in unserer schönen Stadt und auch außerhalb eurer Fakultät Bekanntschaften und Freundschaften schließen wollt, seid ihr bei uns herzlich eingeladen.
                            <br></br>
                            <br></br>Uns verbindet der Spaß an Musik und Kultur sowie das couleurstudentische Brauchtum. 
                            Wir sind eine farbenführende, nichtschlagende Studentenverbindung. Ein Männerbund, der für eine lebenslange Freundschaft steht. </p>
                            
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Kneipe</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Beim Kickern</h5>
                                </div>

                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Stadtparkkneipe</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src ={colorSharp} />
        </section>
      )

}