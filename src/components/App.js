import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
// import HomeComponent from './HomeComponent'
import ContactUs from './ContactUs';
import AboutUs from './AboutUs'
import LakeModal from './LakeModal'
import HomeComponentLake from './HomeComponentLake';
import AddLake from './AddLake';

class App extends Component {
  render() {
    return (
      <div className = "App"> 
      <Header />
      <Router>
        <Route path = "/" exact render={()=>(<HomeComponentLake/>)} />
        <Route path = "/AboutUs" component = {AboutUs} />
        <Route path = "/ContactUs" component = {ContactUs} />
        <Route path = "/Donate" component = {LakeModal} />
        <Route path ="/Add" component={AddLake} />
        {/* <Route path = "/" exact component={HomeComponentLake} />
        <Route path = "/AboutUs" component = {AboutUs} />
        <Route path = "/ContactUs" component = {ContactUs} />
        <Route path = "/Donate" component = {LakeModal} />
        <Route path ="/Add" component={AddLake} /> */}
        </Router>
      <Footer /> 
      </div>
    )
  }
}

export default App;