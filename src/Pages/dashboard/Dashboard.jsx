import { useEffect, useState, useContext } from "react";
import control from "../../assets/control.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { MdOutlineListAlt } from "react-icons/md";
import { MdHelp } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { BsFillInfoSquareFill } from "react-icons/bs";
import logo from "../../assets/Navbar/Parcello.png";
import userImg from "../../assets/Testimonials/img1.svg";
import search from "../../assets/dashboard/search.png";
import Table from "../../Components/Dashboard/Table.jsx";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
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
  const toastSuccess = () => toast.success("logged in successfully");

  useEffect(() => {
    console.log("opened");
    const item = localStorage.getItem("auth");
    console.log(item);
    // toastSuccess();
  }, []);

  return (
    <div className="flex">
      <div
        className={` ${
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
            src={logo}
           
            className={`cursor-pointer duration-500 h-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          
        </Link>
        <ul className="pt-6 h-[40%]">
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
      <div className="h-screen flex-1 p-7 bg-[#F6F8FA]">
        <div className="w-[100%] flex justify-between p-2 px-4 pr-8">
          <div>
            <h1 className="font-bold text-black text-[19px]">Hello Jason! </h1>
            <p className="text-[#BBBCC5] text-[16px]">
              Let's check your orders today!
            </p>
          </div>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-[5px] relative pr-8"
            />
            <img
              src={search}
              alt="search"
              className=" w-4 h-4 absolute top-3 right-2 cursor-pointer "
            />
          </div>
        </div>
        <div className="w-[100%] flex flex-col px-4 p-2">
          <div className="flex justify-between">
            <div className="  rounded-[5px]  p-4 w-1/4 mx-2 bg-[#FFEEE4] flex flex-col items-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out">
              <h1 className="text-[19px] font-semibold text-black">
                {" "}
                Total Orders
              </h1>
              <p className="text-[#BBBCC5] font-medium my-2 ">20</p>
            </div>
            <div className="bg-[#EFFCEF]  rounded-[5px]  p-4 w-1/4 mx-2 flex flex-col items-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out">
              <h1 className="text-[19px] font-semibold text-black">
                {" "}
                Delivered
              </h1>
              <p className="text-[#BBBCC5] font-medium my-2 ">16</p>
            </div>
            <div className="bg-[#E6F5F9] rounded-[5px]  p-4 w-1/4 mx-2 flex flex-col items-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out">
              <h1 className="text-[19px] font-semibold text-black">
                {" "}
                Cancelled
              </h1>
              <p className="text-[#BBBCC5] font-medium my-2 ">2</p>
            </div>
            <div className="bg-purple-100  rounded-[5px]  p-4 w-1/4 mx-2 flex flex-col items-center cursor-pointer hover:scale-110 transition duration-150 ease-in-out ">
              <h1 className="text-[19px] font-semibold text-black">
                {" "}
                In Transit
              </h1>
              <p className="text-[#BBBCC5] font-medium my-2 ">2</p>
            </div>
          </div>
        </div>
        <div>
          <Table></Table>
        </div>
        {/* <Link to="/booking">click me</Link> */}
      </div>
    </div>
  );
};
export default Dashboard;
