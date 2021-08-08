import NavBar from "./Components/NavBar";
import React , {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MobileMenu from "./Components/MobileMenu";
import InfoSection from "./Components/InfoSection";
import Learn from './Components/Learn'
import {Section1, Section2, Section3} from './Components/InfoSection/Data'
import Service from "./Components/Service";
import Home from "./Components/Home";
import Footer from './Components/Footer';

function App() {

  const [open,setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <Router>
      <NavBar open={open} toggle={toggle}></NavBar>
      <Home/>
      <MobileMenu open={open} toggle={toggle}></MobileMenu>
      <InfoSection data={Section1}/>
      <InfoSection data={Section2}/>
      <Service></Service>
      <Learn/>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
