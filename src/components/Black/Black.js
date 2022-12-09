import { Container , Grid } from '@mui/material'
import React from 'react'
import bot from "../../assets/img/bottom 3.png"
import bot1 from "../../assets/img/bottom 2.png"
import bot3 from "../../assets/img/bottom 1.png"
import bot4 from "../../assets/img/bottom.png"
import "./Black.css"

function Black() {
    return (
        <div className='Black'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={3} sm={12} xs={12}>
                       <div className="box">
                       <img src={bot} alt="" />
                        <h4>Go Fast</h4>
                        <p className="text">Boosted is known for its premium performance boards offering a next-level experience.</p>
                       </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                       <div className="box">
                       <img src={bot1} alt="" />
                        <h4>Go Far</h4>
                        <p className="text">Boosted is known for its premium performance boards offering a next-level experience.</p>
                       </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                       <div className="box">
                       <img src={bot3} alt="" />
                        <h4>Go Safet</h4>
                        <p className="text">Boosted is known for its premium performance boards offering a next-level experience.</p>
                       </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                       <div className="box">
                       <img src={bot4} alt="" />
                        <h4>Built to Last!</h4>
                        <p className="text">Boosted is known for its premium performance boards offering a next-level experience.</p>
                       </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Black
