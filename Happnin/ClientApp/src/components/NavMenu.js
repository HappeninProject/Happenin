import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { LoginMenu } from "./api-authorization/LoginMenu";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavMenu.css";
import Weather from './Weather';
import logo from "../images/happninHLogoCircle.png";
export class NavMenu extends Component {
  
    static displayName = NavMenu.name;
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
          //loading: true,
        };
        /*this.getLocation = this.getLocation.bind(this);
        this.getCordinates = this.getCordinates.bind(this);
        this.getLocation();*/
    }
   /* getLocation() {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.getCordinates);
      }
    }
    getCordinates(position){
      console.log(position.coords.latitude);
      this.setState({
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      })
    }*/

    toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
    }

  render() {
    return (
      <header className="container-fluid rounded shadow-sm">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm mb-5" light>
          <Container className="navbar">
            <NavbarBrand tag={Link} to="/" className="logo">
              <img
                id="logo"
                class="d-inline-block mr-1"
                alt="Logo"
                src={logo}
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="navHeader" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="navHeader"
                    to="/fetch-location-data"
                  >
                    Locations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="navHeader"
                    to="/fetch-user-data"
                  >
                    Users
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="navHeader" to="/submit-event">
                    Submit Event
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="navHeader" to="/browseEvents">
                    Events
                  </NavLink>
                </NavItem>
                <LoginMenu></LoginMenu>
              </ul>
            </Collapse>
          </Container>
          <Weather id = "weather"></Weather>
        </Navbar>
      </header>
    );
  }
}
