import React from "react";
import './navbar.css';
import { Box } from "@mui/material";
import logo from "../assets/logo.png"
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg"



export default function Navbar(){
    return(
        <>
            <Box
            sx={{
                background: "rgba(52, 201,75, 1)",
                // width: "100vw",
                height: "70px",
                display: "flex",
                alignItems: "center"

            }}
            >
                <Box className="navbar">
                    <div>
                        <img src={logo} alt="logo" className="logo"></img>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input 
                        type="search" 
                        name="search" 
                        className="search" 
                        placeholder="Search a album of your choice"
                        />
                        {/* <img src={searchIcon} alt="search" className="searchIcon"></img> */}
                        <SearchIcon className='searchIcon'/>
                    </div>
                    <button className="button">
                        Give Feedback
                    </button>
                </Box>
            </Box>
        </>
    )
}