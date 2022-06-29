import React from "react";
import { Link, NavLink } from "react-router-dom"; 

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/favorites" className={(navData) => (navData.isActive ? styles.active : "")}> 
            {/* // this will now show which page <li> element is the active one NavLink inherits activeClassName whereas Link has no class, so NavLink can use the .navbar a.active from the NavBar.module.css */}
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    );
};

export default Navbar;