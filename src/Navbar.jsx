import React from "react";
import About from "./About";
import Contact from "./Contact";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import logo from "./images/logo.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </h1>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#002970" : "" };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#002970" : "" };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#002970" : "" };
              }}
              to="/service"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#002970" : "" };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <button type="button" class="btn btn-info buttons signBtn">
            <span style={{ marginRight: "3px" }}>Sign In</span>
            <BsPersonCircle size="1.5em" />
          </button>
          <button type="button" class="btn btn-info buttons loginBtn">
            <span style={{ marginRight: "3px" }}>Log In</span>
            <BsFillPersonFill size="1.5em" />
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
