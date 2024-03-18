import React, { useState } from "react";

const LoginSignup = () => {
  const [form, setForm] = useState(true);
  return (
    <div className="max-w-[1200px] min-h-[90vh] mx-auto px-2 py-3 mt-0 md:mt-[84px] flex justify-center items-center">
      <div className="w-full md:w-[450px] bg-white rounded-md shadow-md p-5">
        <div className="flex flex-row gap-2">
          <button
            onClick={() => setForm(true)}
            className="py-3 px-2 rounded-tl-md focus:bg-primary-200 focus:text-white">
            Log In
          </button>
          <button
            className="py-3 px-2 rounded-tr-md focus:bg-primary-200 focus:text-white"
            onClick={() => setForm(false)}>
            Sign Up
          </button>
        </div>
        {form ? (
          <form className="flex flex-col gap-3 w-full ">
            <div className="flex flex-col justify-center items-center py-5 border-t-2 border-gray-200">
              <h1 className="text-xl font-bold text-slate-950">Log In</h1>
              <p className="text-gray-400">
                Please enter your Email and Password.
              </p>
            </div>
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
            <button className="w-full rounded-md bg-primary-200 py-3 text-white">
              Log In
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-3 w-full ">
            <div className="flex flex-col justify-center items-center py-5 border-t-2 border-gray-200">
              <h1 className="text-xl font-bold text-slate-950">Register</h1>
              <p className="text-gray-400">Please fill in the details.</p>
            </div>
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="First Name"
            />
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Last Name"
            />
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
            <input
              className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md outline-none"
              type="text"
              name=""
              id=""
              placeholder="Confirm Password"
            />
            <button className="w-full rounded-md bg-primary-200 py-3 text-white">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
