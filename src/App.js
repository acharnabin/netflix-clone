import './App.css';
import Home from './components/Home'
import Profile_screen from './components/Profile_screen'
import React from 'react'
import Welcomepage from './components/Welcomepage'
import {Route, Switch} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Welcomepage';

const App=()=> {
  

  return (

    
    <div className="app">
      
        
            <Switch>
              <Route exact path="/profile" component={Profile_screen} />
              <Route exact path="/home" component={Home}/>
              <Route exact path="/" component={Welcomepage}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
            </Switch>

        
        
    </div>
    
    
  );
}

export default App;
