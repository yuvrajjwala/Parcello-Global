import React from "react";
import Accordian from "./Accordian";

function AccordianList({ content }) {
  
  return (
    <>
      {content.map((con , i) => (
       <Accordian key = {i} con = {con} i = {i} />
      ))}
    </>
  );
}

export default AccordianList;
