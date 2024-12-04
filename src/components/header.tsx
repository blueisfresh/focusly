export default function Header() {
  // className="hidden w-full md:block md:w-auto"

  return (
    <nav className="m-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://utfs.io/f/MOA66ou6ZmXlNmtebPgAibelTwJZ3AvY5MBKsknp2dqmjUaP"
            alt="Logo"
            className="h-20 w-20"
          />
          <h1 className="text-4xl md:text-5xl font-bold md:dark:hover:text-slate-500">
            Focusly
          </h1>
        </a>
        <ul className="font-medium flex flex-col p-4 mt-4 md:flex-row">
          <li className="text-xl py-4 px-6 text-slate-900 md:hover:text-slate-500 md:p-0">
            <a href="/sign-in">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
