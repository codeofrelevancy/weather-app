import React from "react";
import { MegaphoneIcon } from "@heroicons/react/24/outline";

interface Props {
  message: string;
  link: string;
}

export default function Banner({ message, link }: Props) {
  return (
    <div className="bg-brand">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-brand-800 p-2">
              <MegaphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:inline">{message}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href={link}
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-brand-600 shadow-sm hover:bg-brand-50"
              target="_blank"
              rel="noreferrer"
            >
              Watch now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
