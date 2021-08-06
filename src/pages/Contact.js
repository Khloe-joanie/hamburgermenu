/** @format */

import React, { Component } from "react";
import Banner from "../components/Banner";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner
          text="Contact"
          imgUrl="https://wallpapercave.com/wp/iYiwmW8.jpg"
        />
      </>
    );
  }
}

export default Contact;
