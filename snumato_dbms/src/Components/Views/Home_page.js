import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardRestaurant from "../Card_restaurant";
import "../homepage.css";
import { Button, Grid } from "@material-ui/core";

const BTstyle = {
  opacity: "0.8",
  background: "#C34",
  alignItems: "justify",
  margin: "10px",
  padding: "5px"
};

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
          className="BT"
          to="/Restaurant_page"
          color="primary"
          variant="contained"
          component={Link}
        >
          Button to restaurant page
        </Button>

        <h1>Some random text only for testing purposes</h1>
      </div>
    );
  }
}

export default home_page;
