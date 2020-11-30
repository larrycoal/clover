import React from "react";
import Header from "./containers/Header";
import { Footer } from "./containers/Footer";
const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
