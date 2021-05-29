import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AboutUs extends Component {
    render(){
        return (
            <div>
                <p>
                    Know your lakes is inspired by the efforts of the Bangalore Environment Trust and its efforts towards a modern and livable beautiful Bangalore.
                </p>
                <Link to="/">Go Back Home</Link>
           </div>
        )
    }
}

export default AboutUs