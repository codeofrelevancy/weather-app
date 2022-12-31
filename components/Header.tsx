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
