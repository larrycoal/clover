import React from "react";
import { Home } from "./pages/Home";
import AboutUs from './pages/AboutUs'
import Help from './pages/Help'
import Layout from "./Layout";
import "./App.css";
import {Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exactpath="/help" component={Help}/>
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
