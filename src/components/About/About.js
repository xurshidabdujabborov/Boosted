import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/img/card 4.png"
import car1 from "../../assets/img/card 5.png"
import car2 from "../../assets/img/card 6.png"
import "./About.css"

function About() {
    return (
        <div className='About'>
            <div className="flex">
                <img src={car} alt="" />
                <img src={car1} alt="" />
                <img src={car2} alt="" />
            </div>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={6} sm={12} xs={12}>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LW99SjIsqio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                    </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/h3ejkRSJ0GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About
