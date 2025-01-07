import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent hover:from-violet-500 hover:to-indigo-500 transition-all duration-300">
                Owen Corp
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300"
                >
                  {item.title}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-medium text-sm hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-violet-600 hover:bg-gray-100/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto max-h-screen overflow-y-auto"
            : "opacity-0 pointer-events-none max-h-0 overflow-y-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-50 transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-violet-600 bg-violet-50"
                  : ""
              }`}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium text-base hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 text-center"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
