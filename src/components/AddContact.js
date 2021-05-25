import React from 'react'
import { Button } from 'react-bootstrap'

class AddContact extends React.Component {
    state={
        name:"",
        email:""
    }

    add =(e) => {
        e.event.preventDefault();
        console.log('am here in add')
        if (this.state.name === "" || this.state.email === ""){
            alert('Name and Email Mandatory');
            return;
        }
        this.props.addControlHandler(this.state)
        this.setState({name: "", email:""})
    }
    render(){
        return (
            <div>
                <h2>Add New Contact</h2>
            <form onSubmit={this.add}>
           <div className="form-group">
               <label >Name</label>
               <input type="text" class="form-control" 
                    id="exampleFormControl" 
                    value={this.state.name}
                    onChange={(e)=>this.setState({name: e.target.value})}
                    placeholder="Name"></input>
           </div>
           <div className="form-group">
               <label >Email Address</label>
               <input type="email" class="form-control" 
                    id="exampleFormControl" 
                    value={this.state.email}
                    onChange={(e)=>this.setState({email: e.target.value})}
                    placeholder="name@example.com"></input>
           </div>
           <Button>Add Contact</Button>
            </form>
        </div>
        )
    }
}

export default AddContact