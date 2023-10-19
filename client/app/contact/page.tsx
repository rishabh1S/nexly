"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    // Handle form submission here
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-md">
      <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-800 mb-4 sm:mb:6 text-center">
        Contact Us
      </h2>
      <p className="mb-6 lg:mb-12 text-md md:text-lg leading-relaxed text-center">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form onSubmit={submitForm} className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 ${
              email.length > 0 && email.length < 5 ? "ring-1 ring-red-500" : ""
            }`}
            placeholder="name@gmail.com"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
            placeholder="Let us know how we can help you"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message <span className="text-red-500 text-sm">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 ${
              message.length > 0 && message.length < 1
                ? "ring-1 ring-red-500"
                : ""
            }`}
            placeholder="Leave a comment..."
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-violet-600 sm:w-fit hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-green-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
