import { useEffect, useState, useContext, useCallback } from "react";
import control from "../../assets/control.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { MdOutlineListAlt } from "react-icons/md";
import { MdHelp } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { BsFillInfoSquareFill } from "react-icons/bs";
import logo from "../../assets/Navbar/Parcello.png";
import logoSmall from "../../assets/Navbar/Parcello2.png";
import userImg from "../../assets/Testimonials/img1.svg";
import search from "../../assets/dashboard/search.png";
import Table from "../../Components/Dashboard/Table.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderCard from "../../Components/Dashboard/OrderCard";
import axios from "../../api/axios";
import ham from "../../assets/Navbar/ham.svg";
import { Link, NavLink } from "react-router-dom";
import close from "../../assets/Navbar/close.svg";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const closeNavBar = useCallback(() => setIsCollapsed(true), []);
  useEffect(() => {
    window.addEventListener("scroll", closeNavBar);
    return () => window.removeEventListener("scroll", closeNavBar);
  }, []);
  const Menus = [
    { title: "Home", src: "AiFillHome" },
    { title: "Send Parcel", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  const dummyData = [
    {
      date: "June 17, 2023",
      from: "John",
      to: "Jane",
      deliveryStatus: "Shipping",
      paymentStatus: "Pending",
      referenceNumber: 123456,
    },
    {
      date: "June 18, 2023",
      from: "Alice",
      to: "Bob",
      deliveryStatus: "Delivered",
      paymentStatus: "Completed",
      referenceNumber: 789012,
    },
    {
      date: "June 19, 2023",
      from: "David",
      to: "Emily",
      deliveryStatus: "Shipping",
      paymentStatus: "Pending",
      referenceNumber: 345678,
    },
    {
      date: "June 20, 2023",
      from: "Michael",
      to: "Sophia",
      deliveryStatus: "Delivered",
      paymentStatus: "Completed",
      referenceNumber: 901234,
    },
    {
      date: "June 21, 2023",
      from: "Oliver",
      to: "Isabella",
      deliveryStatus: "Shipping",
      paymentStatus: "Pending",
      referenceNumber: 567890,
    },
    {
      date: "June 22, 2023",
      from: "William",
      to: "Charlotte",
      deliveryStatus: "Cancelled",
      paymentStatus: "Completed",
      referenceNumber: 123456,
    },
    {
      date: "June 23, 2023",
      from: "James",
      to: "Amelia",
      deliveryStatus: "Shipping",
      paymentStatus: "Pending",
      referenceNumber: 789012,
    },
    {
      date: "June 24, 2023",
      from: "Benjamin",
      to: "Mia",
      deliveryStatus: "Cancelled",
      paymentStatus: "Completed",
      referenceNumber: 345678,
    },
    {
      date: "June 25, 2023",
      from: "Lucas",
      to: "Harper",
      deliveryStatus: "Shipping",
      paymentStatus: "Pending",
      referenceNumber: 901234,
    },
    {
      date: "June 26, 2023",
      from: "Henry",
      to: "Evelyn",
      deliveryStatus: "Delivered",
      paymentStatus: "Completed",
      referenceNumber: 567890,
    },
  ];

  const toastSuccess = () => toast.success("logged in successfully");

  const getOrder = async (item) => {
    console.log(item);
    const response = await axios.get(
      "https://api.parcelloglobal.com/api/bookings/order/",
      {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${item}`,
        },
      }
    );
  };

  useEffect(() => {
    let item = localStorage.getItem("auth");
    item = JSON.parse(item);
    getOrder(item.accessToken);
  }, []);

  return (
    <div className="flex p-3">
      <div
        className={` md:hidden ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* </Link> */}

        <Link to="/" className="flex gap-x-4 items-center">
          <img
            src={open ? logo : logoSmall}
            className={`cursor-pointer duration-500 h-10 ${
              open && "rotate-[360deg]"
            }`}
          />
        </Link>
        <ul className="pt-6 h-[40%]">
          <Link to="/">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
                !open ? "justify-center" : ""
              } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
            >
              <AiFillHome className="w-[22px] h-[22px] " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
              >
                {" "}
                Home
              </span>
            </li>
          </Link>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
              !open ? "justify-center" : ""
            } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
          >
            <BsFillBoxFill className="w-[22px] h-[22px] " />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
            >
              {" "}
              Send Parcel
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
              !open ? "justify-center" : ""
            } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
          >
            <MdOutlineListAlt className="w-[22px] h-[22px] " />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
            >
              {" "}
              My Orders
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
              !open ? "justify-center" : ""
            } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
          >
            <MdHelp className="w-[22px] h-[22px] " />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
            >
              {" "}
              Help
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2${
              !open ? "justify-center" : ""
            } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
          >
            <GoTasklist className="w-[20px] h-[20px] " />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
            >
              {" "}
              Terms
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2${
              !open ? "justify-center" : ""
            } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
          >
            <BsFillInfoSquareFill className="w-[20px] h-[20px] " />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
            >
              {" "}
              About
            </span>
          </li>
        </ul>
        <div className="flex items-end h-[55%]">
          <div
            className={` flex bg-[#F6F8FA] w-[100%] p-2 ${
              open ? "px-4" : "px-2"
            } rounded-[8px] items-center`}
          >
            <img
              src={userImg}
              alt="user"
              className={`rounded-full ${open ? "w-8 h-auto" : "w-12 h-auto"}`}
            />
            <div className={`mx-2 ${open ? "" : "hidden"}`}>
              <h1 className="font-semibold text-black">Jason Ramahia</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex-1  bg-[#F6F8FA] items-center justify-center p-4 md:p-2">
        <div className="w-[100%] flex gap-2 justify-between items-center">
          <div>
            <h1 className="font-bold text-black text-[19px]">Hello Jason! </h1>
            <p className="text-[#BBBCC5] text-[16px] md:hidden">
              Let's check your orders today!
            </p>
          </div>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-[5px] relative"
            />
            <img
              src={search}
              alt="search"
              className=" w-4 h-4 absolute top-3 right-2 cursor-pointer "
            />
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:block z-20"
          >
            {isCollapsed ? <img src={ham}></img> : <img src={close}></img>}
          </button>
        </div>

        <div className="w-[100%] flex flex-col mt-4 gap-4">
          <div className="flex justify-between md:flex-col gap-3">
            <div className=" flex w-full gap-4">
              <div className="  rounded-[5px]   w-full bg-[#fcbc9a] flex flex-col items-center justify-center p-2 cursor-pointer hover:scale-110 transition duration-150 ease-in-out">
                <h1 className="text-[19px] font-semibold text-black">
                  {" "}
                  Total Orders
                </h1>
                <p className="text-[#000000] font-medium ">20</p>
              </div>
              <div className="bg-[#9cfe9c]  rounded-[5px]  p-2   flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out w-full">
                <h1 className="text-[19px] font-semibold text-black">
                  {" "}
                  Delivered
                </h1>
                <p className=" font-medium">16</p>
              </div>
            </div>

            <div className=" flex w-full gap-4">
              <div className="bg-[#73e1ff] rounded-[5px] p-2 w-full   flex flex-col items-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out">
                <h1 className="text-[19px] font-semibold text-black">
                  {" "}
                  Cancelled
                </h1>
                <p className="text-[#000000] font-medium ">2</p>
              </div>
              <div className="bg-purple-100  rounded-[5px]  p-2 flex flex-col items-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out  w-full">
                <h1 className="text-[19px] font-semibold text-black">
                  {" "}
                  In Transit
                </h1>
                <p className="text-[#000000] font-medium ">2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Table></Table>
        </div>
        <div className="hidden md:block mt-5 ">
          <h1 className="py-4 text-2xl font-extrabold">Your Orders</h1>
          <div className="flex flex-col gap-2">
            {dummyData.map((data, index) => (
              <OrderCard key={index} {...data} />
            ))}
          </div>
        </div>

        {/* <Link to="/booking">click me</Link> */}
      </div>
      <div className={`hidden overflow-hidden md:block  absolute top-16`}>
        <div
          className={`flex flex-col overflow-hidden right-0 ease-in-out duration-300  w-3/4  gap-4 h-screen fixed  bg-white z-40 text-slate-500 p-5 ${
            !isCollapsed ? " translate-x-0" : " translate-x-full"
          }`}
        >
          {/* <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          /> */}
          {/* </Link> */}

          <Link to="/" className="flex gap-x-4 items-center">
            <img
              src={logo}
              className={`cursor-pointer duration-500 h-10 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
          <div className="flex items-center">
            <img
              src={userImg}
              alt="user"
              className={`rounded-full ${open ? "w-8 h-auto" : "w-12 h-auto"}`}
            />
            <div className={`mx-2 ${open ? "" : "hidden"}`}>
              <h1 className="font-semibold text-black">Jason Ramahia</h1>
            </div>
          </div>
          <ul className="pt-6 h-[40%]">
            <Link to="/">
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
                  !open ? "justify-center" : ""
                } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
              >
                <AiFillHome className="w-[22px] h-[22px] " />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
                >
                  {" "}
                  Home
                </span>
              </li>
            </Link>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
                !open ? "justify-center" : ""
              } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
            >
              <BsFillBoxFill className="w-[22px] h-[22px] " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
              >
                {" "}
                Send Parcel
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
                !open ? "justify-center" : ""
              } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
            >
              <MdOutlineListAlt className="w-[22px] h-[22px] " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
              >
                {" "}
                My Orders
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2 ${
                !open ? "justify-center" : ""
              } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
            >
              <MdHelp className="w-[22px] h-[22px] " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
              >
                {" "}
                Help
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2${
                !open ? "justify-center" : ""
              } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
            >
              <GoTasklist className="w-[20px] h-[20px] " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
              >
                {" "}
                Terms
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#008185] text-black text-sm items-center mb-2${
                !open ? "justify-center" : ""
              } gap-x-4 hover:bg-[#008185] hover:text-white
              "mt-9" `}
            >
              <BsFillInfoSquareFill className="w-[20px] h-[20px] " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[#969696] font-medium hover:text-white text-[16px]`}
              >
                {" "}
                About
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
