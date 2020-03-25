import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CardRestaurant from "./Card_restaurant";
import Navbar from "./Layout/Navbar";


// TODO : Variable size of cards to be made constant
class home_page extends Component {
  state = {};
  render() {
    return (
      <div>
        <Button
          to="/login_page"
          color="primary"
          variant="contained"
          component={Link}
        >
          Button to login page hello
        </Button>
        <Grid container justify="space-evenly" direction="row">
          <Grid item xs={4}>
            <CardRestaurant
              name="ScarDucks"
              description="A place for all the scarred ducks to have refreshing coffe and chat"
            />
          </Grid>
          <Grid item xs={4}>
            <CardRestaurant
              name="McRonalds"
              description="It's not like I hate it, but I HATE IT"
            />
          </Grid>
          <Grid item xs={4}>
            <CardRestaurant
              name="More Restaurants"
              description="Yaay more restaurants"
            />
          </Grid>
          <Grid itemxs={4}>
            <CardRestaurant
              name="McRonalds"
              description="It's not like I hate it, but I HATE IT"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home_page;
