import {
  LuSettings2,
  LuHandshake,
  LuPackage,
  LuBookOpen,
} from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const offerings = [
  {
    title: "Aircraft Maintenance",
    icon: <LuSettings2 className="text-[#e6ca95]" size={70} />,
    features: [
      "Scheduled & Unscheduled Maintenance",
      "FAA Certifications (A&P, I&A, DAR)",
      "Pre-Purchase Inspections",
    ],
  },
  {
    title: "Aircraft Sales & Acquisitions",
    icon: <LuHandshake className="text-[#e6ca95]" size={70} />,
    features: [
      "Tailored Solutions for Buying/Selling",
      "Global Network for Seamless Transactions",
      "Expert Deal Negotiation",
    ],
  },
  {
    title: "Aviation Parts Procurement",
    icon: <LuPackage className="text-[#e6ca95]" size={70} />,
    features: [
      "Certified Global Sourcing",
      "Rapid Dispatch & Delivery",
      "End-to-End Compliance",
    ],
  },
  {
    title: "Specialized Training Programs",
    icon: <LuBookOpen className="text-[#e6ca95]" size={70} />,
    features: [
      "Pilot & Crew Training",
      "Safety & Ops Workshops",
      "Customer Service Courses",
    ],
  },
];


const WhatWeOffer = () => {
  return (
    <div className="bg-[#eeddbe] text-white px-6 py-16 sm:px-10 lg:px-24">
      <h2 className="text-4xl sm:text-5xl text-[#ac8030] font-bold text-center md:mb-10 flex justify-center items-center gap-3 md:gap-4 lg:gap-4 mt-4 md:mt-10">
        What We Offer <FaArrowRightLong className=" "/>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-8 md:mt-[60px]">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#ffffff] to-[#ffffff] text-white rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
          >
            <div className="flex justify-center items-center mt-[30px]">{item.icon}</div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-[15px] md:text-[17px] lg:text-[22px] text-[#000000] font-[900] font-mono text-nowrap mx-auto mt-4">
                {item.title}
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] mb-[30px] text-gray-300 pl-5">
              {item.features.map((point, i) => (
                <li key={i} className="flex items-start gap-2 md:justify-center md:items-center text-[#000000] font-serif">
                  <span className="text-green-400 ">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
