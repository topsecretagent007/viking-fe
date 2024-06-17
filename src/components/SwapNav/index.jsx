import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/hero.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const index = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="container px-4 mx-auto relative flex justify-between items-center">
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
              {/* Navigation items */}
              <ul className="hidden lg:flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to}>
                      <a
                        href={item.href}
                        className="text-neutral-400 hover:text-neutral-200"
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a className="neon-button py-3 px-6 rounded-[40px] ml-7" href="#">
                Connect Wallet
              </a>
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
                    <Link to={item.to}>
                      <a href={item.href}>{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="neon-button py-3 px-4 rounded-lg">
                  Connect Wallet
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="w-full h-[80px]"></div>
    </div>
  );
};

export default index;
