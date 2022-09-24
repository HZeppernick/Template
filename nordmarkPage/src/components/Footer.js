import { Container, Row, Col } from "react-bootstrap"
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://de-de.facebook.com/AMVNordmark/"><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2022. All Right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}