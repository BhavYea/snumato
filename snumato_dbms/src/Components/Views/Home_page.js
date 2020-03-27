import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardRestaurant from "./Card_restaurant";
import Navbar from "./Layout/Navbar";
import "./homepage.css";
import { Button, Grid } from "@material-ui/core";

const BTstyle={
    opacity:"0.8",
    background: "#C34",
    alignItems: "justify",
    margin: "10px",
    padding: "5px"
    
}

// TODO : Variable size of cards to be made constant
class home_page extends Component {
  state = {};
  render() {
    return (
      <div>
        <Button
          
          style={BTstyle}
          to="/login_page"
          color="primary"
          variant="contained"
          component={Link}
          // className={styles.buttonStyles}
        >
          Button to login page
        </Button>
        <Button
          style={BTstyle}
          to="/Restaurant_page"
          color="primary"
          variant="contained"
          component={Link}
        >
          Button to restaurant page
        </Button>
<<<<<<< HEAD:snumato_dbms/src/Components/Views/Home_page.js
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
        <Test />
=======
>>>>>>> 710a3e0870e231f4b9d6c736dac437e8aa6d34a4:snumato_dbms/src/Components/Home_page.js
      </div>
    );
  }
}

export default home_page;
