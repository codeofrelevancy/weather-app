# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Create your project

Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```markdown
npx create-next-app@latest weather-app --typescript --eslint
cd weather-app
```

### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```markdown
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```markdown
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```markdown
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependencies

### Heroicons

Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
Available as basic SVG icons and via first-party React and Vue libraries.

NPM:

```markdown
https://www.npmjs.com/package/@heroicons/react
```

Install:

```markdown
npm install @heroicons/react
```

## Tailwind Theme Config

```markdown
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT:  '#5e17eb',
          100: '#5515d4',
          200: '#4b12bc',
          300: '#4210a5',
          400: '#380e8d',
          500: '#2f0c76',
          600: '#26095e',
          700: '#1c0747',
          800: '#13052f',
          900: '#090217',
        }
      },
    },
  },
  plugins: [],
}

```

## Open Weather API

```markdown
https://api.openweathermap.org/data/2.5/weather?q=location&appid=YOUR_API_KEY
```

## .env

```markdown
NEXT_PUBLIC_OPEN_WEATHER_APP_ID=022ec5ae6fb82fcf2177604923407dbd
```

## Meta

Component:

```markdown
import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Weather App | Code of Relevancy</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Weather app is developed by Code of Relevancy"
      />
      <meta
        name="keywords"
        content="code, relavancy, weather app, next.js, typescript, tailwind css, open weather"
      />
      <meta name="author" content="Parimal Nakrani" />
      <meta
        name='msapplication-TileImage'
        content='/code-of-relevancy-logo.png'
      />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Weather App' />
      <meta
        property='og:description'
        content='Weather app is developed by Code of Relevancy'
      />
      <meta
        property='og:url'
        content='https://linktr.ee/codeofrelevancy?utm_source=weather-app&utm_medium=meta&utm_campaign=promotion'
      />
      <meta property='og:site_name' content='Code of Relevancy' />
      <meta property='og:image' content='/code-of-relevancy-logo.png' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='Weather App' />
      <meta
        name='twitter:description'
        content='Weather app is developed by Code of Relevancy'
      />
      <meta name='twitter:image' content='/code-of-relevancy-logo.png' />
      <meta name='twitter:image:alt' content='Code of Relevancy' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@codeofrelevancy' />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
```

## Banner

Component:

```markdown
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
```

Use Banner component

```markdown
<Banner
  message="Get ready to learn how to build weather app with our YouTube tutorial! We can't wait to share it with you."
  link="https://www.youtube.com/@codeofrelevancy?utm_source=weather-app&utm_medium=banner&utm_campaign=promotion"
/>
```

## Header

Component:

```markdown
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-8"
                src="/code-of-relevancy-logo.png"
                alt="Code of Relevancy"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="https://github.com/codeofrelevancy?utm_source=weather-app&utm_medium=cpc&utm_campaign=promotion"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              target="_blank"
              rel="noreferrer"
            >
              Developers
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
```

## Search Bar

Search icon:

```markdown
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-gray-500 dark:text-gray-400"
    stroke="currentColor"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
</svg>
```

Cross icon:

```markdown
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6 absolute right-2.5 bottom-4 text-gray-500 dark:text-gray-400 cursor-pointer"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
```

## Loader

Component:

```markdown
import React from "react";

interface Props {
  status: boolean;
}

export default function Loader({ status }: Props) {
  if (!status) return null;

  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

```markdown
Loading...
```

## Weather Card

Icon URL:

```markdown
http://openweathermap.org/img/wn/@2x.png
```

```markdown
°F
```

```markdown
Humidity: x%
```

```markdown
Wind: x mph
```

## Alert

Exclamation icon:

```markdown
<svg
  className="w-5 h-5 mr-2 text-red-900 dark:text-red-800"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
    clipRule="evenodd"
  ></path>
</svg>;
```

```markdown
Info
```

```markdown
Something went wrong!
```

```markdown
Dismiss
```

## Get Started

Component:

```markdown
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
```

## Footer

Component:

```markdown
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
```

## Types

```markdown
interface weatherState {
  temperature: number;
  description: string;
  humidity: string;
  windSpeed: number;
  icon: string;
}

export type { weatherState };
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
