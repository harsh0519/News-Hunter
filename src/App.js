//import logo from './logo.svg';
import "./App.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export class App extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  render() {
    return (
        <Router>      
          <Navbar/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pagesize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pagesize={9}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pagesize={9}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pagesize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pagesize={9}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pagesize={9}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pagesize={9}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pagesize={9}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
    );
  }
}

export default App;
