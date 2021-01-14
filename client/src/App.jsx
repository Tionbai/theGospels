import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Bible from './components/Bible';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path="/Bible" component={Bible} />
        <Route exact path="/About" component={About} />
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
