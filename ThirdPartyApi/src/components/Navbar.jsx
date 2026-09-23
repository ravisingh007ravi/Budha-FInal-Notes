import { useState } from "react";
import { FaGithub, FaInstagram, FaBars } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FiUsers, FiShoppingBag, FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const MENUData = [
    { icon: <FiUsers />, name: "All Users", link: "/all_users" },
    { icon: <FiShoppingBag />, name: "All Products", link: "/all_products" },
    { icon: <FiBox />, name: "All Stock", link: "/all_stock" },
  ];

  const SocialMediaLink = [
    { icon: <FaGithub />, link: "http://google.com/" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];

  return (
    <header className="fixed w-full px-4 py-4">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-5 py-3 text-zinc-900 shadow-2xl dark:bg-zinc-950 dark:text-white">

        <Link
          to="#"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-yellow-400 to-orange-500 text-lg font-black text-black"
        >
          RS
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {MENUData.map((item, i) => (
            <li key={i}>
              <Link
                to={item.link}
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <span className="text-yellow-500 dark:text-yellow-400">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-2 md:flex">
          {SocialMediaLink.map((item, i) => (
            <li key={i}>
              <a
                target="blank"
                href={item.link}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 hover:bg-yellow-400 hover:text-black dark:bg-white/5 dark:text-zinc-300"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setToggle(!toggle)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-white/5 dark:text-white md:hidden"
        >
          {toggle ? (
            <IoCloseSharp className="text-yellow-500 dark:text-yellow-400" />
          ) : (
            <FaBars />
          )}
        </button>

        {toggle && (
          <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl bg-white p-3 text-zinc-900 shadow-2xl dark:bg-zinc-950 dark:text-white md:hidden">
            <ul>
              {MENUData.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/10"
                  >
                    <span className="text-yellow-500 dark:text-yellow-400">
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-2 border-t border-zinc-200 dark:border-white/10" />

            <ul className="flex justify-center gap-3 py-3">
              {SocialMediaLink.map((item, i) => (
                <li key={i}>
                  <a
                    target="blank"
                    href={item.link}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 hover:bg-yellow-400 hover:text-black dark:bg-white/5 dark:text-zinc-300"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
