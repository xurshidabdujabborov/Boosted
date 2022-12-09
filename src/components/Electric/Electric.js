import React from 'react'
import { Container, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import car from "../../assets/img/card 2.png"
import car1 from "../../assets/img/card 3.png"
import "./Electric.css"

function Electric() {
    return (
        <>
        <div className='Electric'>
            <Container maxWidth="xl">
                <div className="center">
                    <p className="text">High-performance</p>
                    <h2 className="title">Electric Skateboards</h2>
                    <p className="text">Cruising campus, going to work or getting through that long list <br /> of errands has never been easier or more fun.</p>
                    <Button variant="contained">Shop Now</Button>
                </div>
            </Container>
        </div>
        <div className="boosted">
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={8} sm={12} xs={12}>
                        <div className="foto">
                            <img src={car} alt="" />
                            <img src={car1} alt="" />
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="right">
                            <h2 className="title">Boosted Rev</h2>
                            <p className="text">There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
                            <Button variant="contained">Shop Now</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>

    )
}

export default Electric

