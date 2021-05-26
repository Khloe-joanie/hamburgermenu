/** @format */

import React, { Component } from "react";
import StaffData from "./StaffData";
import StaffImgs from "./StaffImgs";

class OurStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ourstaff row">
        <h1 className="staff mytitles">Our Staff</h1>
        <div className="container">
          <div className="row">
            {StaffData.map((sdata) => {
              return <StaffImgs key={sdata.id} joan={sdata} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OurStaff;

// /** @format */

// import React, { Component } from "react";

// class OurStaff extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://api.github.com/users")
//       .then((response) => response.json())
//       .then((data) => this.setState({ user: data }));
//     // .then(data=>console.log(data));
//   }

//   render() {
//     let currentState = this.state.user;
//     return (
//       <div>
//         {currentState.map((single) => {
//           return (
//             <div
//               style={{
//                 padding: "2em",
//                 textAlign: "center",
//                 width: "20%",
//                 float: "left",
//               }}
//             >
//               <h1>{single.login}</h1>
//               <img src={single.avatar_url} style={{ width: "100%" }} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default OurStaff;
