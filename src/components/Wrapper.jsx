import React from "react";

function Wrapper(props) {
  return (
    <div className="wrapper">
      <div className="app">{props.children}</div>
    </div>
  );
}

export default Wrapper;
