import { Container , Grid } from '@mui/material'
import React from 'react'
import car from "../../assets/img/card.png"
import car1 from "../../assets/img/card 1.png"
import "./Main.css"


function Main() {
    return (
       <main>
        <Container maxWidth="xl">
            <h2 className="title">Looking for Boosted Boards, or Boosted Revs?</h2>
            <p className="text">Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p>
            <Grid container alignItems={"center"}>
                <Grid md={6} sm={12} xs={12}>
                    <div className="box">
                        <img src={car} alt="" />
                        <div className="card">
                            <h3>Shop Boosted Boards</h3>
                            <p className="text">In Stock</p>
                        </div>
                    </div>
                </Grid>
                <Grid md={6} sm={12} xs={12}>
                    <div className="box">
                        <img src={car1} alt="" />
                        <div className="card">
                            <h3>Shop Boosted Revs</h3>
                            <p className="text">In Stock</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
       </main>
    )
}

export default Main
