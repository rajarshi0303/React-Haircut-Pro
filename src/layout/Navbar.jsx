import React from "react";

import { FloatingNavbar } from "../components/animation/FloatingNavbar";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div>
      <div className="relative w-full">
        <FloatingNavbar navItems={navItems} />
      </div>
    </div>
  );
}
