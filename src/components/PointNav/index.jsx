import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/hero.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img
                  className="h-20 w-20 mr-2 rounded-full"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex items-center ml-auto space-x-8">
              <ul className="hidden lg:flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="text-neutral-400 hover:text-neutral-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link
                to="/swap"
                className="neon-button py-3 px-6 rounded-[40px] ml-7"
              >
                Launch App
              </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-4">
                <Link to="/swap" className="neon-button py-3 px-4 rounded-lg">
                  Launch App
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="w-full h-[80px]"></div>
    </div>
  );
};

export default NavBar;
