import React from "react"
import ReactDOM from "react-dom"
import {Route,Link,BrowserRouter as Router} from "react-router-dom"
import "./index.css"
import Home from "./Home"
import About from "./About"
import Curriculum from "./Curriculum"
import Contact from "./Contact"
import News from "./News"
import Footer from "./Footer"
const routing=(
  <Router>
    <div id="container1">
      <div id="cont1">
        <img src={require('./1.jpg')} id="img1" />
        Samunnat Pathsala
      </div>
      <div id="cont2">
        <div id="con1">
          <Link to="/Calender" id="link">Calender</Link>
        </div>
        <div id="con2">
          <Link to="/Routine" id="link">Routine</Link>
        </div>
      </div>
    </div>
    <div id="container2">
      <div id="cont11">
        <Link id="link" to="/">Home</Link>
      </div>
      <div id="cont11">
        <Link id="link"  to="/About">About Us</Link>
      </div>
      <div id="cont11">
        <Link id="link"  to="/Curriculum">Curriculum</Link>
      </div>
      <div id="cont11">
        <Link id="link"  to="/Gallery">Gallery</Link>
      </div>
      <div id="cont11">
        <Link id="link"  to="/Video">Video</Link>
      </div>
      <div id="cont11">
        <Link id="link"  to="/Events">Events</Link>
      </div>
      <div id="cont11">
        <Link  id="link"  to="/News">News</Link>
      </div>
      <div id="cont11">
        <Link id="link"  to="/Contact">Contact</Link>
      </div>
    </div>
    <div id="container3">
      <div id="cont21">
        <input type="button" value="<" id="but1" />
      </div>
      <div id="cont21">
        <input type="button" value=">" id="but1" />
      </div>
    </div>
    <div id="container4">
      <marquee id="banner">
        Latest news
      </marquee>
    </div>
    <div id="container5">
      <div id="cont31">
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Curriculum" component={Curriculum} />
        <Route path="/News" component={News} />
        <Route path="/Contact" component={Contact} />
      </div>
      <div id="cont32">
        <fieldset id="fieldset1">
          Events
          <li>Welcome</li>
          <li>Internal Exam</li>
          <li>Winter Vacation</li>
          <li>Final exam</li>
        </fieldset>
      </div>
    </div>
    <div id="container6">
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(routing,document.getElementById('root'));
