"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const AuthenticationModal = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [isRegistrationForm, setRegistrationForm] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleRegistrationForm = () => {
    setRegistrationForm(!isRegistrationForm);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black backdrop-blur-sm">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button
                onClick={toggleModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              >
                <MdClose size={20} />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  {isRegistrationForm
                    ? "Create an account"
                    : "Sign in to our platform"}
                </h3>
                <form className="space-y-6" action="#">
                  {isRegistrationForm && (
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      href=""
                      className="text-sm text-violet-700 hover:underline"
                    >
                      Lost Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {isRegistrationForm
                      ? "Create Account"
                      : "Login to your account"}
                  </button>
                  <div className="text-sm font-medium text-gray-500">
                    {isRegistrationForm
                      ? "Already registered? "
                      : "Not registered? "}
                    <Link
                      href=""
                      onClick={toggleRegistrationForm}
                      className="text-violet-700 hover:underline"
                    >
                      {isRegistrationForm ? "Sign in" : "Create account"}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationModal;
