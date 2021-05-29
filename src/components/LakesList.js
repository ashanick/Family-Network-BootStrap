import React from 'react'
import LakeDetail from './LakeDetail'

const LakesList = (props) => {
    console.log(props)

    const deleteLakeHandler = (id) => {
        props.getLakeId(id)
    }

    const renderLakeList = props.listOfLakes.map((listLake) => {
        return (
            <LakeDetail listLake={listLake}
            clickHandler={deleteLakeHandler}
            key={listLake.id}
            />
        )
    })

    return (
        <div>
            <h2> Lake List</h2>
            <div>{renderLakeList}</div>
        </div>
    )
}

export default LakesList