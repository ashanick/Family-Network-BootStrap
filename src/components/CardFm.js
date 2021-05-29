import React from 'react'
import {Card, Container, Col, Row} from 'react-bootstrap'
import BelandurBlrMirror from '../images/BelandurBlrMirror.jpg'

const CardFm = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardFm