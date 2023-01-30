import React from "react";

const Text = (props) => {
  // gurwalsan operator ashiglaj bui heseg
  //    ? nuhtsul shalgaj bga baigaa bol
  //   : baihgvi bol
  return (
    <div>
      {/* <h2>{props.title ? props.title : "null"}</h2> */}
      <h2>{props.title}</h2>
    </div>
  );
};

export default Text;
