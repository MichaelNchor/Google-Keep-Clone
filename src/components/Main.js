import React, { useState } from "react";
import NoteInput from "./NoteInput";
import Notes from "./Notes";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Backdrop from "./Backdrop";

function Body() {
  const [sideIsActive, setSideIsActive] = useState(false);
  function handleSidebar() {
    setSideIsActive(!sideIsActive);
  }
  return (
    <>
      <Navbar handleText={handleSidebar} />
      <div className="flex">
        {sideIsActive && (
          <>
            <Sidebar />
            <Backdrop closeSide={handleSidebar} />
          </>
        )}
        <div className="flex flex-col items-center justify-center w-full">
          <NoteInput />
          <Notes />
        </div>
      </div>
    </>
  );
}

export default Body;
