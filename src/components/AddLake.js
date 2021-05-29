import React from 'react'
import {Button, FormControl, InputGroup} from 'react-bootstrap'

class AddLake extends React.Component {
    state={
        name:"",
        desc: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "") {
            alert('Please Enter Name')
            return
        }
        this.props.addLakeHandler(this.state)
        this.setState({name: "", desc: ""})
    }

    render(){
        return(
            <div><h2>Add New Lake</h2>
            <form onSubmit={this.add}>
                <div className="form-group">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Lake Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="name"
                        placeholder="Lake Name"
                        value = {this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}>
                        </FormControl>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="desc"
                        placeholder="Description"
                        value={this.state.desc}
                        onChange={(e) => this.setState({desc: e.target.value})}>
                        </FormControl>
                    </InputGroup>
                    <Button type="submit">Add New Lake</Button>
                </div>
            </form>
            </div>
        )
    }
}

export default AddLake