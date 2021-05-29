import React, {Component} from 'react'
import {Card, Button, Container, Col, Row} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

class LakeHealth extends Component  {
    render(){
    return(
        <div>
            <h2>What Can You Do?</h2>
            As it turn out, a lot ... but first, lets become familiar with the lake health paramters

                    <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        COD!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Chemical Oxygen Demand</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        BOD!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Biological Oxygen Demand</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </div>
    )}
}

export default LakeHealth