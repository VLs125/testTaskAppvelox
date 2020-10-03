import React from 'react';
import {Route,Switch} from "react-router-dom";
import Login from './Components/Autorization/Login/Login';
import Registration from './Components/Autorization/Registration/Registration';
import  "./App.scss";


function App() {
  return (
    <div className={'App-main'}>
    <Switch>
    <Route exact path='/login' component={Login} />
    <Route  path='/registration' component={Registration} />
    </Switch>
    </div>

  );
}

export default App;
