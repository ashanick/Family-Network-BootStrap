import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Button, Container, Col, Card, ListGroup, ListGroupItem, Modal, Row } from 'react-bootstrap'
import BelandurBlrMirror from '../images/BelandurBlrMirror.jpg'
import varthur_lake_series_0 from '../images/varthur_lake_series_0.jpg'
import AddLake from './AddLake'

class HomeComponent extends Component {
    constructor(){
        super();
        this.state = {
            isOpen : false,
            amount: 50
        }
    }

    handleShow=()=> {
        console.log('In Handle')
        console.log(this.state.isOpen)
        this.setState({ isOpen: true })
        console.log('In Handle Change')
        console.log(this.state.isOpen)
    }

    hideModal=()=> {
        console.log('In Hide')
        this.setState({ isOpen: !this.state.isOpen })
    }

    donateModal=()=> {
        console.log('In Donate')
        this.setState({ isOpen: false, amount: +50 })
    }

    render(){

    return ( 
            <> 
            <h2> Amount Donated : {this.state.amount}</h2> 
            <Container>
            <Row>
                {/* <Col><ListLakes /></Col> */}
                <Col><AddLake /></Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BelandurBlrMirror} />
                    <Card.Body>
                        <Card.Title><h1>Belandur Lake</h1></Card.Title>
                        <Card.Text>
                        Few lakes can froth and burn like Belandur. 
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Lake Health Parameter:</ListGroupItem>
                            <ListGroupItem>Rejuvenation Details</ListGroupItem>
                            <ListGroupItem>
                            <Link to="/Donate">
                                <Button variant="primary" onClick={this.handleShow} >Donate</Button></Link>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Read More</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={varthur_lake_series_0} />
                    <Card.Body>
                        <Card.Title><h1>Varthur Lake</h1></Card.Title>
                        <Card.Text>
                        Cute Lake 
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Lake Health Parameter:</ListGroupItem>
                            <ListGroupItem>Rejuvenation Details</ListGroupItem>
                            <ListGroupItem>
                            <Link to="/Donate">
                                <Button variant="primary" onClick={this.handleShow} >Donate</Button></Link>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Read More</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            <Modal > 
                <Modal.Header closeButton>
                <Modal.Title>Thanks for your donation</Modal.Title>
                </Modal.Header>
                <Modal.Body>We value your money</Modal.Body>
                <Modal.Footer>
                <Button onClick={this.hideModal}>Cancel</Button>
                <Button onClick={this.donateModal}>Donate</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default HomeComponent