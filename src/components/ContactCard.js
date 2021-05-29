import React from 'react'
import {ListGroup} from 'react-bootstrap'
import  trashicon from '../images/trashicon.png'
import usericon from '../images/usericon.jpg'

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return(
        <ListGroup>
            <ListGroup.Item >
                <img src={usericon} alt="usericon" width="30px" height="30px" />
    //          {name}
    //          {email}
    //          <img src={trashicon} alt="trashicon" width="20" height="20" />
            </ListGroup.Item>
        </ListGroup>
    )
}

export default ContactCard