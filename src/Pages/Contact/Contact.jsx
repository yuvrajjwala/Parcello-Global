import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BsSend } from "react-icons/bs";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 flex flex-col gap-8">
        <h2 className="text-4xl md:text-3xl font-semibold mb-4">
          Love to hear from you <br /> Get in Touch 👋
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex md:flex-col justify-between w-full gap-5 md:gap-0">
            <div className="mb-4 w-full md:pr-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full  p-2 rounded-md bg-gray-100"
              />
            </div>

            <div className="mb-4  w-full">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full  p-2 rounded-md bg-gray-100"
              />
            </div>
          </div>

          <div className="mb-4 md:w-full">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full  p-2 rounded-md bg-gray-100"
            />
          </div>

          <div className="mb-4 w-full ">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full  p-2 rounded-md bg-gray-100"
              rows={5}
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className=" w-96 md:w-full bg-[#008185] hover:bg-[#266265] text-white font-bold py-3 px-4 rounded-md flex justify-center items-center gap-2"
            >
              Just Send
              <BsSend className=" text-xl"/>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
