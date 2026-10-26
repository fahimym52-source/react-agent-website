import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-10">
      <div className="relative flex items-center justify-between px-10 py-6">
        <NavLink className="text-2xl font-bold text-primary" to="/">
          Start Bootstrap
        </NavLink>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-primary hover:text-primary transition-colors duration-200"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <ul
          className={`${isMenuOpen ? "flex" : "hidden"} absolute top-full left-0 w-full  md:static md:w-auto flex-col gap-5 bg-white px-6 py-6 shadow-md  md:flex-row md:gap-10 md:bg-transparent md:px-0 md:shadow-none md:flex `}
        >
          <li className="">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white   hover:text-primary-hover"
                      : "text-black  hover:text-primary-hover"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white  hover:text-primary-hover"
                      : "text-black   hover:text-primary-hover"
              }
              to="/services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white  hover:text-primary-hover"
                      : "text-black  hover:text-primary-hover"
              }
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white   hover:text-primary-hover"
                      : "text-black   hover:text-primary-hover"
              }
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white hover:text-primary-hover"
                      : "text-black  hover:text-primary-hover"
              }
              to="/team"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white  hover:text-primary-hover"
                      : "text-black  hover:text-primary-hover"
              }
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary, "
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white  hover:text-primary-hover"
                      : "text-black   hover:text-primary-hover"
              }
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary "
                  : isMenuOpen
                    ? "text-black hover:text-primary-hover"
                    : isHome && !scrolled
                      ? "text-white  hover:text-primary-hover"
                      : "text-black  hover:text-primary-hover"
              }
              to="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
