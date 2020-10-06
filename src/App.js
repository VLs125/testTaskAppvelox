import React from 'react';
import {Route,Switch} from "react-router-dom";
import Login from './Components/Autorization/Login/Login';
import Registration from './Components/Autorization/Registration/Registration';
import  "./App.scss";
import StepperExample from './Components/Autorization/Registration/StepperExample';
import Profile from './Components/PersonalArea/Profile';





function App() {
  return (
    <div className={'App-main'}>
    <Switch>
    <Route exact path='/login' component={Login} />
    <Route  path='/registration' component={Registration} />
    <Route  path='/step' component={StepperExample} />
    <Route  path='/profile' component={Profile} />

    </Switch>
    </div>

  );
}
export default App;
