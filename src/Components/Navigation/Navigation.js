import React from "react";
import "../../CSS/Navbar.css";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/news",
    icon: faNewspaper,
    label: "News",
  },
  {
    route: "/setting",
    icon: faGear,
    label: "Setting",
  },
];
export const Navigation = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon
                      size="md"
                      icon={tab.icon}
                      color="#51258f"
                    />
                    <li style={{ color: "#51258f" }}>{tab.label}</li>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;