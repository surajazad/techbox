import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../box.png";
import styled from "styled-components";
import { ButtonContainer } from "./CSS/Button";
import { List } from "./CSS/List";

const Image = styled.img`
  width: 2.3rem
`;

const I = styled.i`
  color: white
`

const Nav = styled.nav`
  background-color: var(--mainDark)
`;

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-lg navbar-dark px-sm-5">
        <Link to="/">
          <Image
            src={logo}
            atl="store"
            className="navbar-brand"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <List className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </List>
            <List className="nav-item ml-5">
              <Link to="/iphone" className="nav-link">
                iPhone
              </Link>
            </List>
            <List className="nav-item ml-5">
              <Link to="/samsung" className="nav-link">
                Samsung
              </Link>
            </List>
            <List className="nav-item ml-5">
              <Link to="/google" className="nav-link">
                Google
              </Link>
            </List>
          </ul>
        </div>

        <span className="ml-auto">
          <ButtonContainer>
            <I className="fas fa-search"/>
          </ButtonContainer>
        </span>
        <Link to="/cart" className="ml-4">
          <ButtonContainer>
            <span className="mr-2">
              <I className="fas fa-shopping-cart cart"/>
            </span>
          </ButtonContainer>
        </Link>
        <ButtonContainer
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </ButtonContainer>
      </Nav>
    );
  }
}
