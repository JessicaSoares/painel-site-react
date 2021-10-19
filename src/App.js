import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path= '/services' component={Services}/>
          <Route path= '/products' component={Products}/>
          <Route path= '/sign-up' component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
