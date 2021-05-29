import React, {useState, useEffect} from 'react'
import {uuid} from 'uuidv4'
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from "./ContactDetail"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log('In App')
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=> {
      return contact.id != id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <>
      <Header />
        <Router>
        <Switch>
          <Container>
      <Row>
        <Col>            
          <Route 
              path="/" exact
              render={(props) => (
                <ContactList {...props} contacts={contacts}
                getContacdId={removeContactHandler} />
              )} />          
          <Route 
              path="/add" exact
              render={(props) => (
                <AddContact {...props} 
                addContactHandler={addContactHandler} />
              )}
              /> </Col>
              <Col>
              <Route path="/contact/:id" component={ContactDetail} />
              </Col>
        {/* <Col><AddContact addContactHandler={addContactHandler}/></Col> */}
        {/* <Col ><ContactList contacts={contactsgetCOn/></Col> */}
      </Row>
    </Container>
    </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
