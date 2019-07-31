import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// material-ui imports
import MenuItem from "@material-ui/core/MenuItem";
import HomePage from "./HomePage";
import AboutPage from "./About";
import ContactUs from "./ContactUs";

function MainPage() {
  return (
    <BrowserRouter>
      <div
        className="main-grid"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className=""
          style={{ height: "auto", width: "auto", background: "white" }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <h2 className="logoN logo">N</h2>
            <h3 className="logo">NASRIN</h3>
          </a>

          <div className="text-degree">
            <Link to="/skills" className="text-degree">
              skills
            </Link>
          </div>
          <div className="text-degree">
            <Link className="text-degree" to="/portfolio">
              portfolio
            </Link>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="menu"
            style={{ display: "flex", justifyContent: "baseline", height: 60 }}
          >
            <MenuItem className="center-menu-item">
              <Link to="/" className="menu-contetns">
                home
              </Link>
            </MenuItem>
            <MenuItem className="center-menu-item">
              <Link to="/about-me" className="menu-contetns">
                about me
              </Link>
            </MenuItem>
            <MenuItem className="center-menu-item">
              <Link to="/contact-me" className="menu-contetns">
                contact us
              </Link>
            </MenuItem>
          </div>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/about-me" render={() => <AboutPage />} />
          <Route path="/contact-me" render={() => <ContactUs />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default MainPage;
