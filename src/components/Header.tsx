"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Utility function for NavLink classes
const getDesktopNavLinkClasses = ({ isActive }: { isActive: boolean }) => `
  relative flex items-center justify-center gap-2 group pb-2 
  transition-colors duration-200 ease-in-out
  ${isActive ? "" : "hover:text-blue-primary"}
  after:content-[''] after:absolute after:bottom-0 after:left-0 
  after:h-[2px] after:bg-primary after:transition-all 
  after:duration-300 after:ease-in-out
  ${isActive ? "md:after:w-full " : "group-hover:after:w-full after:w-0"}
`;

type NavItem = {
  name: string;
  href: string;
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // Navbar items
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle scroll shadow effect
 useEffect(() => {
  const handleScroll = () => {
    const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
    const threshold = isMobile ? 10 : 80;   // bigger threshold for mobile
    setIsScrolled(window.scrollY > threshold);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // Toggle dark/light theme
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
   <header
  className={`fixed w-full md:max-w-8xl mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "backdrop-blur-lg bg-white/70 dark:bg-black/60 border-b border-white/20 dark:border-white/10 shadow-lg"
      : `${isHome ? "text-black dark:text-white" : "text-white"}`
  }`}
>

      <div className=" lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">TechFlow</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={getDesktopNavLinkClasses({ isActive })}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden   z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
       {/* Mobile Navigation */}
{isMenuOpen && (
  <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/20"
      onClick={() => setIsMenuOpen(false)}
      aria-hidden="true"
    />

    {/* Menu panel */}
    <div className="relative z-50 bg-white dark:bg-black mx-auto p-4 h-auto w-full overflow-y-auto shadow-md">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`block text-foreground ${getDesktopNavLinkClasses({
              isActive,
            })}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        );
      })}

      <div className="mt-4 px-3 py-2">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </div>
  </div>
)}


      </div>
    </header>
  );
}
