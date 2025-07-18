"use client";

import React, { useState } from "react";
import contentData from "@/data/json/content.json";

export const ConsultationSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Request Demo");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to request a demo.\n\nHere is my email: ${email}\n\nThank you.`
    );

    window.location.href = `mailto:${contentData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-10 bg-white dark:bg-black sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <div>
            <h2 className="text-4xl font-bold  lg:max-w-md">Request Demo</h2>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-200 lg:max-w-md lg:mt-0">
              Book Your Complimentary Consult Today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-10 mt-8 lg:mt-0 lg:px-0">
            <div className="sm:flex sm:justify-center lg:justify-end">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email to get started"
                  required
                  className="block w-full px-4 py-4 text-base  placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              >
                Get Started Free
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
