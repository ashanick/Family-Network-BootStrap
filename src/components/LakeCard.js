import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import BelandurBlrMirror from '../images/BelandurBlrMirror.jpg'

const LakeCard = () => {
    return(
        <div>
        {/* <Card style={{ width: '18rem' }}>
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
                    <Button variant="primary" >Donate</Button></Link>
            </ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Read More</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card> */}
    <Card className="bg-dark text-white">
  <Card.Img src={BelandurBlrMirror} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Belandur Lake</Card.Title>
    <Card.Text>
      Ratings: 5, .
    </Card.Text>
    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
</Card>
    </div>
    )
}

export default LakeCard