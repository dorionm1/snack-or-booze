import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ snacks, drinks }) {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">{snacks.length ? `(${snacks.length})` : ''}Snacks</NavLink>
            <NavLink to="/drinks">{drinks.length ? `(${drinks.length})` : ''}Drinks</NavLink>
            <NavLink to="/food/add">Add Menu Item!</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
