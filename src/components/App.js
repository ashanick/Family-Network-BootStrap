import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import {Container, Row, Col} from 'react-bootstrap'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
  }
  
  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col><AddContact addContactHandler={addContactHandler}/></Col>
        <Col xs={6}><ContactList contacts={contacts} /></Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}

export default App;
