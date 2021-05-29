import React from 'react'
import {ListGroup} from 'react-bootstrap'
import  trashicon from '../images/trashicon.png'

const LakeDetail= (props) => {
    const {id, name, desc } = props.listLake
    console.log('In Lake Detail')
    console.log(props)
    
    return (
        <ListGroup>
            <ListGroup.Item>
                {name}
                {desc}
                <img src={trashicon} 
                alt="trashicon" width="20" height="20" 
                onClick={() => props.clickHandler(id)}/>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default LakeDetail