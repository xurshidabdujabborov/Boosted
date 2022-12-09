import React from 'react'
import { Container, Grid } from "@mui/material"
import Button from '@mui/material/Button';
import elec from "../../assets/img/electrek.png"
import tech from "../../assets/img/tech.png"
import pop from "../../assets/img/popular.png"
import wired from "../../assets/img/wired.png"
import "./Header.css"

function Header() {
    return (
        <>
            <header>
                <Container maxWidth="xl">
                    <div className="center">
                        <h1>Welcome to Boosted USA</h1>
                        <p className='text'>The Holy Grail of Electric Skateboards and One REVolutionary Scooter</p>
                        <div className="flex">
                            <Button variant="contained" disableElevation>
                                BOOSTED REVS
                            </Button>
                            <Button variant="contained" disableElevation>
                                BOOSTED BOARDS
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>
            <div className="header_foto">
                <div className="container">
                    <div className="flex">
                        <img src={elec} alt="" />
                        <img src={tech} alt="" />
                        <img src={pop} alt="" />
                        <img src={wired} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
