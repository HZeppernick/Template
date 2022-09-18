import { useRef } from "react"
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g4lkk44', 'template_bzd2hou', form.current, 'rXE0ok-6lXM2Jc-zv')
      .then((result) => {
          alert("Deine Nachricht wurde verschickt!");
      }, (error) => {
          console.log("Ups! Da ist etwas schiefgelaufen.");
      });

    };
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Schreib uns eine Nachricht</h2>

        <form ref={form} onSubmit={sendEmail}>
            <Row>
            <Col sm={6} className='px-1'>
            <label>Name</label>
                <input type="text" name="user_name" />
                </Col>
                <Col sm={6} className='px-1'>
            <label>Email</label>
                <input type="email" name="user_email" />
                </Col>
                <Col sm={6} className='px-1'>
            <label>Message</label>
            <textarea name="message" />
                <input type="submit" value="Send" />
                </Col>
                                </Row>
        </form>
        </Col>


                </Row>
            </Container>
        </section>
    )
}
