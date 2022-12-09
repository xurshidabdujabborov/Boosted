import React from 'react'
import { Container , Grid } from '@mui/material'
import fot from "../../assets/img/footer foto.png"
import foo from "../../assets/img/footer.png"
import "./Footer.css"

function Footer() {
    return (
        <>
        <footer>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={4} sm={6} xs={12}>
                        <div className="img">
                        <img src={foo} alt="" />
                        </div>
                    </Grid>
                    <Grid md={4} sm={6} xs={12}>
                        <ul>
                            <h4>Explore</h4>
                            <li>
                                <a href="#" >Electric Skateboards</a>
                            </li>
                            <li>
                                <a href="#" >Electric Scooters</a>
                            </li>
                            <li>
                                <a href="#" >Accessories</a>
                            </li>
                            <li>
                                <a href="#" >FAQs</a>
                            </li>
                            <li>
                                <a href="#" >Warranty</a>
                            </li>
                            <li>
                                <a href="#" >Quick Start Guide</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="right">
                            <h4>About Boosted USA</h4>
                            <p>Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.</p>
                            <br />
                            <br />
                            <p>CaliRides LLC - DBA Boosted USA</p>
                            <p>1281 Andersen Drive Ste. K</p>
                            <p>San Rafael, CA 94901</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
        <div className="bottom">
        <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
                    <Grid md={6} sx={12} xs={12}>
                        <div className="left">
                            <p>© 2021</p>
                            <span>Boosted USA</span>
                            <p>All Rights Reserved.</p>
                            <span>Terms of Service</span>
                            <p>. Built by</p>
                            <span>BH</span>
                        </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={fot} alt="" />
                        </div>
                    </Grid>
            </Grid>
        </Container>
        </div>
        </>
    )
}

export default Footer
