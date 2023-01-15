import React from "react";
import Card from "./Card";

function Notes() {
  return (
    <div className="flex items-center justify-center flex-wrap mb-24">
      <Card title={"Things to Buy"} body={"food, water, laptop"} />
      <Card title={"Things to Buy"} body={"food, water, laptop"} />
      <Card title={"Things to Buy"} body={"food, water, laptop"} />
      <Card title={"Things to Buy"} body={"food, water, laptop"} />
    </div>
  );
}

export default Notes;
