import React from 'react'
import { Button , InputGroup, FormControl} from 'react-bootstrap'

class AddContact extends React.Component {
    state={
        name:"",
        email:""
    }

    add =(e) => {
        e.preventDefault();
        console.log('am here in add')
        console.log(this.state)
        if (this.state.name === "" || this.state.email === ""){
            alert('Name and Email Mandatory');
            return;
        }
        this.props.addContactHandler(this.state)
        console.log(this.state)
        console.log('In State')
        this.setState({name: "", email:""})
        this.props.history.push("/")
    }

    render(){
        return (
            <div>
                <h2>Add New Contact</h2>
                <form onSubmit={this.add}>
                    <div className="form-group">
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Contact Name</InputGroup.Text>
                        </InputGroup.Prepend>
                            <FormControl
                            name="name"
                            onChange={(e)=> this.setState({name: e.target.value})}
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                            name="email"
                            onChange={(e)=>this.setState({email: e.target.value})}
                            type="email"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                        <InputGroup.Append>
                            <InputGroup.Text type="email" id="basic-addon2">@example.com</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
           </div>
           <Button variant="primary" type="submit">Add Contact</Button>
            </form>
        </div>
        )
    }
}

export default AddContact