import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import Navbar from "./Layout/Navbar";

class home_page extends Component {
  state = {};
  render() {
    return (
      <div>
        <Button to="/login_page" color="primary" variant="contained" component={Link}>
          Button to login page hello
        </Button>
      </div>
    );
  }
}

export default home_page;
