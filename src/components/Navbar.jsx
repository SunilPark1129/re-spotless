/*
Created by Sunil Park

Purpose:
to display navbar on the top
*/

import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/spotless-logo.png";
import {
  StyledContainerNavbar,
  StyledNavbar,
  StyledNavbarLink,
} from "./styles/Navbar.styled";
import { StyledDarkMode } from "./styles/StyledDarkMode.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    path: "/",
    label: "HOME",
    exact: "true",
  },
  {
    path: "/service",
    label: "SERVICE",
    exact: "false",
  },
  {
    path: "/contact",
    label: "CONTACT",
    exact: "false",
  },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <StyledNavbar>
        <StyledContainerNavbar>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <StyledNavbarLink>
            <>
              {links.map(({ path, label, exact }, idx) => (
                <li key={idx}>
                  <NavLink
                    to={path}
                    exact={exact}
                    end
                    style={({ isActive }) =>
                      isActive
                        ? { color: `${({ theme }) => theme.colors.main}` }
                        : {}
                    }
                    className={({ isActive }) =>
                      isActive ? "nav--active" : ""
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <StyledDarkMode
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                <FontAwesomeIcon
                  icon={darkMode ? faMoon : faCircleHalfStroke}
                />
              </StyledDarkMode>
            </>
          </StyledNavbarLink>
        </StyledContainerNavbar>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;
