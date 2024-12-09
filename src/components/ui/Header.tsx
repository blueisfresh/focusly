const navLinks = [
  {
    href: "/about",
    label: "About",
  },
];

export default function Header() {
  return (
    <header>
      <nav className="m-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://utfs.io/f/MOA66ou6ZmXlNmtebPgAibelTwJZ3AvY5MBKsknp2dqmjUaP"
              alt="Logo"
              className="h-20 w-20"
            />
            <h1 className="text-4xl md:text-5xl font-bold md:hover:text-slate-500">
              Focusly
            </h1>
          </a>
          <ul className="font-medium flex flex-col md:flex-row md:items-center p-4 mt-4 md:mt-0">
            {" "}
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-xl py-4 px-6 text-slate-900 md:hover:text-slate-500 md:p-0 md:mr-6"
                >
                  <a href={link.href}>{link.label}</a>
                  {/* About Page should read the Markdown File */}
                </li>
              );
            })}
            <li className="text-xl py-4 px-6 text-slate-900 md:hover:text-slate-500 md:p-0 md:mr-6">
              {/* if no json file is read import instead */}
              <button className="text-white text-xl bg-slate-700 hover:bg-slate-800 font-medium rounded-lg px-5 py-2.5 me-2">
                Import
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
