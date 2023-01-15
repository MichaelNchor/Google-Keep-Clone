import React from "react";

function Sidebartext(props) {
  return (
    <>
      <button
        type="button"
        className="text-base pl-6 p-2.5 active:bg-slate-200 text-black font-semibold"
      >
        {props.text}
      </button>
    </>
  );
}

export default Sidebartext;
