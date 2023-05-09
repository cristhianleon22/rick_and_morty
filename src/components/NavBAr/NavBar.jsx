import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar= (props) =>{
    const {onSearch}=props
    return(
        <div>
            <Link to='/home'> 
            <button>Home</button> 
             </Link>
            <Link to='/about'>
            <button>About</button> 
                </Link>

            <SearchBar onSearch={onSearch}/>
        </div>
    );
};

export default NavBar