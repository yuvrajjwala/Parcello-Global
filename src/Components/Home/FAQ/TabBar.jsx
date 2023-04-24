import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import AccordianList from "./AccordianList";

function TabBar({ heading, items }) {
  const [activeTab, setActiveTab] = useState("0");

  const dummy1 = [
    {
      head : "How can i set up a new website?",
      content : "The Stacks series of products: Stacks: Landing Page Kit, StacksPortfolio Kit, Stacks: eCommerce Kit. Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
    },
    {
      head : "How can i set up a new website?",
      content : "The Stacks series of products: Stacks: Landing Page Kit, StacksPortfolio Kit, Stacks: eCommerce Kit. Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
    },
    {
      head : "How can i set up a new website?",
      content : "The Stacks series of products: Stacks: Landing Page Kit, StacksPortfolio Kit, Stacks: eCommerce Kit. Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
    },
    {
      head : "How can i set up a new website?",
      content : "The Stacks series of products: Stacks: Landing Page Kit, StacksPortfolio Kit, Stacks: eCommerce Kit. Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."
    }
  ]
  
  return (
    <div className="flex flex-col items-center p-12 gap-12">
      <h1 className=" font-extrabold text-5xl text-center">{heading}</h1>
      <div className="flex flex-col items-center gap-16">
        <ul className="flex flex-start gap-3">
          {items.map((item, i) => (
            <button
            key={i}
              onClick={() => setActiveTab(i)}
              className={` flex  rounded-[100px] transition-[background-color] duration-200 ease-in justify-center items-center py-2 px-3 ${
                i == activeTab ? "bg-[#353945] text-white" : "text-[#353945] bg-transparent"
              }`}
            >
              <li>{item}</li>
            </button>
          ))}
        </ul>
        <div className="flex flex-col items-start gap-6">
          {activeTab == 0 && (
            <AccordianList content = {dummy1}/>
          )}
          {activeTab == 1 && (
            <AccordianList content = {dummy1}/>
          )}
          {activeTab == 2 && (
            <AccordianList content = {dummy1}/>
          )}
          {activeTab == 3 && (
            <AccordianList content = {dummy1}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabBar;
