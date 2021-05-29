import React, {useState, useEffect} from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {uuid} from 'uuidv4'
import LakeBlogs from './LakeBlogs'
import LakeHealth from './LakeHealth'
import LakeCard from './LakeCard'
import AddLake from './AddLake'
import LakesList from './LakesList'

const HomeComponentLake =() =>{
    const [listOfLakes, setListOfLakes ] = useState([])
    const localStorageKey="LakesBlr"
    
    const addLakeHandler = (lake) => {
        setListOfLakes([...listOfLakes, {id:uuid(), ...lake}])
        console.log('Add Lake')
        console.log(listOfLakes)
    }

    const removeLakeHandler = (id) => {
        const newLakesList = listOfLakes.filter((lake) =>{
            return lake.id !== id
        });
        setListOfLakes(newLakesList);
    }

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(listOfLakes))
    }, [listOfLakes])

    useEffect(()=> {
        const getLakes = JSON.parse(localStorage.getItem(localStorageKey))
        if (getLakes) setListOfLakes(getLakes)
    }, [])

    return(
        <div>
            <Container>
                <Row>
                <Col>
                    <LakeCard/>
                    <AddLake addLakeHandler={addLakeHandler}/>
                    <LakesList listOfLakes={listOfLakes} getLakeId={removeLakeHandler}/>
                </Col>
                <Col xs={5}><LakeBlogs /></Col>
                <Col><LakeHealth /></Col>
            </Row>
            </Container>
        </div>
    )
}

export default HomeComponentLake