import React from 'react'
import  trashicon from '../images/trashicon.png'
import usericon from '../images/usericon.jpg'

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return(
        <div >
            <img src={usericon} alt="usericon" width="30px" height="30px" />
        <div>{name}</div>
        <div>{email}</div>
        <img src={trashicon} alt="trashicon" width="20" height="20" />
    </div>
    )
}

export default ContactCard