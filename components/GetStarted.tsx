import React from "react";

export default function GetStarted() {
  return (
    <div className="bg-white pt-20">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-brand">
            Experience all that we offer.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.youtube.com/@codeofrelevancy?utm_source=weather-app&utm_medium=cpc&utm_campaign=promotion"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-brand px-5 py-3 text-base font-medium text-white hover:bg-brand-100"
              target="_blank"
              rel="noreferrer"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://linktr.ee/codeofrelevancy?utm_source=weather-app&utm_medium=cpc&utm_campaign=promotion"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-brand hover:bg-indigo-50"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
