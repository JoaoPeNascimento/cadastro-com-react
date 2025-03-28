"use client"
import "../main/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

import { BrowserRouter } from "react-router-dom";

import Logo from "../components/template/Logo";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Routes from "./Routes";

export default (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
