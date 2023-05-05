import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function ProgressBar({ step }){
  const steps = [
    "Book your Delivery",
    "Review Order",
    "Confirm Order",
    " Make Payment",
  ];
  const progress = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="m-auto my-5 sm:hidden flex ">
      <div className="flex justify-between w-full">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`text-md md:text-xs p-3 font-medium  flex items-center  ${
              index + 1 <= step ? " text-teal-600 " : "text-gray-300"
            }`}
          >
            <div
              className={`flex items-center rounded-full h-8 w-8 p-3  mr-2   ${
                index + 1 <= step
                  ? " bg-teal-600 text-white"
                  : "bg-gray-300 text-gray-400"
              }`}
            >
              <span>{index + 1}</span>
            </div>
            {label}
            {index < 3 &&  <span className="mx-2 text-2xl md:hidden"> &gt; </span>}
            
          </div>
        ))}
      </div>
    </div>
  );
};

