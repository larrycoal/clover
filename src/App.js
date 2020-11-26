import React from 'react';
import Header from "./containers/Header";
import { Home } from "./pages";
import { Footer } from "./containers/Footer";
import './App.css'
const App = () => {
  return (
    <React.Fragment>
    <Header />
    <Home />
    <Footer />
    </React.Fragment>
  );
};

export default App;
