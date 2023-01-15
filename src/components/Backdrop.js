import React from "react";

function Backdrop(props) {
  return (
    <div
      className="bg-gray-300 opacity-50 w-full h-full z-30 fixed"
      onClick={props.closeSide}
    ></div>
  );
}

export default Backdrop;
