import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'

const Footer = () =>{
    return (
        <Container>
        <div style={{justifyContent:'center', color: "red", height: '100px', marginTop: "30px"}}>
            <h1> Footer Container here</h1>
        </div>
        <Row>
    <Col>Government Efforts</Col>
    <Col>NGO/Citizen Efforts</Col>
    <Col>How can we help you?</Col>
  </Row>
        </Container>
    )
}

export default Footer