/** @format */

import React, { Component } from "react";
import Banner from "../components/Banner";


class OurStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner
          text="Our Staff"
          imgUrl="https://images.unsplash.com/photo-1560258018-c7db7645254e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc3VufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </>
    );
  }
}

export default OurStaff;

