import React from 'react';
//import logo from '../../style/images/logo.svg';
import './App.scss';
import ScrollToTop from '../ScrollToTop';
import Nav from '../nav';
import VideoBg from '../video';
import About from '../about';
import Menu from '../menu';
import MenuSection from '../menu-section';
import Contact from '../contact';
import Deliveroo from '../deliveroo';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Landing = () => (
  <div>
    <div id="home" className="hero text-center">
      <VideoBg/>
      <div className="hero-block w-75">
        <h1 className="display-2">WELCOME INN FISH BAR</h1>
        <p className="lead">Traditional fish and chips since `92.<br/>Located in Deptford, South East London</p>
      </div>
    </div>

    <About/>

    <MenuSection/>

    <Deliveroo/>

    <Contact/>
  </div>
)

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <header className="App-header">
            <Nav/>
          </header>

            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/menu" component={Menu} />
            </Switch>

            <footer>
              Welcome Inn Fish Bar Ltd. 2020
            </footer>
        </div>


        <ScrollToTop/>
      </BrowserRouter>

    </div>
  );
}

export default App;
