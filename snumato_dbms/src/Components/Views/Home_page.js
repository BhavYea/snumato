import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardRestaurant from "../Card_restaurant";
import "../homepage.css";
import { Button, Grid } from "@material-ui/core";


// TODO : Variable size of cards to be made constant
class home_page extends Component {
  state = {};
  render() {
    return (
      <div>
        
        <Grid container justify="center" direction="column" alignItems="stretch">
        <Button
          style={{fontSize:"30px"}}
          className="BT"
          to="/Restaurant_page"
          color="secondary"
          variant="text"
          component={Link}
          justify="center"
        >
          BROWSE
        </Button>
        </Grid>
      </div>
    );
  }
}

export default home_page;
