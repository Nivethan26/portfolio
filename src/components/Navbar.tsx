import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-card shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Professional & Stylish Logo Only */}
        <NavLink
          to="/"
          className="relative group"
        >
          {/* Professional Glass Container */}
          <div className={cn(
            "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
            "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl",
            "border border-slate-200/60 dark:border-slate-700/60",
            "shadow-lg hover:shadow-xl",
            "group-hover:scale-105 group-hover:-translate-y-0.5",
            "transform-gpu"
          )}>
            {/* Elegant Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Subtle Hover Border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
              <div className="absolute inset-[1px] rounded-xl bg-white dark:bg-slate-900"></div>
            </div>

            {/* Professional Initials */}
            <span className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              NS
            </span>

            {/* Status Dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"></div>
          </div>
        </NavLink>

        {/* Desktop Navigation - Original */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Button - Original */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Original */}
      {isMenuOpen && (
        <div className="md:hidden glass-card mt-4 mx-4 rounded-lg p-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 rounded-md text-foreground/70 hover:bg-primary/10 hover:text-foreground transition-all"
              activeClassName="bg-primary/20 text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};