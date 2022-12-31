/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="pb-10">
        <img
          className="mx-auto h-14"
          src="/code-of-relevancy-logo.png"
          alt="Code of Relevancy"
        />
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2022 Code of Relevancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
