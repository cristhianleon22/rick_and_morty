import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar= (props) =>{
    const {onSearch}=props
    return(
        <div>
            <Link to='/home'> home </Link>
            <Link to='/about'>About</Link>

            <SearchBar onSearch={onSearch}/>
        </div>
    );
};

export default NavBar