import React from "react";
import Accordian from "./Accordian";

function AccordianList({ content }) {
  
  return (
    <>
      {content.map((con , i) => (
       <Accordian con = {con} i = {i} />
      ))}
    </>
  );
}

export default AccordianList;
