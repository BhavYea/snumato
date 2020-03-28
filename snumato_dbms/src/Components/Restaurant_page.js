import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CardRestaurant from "./Card_restaurant";

class Restaurant_page extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container justify="space-evenly" direction="row">
          <Grid item xs={4}>
            <CardRestaurant
              name="Naveen Tea House"
              description="..duh"
            />
          </Grid>
          <Grid item xs={4}>
            <CardRestaurant
              name="Swad Kathi Roll"
              description="For times when mess card balance isn't enough"
            />
          </Grid>
          <Grid item xs={4}>
            <CardRestaurant
              name="Anna's Cafe"
              description="Andu gondus should have all the fun, period."
            />
          </Grid>
          <Grid itemxs={4}>
            <CardRestaurant
              name="Surya Tuck Shop"
              description="My income is from omelettes :3"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Restaurant_page;
