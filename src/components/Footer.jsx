import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-slate-950 ">
      <div className="max-w-[1200px] h-auto mx-auto grid grid-cols-1 md:grid-cols-4 text-center md:text-left gap-3 px-2 py-5">
        <div>
          <p className="text-primary-200 text-[24px]">Gaganda</p>
          <div className="text-white flex flex-col gap-2 items-center md:items-start">
            <p>Discover natural beauty with our natural care products.</p>
            <p className="flex items-center gap-2">
              <FiPhone />+ 38 050 123 45 67
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineMail />
              Gaganda@kmail.com{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row col-span-1 md:col-span-2 gap-2 justify-evenly">
          <ul className="text-white flex flex-col gap-2">
            <li className="text-gray-600">Help</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
          <ul className="text-white flex flex-col gap-2">
            <li className="text-gray-600">Help</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
          <ul className="text-white flex flex-col gap-2">
            <li className="text-gray-600">Help</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start text-white">
          <p className="text-[16px]">Sign up for Emails</p>
          <p className="text-[14px]">
            Stay informed, subscribe to our newsletter now!
          </p>
          <div className="flex flex-col w-auto md:w-full h-auto">
            <input
              className="rounded-lg px-2 py-3 text-slate-950 w-auto max-w-[290px]"
              type="text"
              placeholder="Email"
            />
            <button className="flex flex-row gap-2 items-center mt-3">
              Subscribe <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
