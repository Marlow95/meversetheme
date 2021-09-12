import React from 'react';
import Header from "./component/Header"
import Footer from "./component/Footer"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import './style.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/services" component={Services} />
          <Route path="/getintouch" component={ContactUs} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
