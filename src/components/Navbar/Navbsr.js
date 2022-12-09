import React from 'react'
import { Container, Grid } from "@mui/material"
import logo from "../../assets/img/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import "./Navbar.css"

function Navbsr() {
    return (
        <>
            <nav>
                <Container maxWidth="xl">
                    <p>Financing option available at checkout.</p>
                </Container>
            </nav>
            <div className="nav_center">
                <Container maxWidth="xl">
                    <Grid container alignItems={"center"}>
                        <Grid items md={3} sm={12} xs={12}>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </Grid>
                        <Grid items md={6} sm={12} xs={12}>
                            <ul>
                                <li>
                                    <a href="#">Electric Skateboards</a>
                                </li>
                                <li>
                                    <a href="#">Electric Scooters</a>
                                </li>
                                <li>
                                    <a href="#">Accessories</a>
                                </li>
                                <li>
                                    <a href="#">Gift Card</a>
                                </li>
                                <li>
                                    <a href="#">More Info</a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid items md={3} sm={12} xs={12}>
                            <div className="icon">
                                <AccountCircleIcon/>    
                                <LocalGroceryStoreIcon/>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Navbsr
