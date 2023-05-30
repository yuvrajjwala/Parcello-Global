import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import AccordianList from "./AccordianList";

function TabBar({ heading, items }) {
  const [activeTab, setActiveTab] = useState("0");

  const Top = [
    {
      head: "Is Parcello a comparison site?",
      content:
        "Yes, Parcello is not a courier service but a comparison website. We simply help the customers in finding the best couriers around by using our online quote engine based on the dimensions, collection, and delivery address for a lower cost.",
    },
    {
      head: "How does it work?",
      content:
        "We have developed a technology that can determine the prices of our courier partners depending on the requirement of the order you are going to place. Fill in the destinations, weight, and dimension of the parcel into the quote engine.  After this, all the available options for you will be shown and once the order has been placed, we make sure that it is handled perfectly to ensure a smooth transaction of the delivery all throughout the process.",
    },
    {
      head: "What’s the quickest way to send a parcel as I don’t have much time?",
      content:
        "The process is very easy if you’re a business owner. Simply connect your processes to our systems and then whenever somebody purchases from you, your courier collection will be booked for you. Essentially this is a ‘click and send’ service.",
    },
    {
      head: "How secure are your services?",
      content:
        "Well, we always believed in quality over quantity. And we are proud to share with you that we are partnered with the most reliable couriers in the market with whom you can never expect low-quality services.",
    },
  ];

  const delivery = [
    {
      head: "What countries do you offer international parcel delivery?",
      content:
        "At Parcello, our goal is to provide our customers with both the lowest possible domestic and international courier prices, while also offering the most convenient booking process and responsive customer service. We achieve this by partnering with the most respected and efficient parcel delivery companies and providing them with plenty of parcel volume. This allows us to pass the cost savings onto you.",
    },
    {
      head: "How long will it take for my parcel to be delivered?",
      content:
        "We have a huge number of people asking ‘how long does it take for a parcel to be sent? There are so many variables including service and destination, but when you use our parcel delivery comparison site, this is one of the things we highlight in the results, so you can pick a courier who will deliver your parcel in the time frame you need.",
    },
    {
      head: "Parcel weight and size limits?",
      content:
        "Parcello can assist you compare courier and book cheap parcel delivery prices for items of all weight and size. Royal Mail UK Standard parcel prices can be a bit abrupt when it comes to shipping heavier parcels within the UK or internationally, so this is where our courier comparison quote engine can help keep your delivery costs in check.",
    },
    {
      head: "Where do I take my parcels to have them delivered?",
      content:
        "Parcello is not a courier service; we are a courier comparison tool through which you can book discounted delivery services including both collected and Drop Off courier services. We offer Drop Off services which you can find via our quote engine extensive information about Parcello Drop Off services.",
    },
  ];

  const collection = [
    {
      head: "Can I arrange a parcel to be collected today?",
      content:
        "Absolutely yes, we provide a couple of courier services for parcels to be collected today as long as you place the order in good time. Once the booking is confirmed, please make sure that there is no error message on your account towards your order as this may cause the order not to go through. If in any case this scenario happened, you can reach us thru a Live Chat or leave us a support ticket and one of the team will get it fixed for you.",
    },
    {
      head: "Will you collect my parcel?",
      content:
        "Parcello is the one-stop, parcel comparison site where you can find the best UK-collected courier services on the market. You have the opportunity to choose from a range of shipping experts, add protection cover to your item, track your parcels and save money all in one simple place.",
    },
    {
      head: "What time will my parcel be collected?",
      content:
        "Most of the courier services we have affiliated with collect the parcel from 8 AM to 6 PM. They only collect during weekdays and exceptions if it is Bank Holiday.",
    },
    {
      head: "Can I arrange for a parcel to be collected from someone else?",
      content:
        "Yes, you can arrange a collection to be collected from someone else. These occurrences are most common whenever you buy an item online but the good thing is Parcello is here to help.",
    },
  ];

  const tips = [
    {
      head: "Do you charge customs fees?",
      content:
        "For parcels going within the UK and out to Europe, there is no need to fulfill a requirement for any customs documentation. On the other hand, if you are sending outside of the EU to well-known countries like USA, China, Australia or India and etc., you have to complete customs documents and attach them outside of your box securely, to avoid any problems during Customs Inspection and this way as well would help the Customs Officers to check what you are sending and its value easily.",
    },
    {
      head: "Stress-free Way to Send Gifts",
      content:
        "We, at Parcello, know how busy this season can be. From shopping to gift wrapping to make sure all the gifts are sent to the recipients on time for the holidays.",
    },
    {
      head: "How should I package my parcel?",
      content:
        "Cover and wrap each and every item in the box separately because it is a much better way to protect the items while in transit. Think through using polystyrene, bubble wrap and foam wrapping for internal packaging to prevent movement in the box. Use strong inner and outer box to protect your items inside. Seal the packages or the boxes with a strong tape securely around the edges to prevent damage. Make sure to use a heavy duty/corrugated cardboard boxes for shipping much suitable if a new one.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-12 gap-12 sm:px-0">
      <h1 className=" font-extrabold text-5xl text-center sm:text-4xl">
        {heading}
      </h1>
      <div className="flex flex-col items-center gap-16">
        <ul className="flex flex-start gap-3">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={` flex  rounded-[100px] transition-[background-color] duration-200 ease-in justify-center items-center py-2 px-3 ${
                i == activeTab
                  ? "bg-[#353945] text-white"
                  : "text-[#353945] bg-transparent"
              }`}
            >
              <li>{item}</li>
            </button>
          ))}
        </ul>
        <div className="flex flex-col items-start gap-6">
          {activeTab == 0 && <AccordianList content={Top} />}
          {activeTab == 1 && <AccordianList content={delivery} />}
          {activeTab == 2 && <AccordianList content={collection} />}
          {activeTab == 3 && <AccordianList content={tips} />}
        </div>
      </div>
    </div>
  );
}

export default TabBar;
