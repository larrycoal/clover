import React from "react";
import Header from "./containers/Header";
import { Home } from "./pages";
import { Footer } from "./containers/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

export default App;