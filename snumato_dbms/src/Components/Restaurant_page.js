import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CardRestaurant from "./Card_restaurant";

class Restaurant_page extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container justify="space-between">
          <Grid item>
            <CardRestaurant
              name="ScarDucks"
              description="A place for all the scarred ducks to have refreshing coffe and chat"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="McRonalds"
              description="It's not like I hate it, but I HATE IT"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="More Restaurants"
              description="Yaay more restaurants"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="McRonalds"
              description="It's not like I hate it, but I HATE IT"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="ScarDucks"
              description="A place for all the scarred ducks to have refreshing coffe and chat"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Restaurant_page;
