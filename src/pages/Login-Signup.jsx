import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useApiContext } from "../context/DataContext/ContextApi";

const LoginSignup = () => {
  const [form, setForm] = useState(true);
  const { setLoggedIn, loggedIn, setUser } = useApiContext();
  const [signUpError, setSignUpError] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().required("Enter Username"),
    password: yup
      .string()
      .min(7, "Password too short")
      .max(20)
      .required("Input Password"),
  });

  const signUpSchema = yup.object().shape({
    firstName: yup.string().required("Enter First Name"),
    lastName: yup.string().required("Enter Last Name"),
    email: yup.string().required("Enter Username"),
    password: yup
      .string()
      .min(7, "Password too short")
      .max(20)
      .required("Input Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(form ? loginSchema : signUpSchema),
  });

  const loginSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (
        userData.password === data.password &&
        userData.email === data.email
      ) {
        setLoggedIn(true);
        setUser(userData);
      } else {
        console.log("Incorrect Credentials!");
      }
    } else {
      console.log("No Data match");
    }
  };

  const onSignup = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      })
    );
    setSignUpError(!signUpError);
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };

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
          <form
            onSubmit={handleSubmit(loginSubmit)}
            className="flex flex-col gap-3 w-full ">
            <div className="flex flex-col justify-center items-center py-5 border-t-2 border-gray-200">
              <h1 className="text-xl font-bold text-slate-950">Log In</h1>
              <p className="text-gray-400">
                Please enter your Email and Password.
              </p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full"
                type="text"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.email?.message}
              </p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full"
                type="password"
                name="password"
                placeholder="password"
                {...register("password")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.password?.message}
              </p>
            </div>
            <button className="w-full rounded-md bg-primary-200 py-3 text-white">
              Log In
            </button>
            {loggedIn ? (
              <p className="px-2 py-3 text-green-400 text-center border-2 border-green-400">
                Login Successful!
              </p>
            ) : (
              ""
            )}
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(onSignup)}
            className="flex flex-col gap-3 w-full ">
            <div className="flex flex-col justify-center items-center py-5 border-t-2 border-gray-200">
              <h1 className="text-xl font-bold text-slate-950">Register</h1>
              <p className="text-gray-400">Please fill in the details.</p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                name="firstName"
                placeholder="First Name "
                {...register("firstName")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.lastName?.message}
              </p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full"
                type="text"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.email?.message}
              </p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full"
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.password?.message}
              </p>
            </div>
            <div className="border-2 w-full h-auto border-gray-200 px-2 py-3 rounded-md relative">
              <input
                className="outline-none w-full"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              <p className="absolute right-5 top-[50%] translate-y-[-50%] text-red-400 text-sm">
                {errors.confirmPassword?.message}
              </p>
            </div>
            <button className="w-full rounded-md bg-primary-200 py-3 text-white">
              Sign Up
            </button>
            {signUpError ? (
              <p className="px-2 py-3 text-green-400 text-center border-2 border-green-400">
                Signup Successful!
              </p>
            ) : (
              ""
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
