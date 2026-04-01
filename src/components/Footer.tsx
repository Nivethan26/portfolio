import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nivethan26",
      label: "GitHub",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nivethan-selvaratnam",
      label: "LinkedIn",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:nivethan.nivethan26@gmail.com",
      label: "Email",
      color: "hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Text */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm order-2 md:order-1">
            <span>© {new Date().getFullYear()} Nivethan Selvaratnam. All rights reserved.</span>
          </div>

          {/* Social Links - Centered on mobile */}
          <div className="flex items-center gap-1 order-1 md:order-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className={`rounded-full w-10 h-10 transition-all duration-300 ${link.color} group`}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              </Button>
            ))}
          </div>

          {/* Made with love - Right side on desktop */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm order-3">
            <span className="hidden sm:inline">Designed & developed by Nivethan</span>
          </div>
        </div>

        {/* Mobile-only centered attribution */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4 md:hidden">
          <span>Designed & developed by Nivethan</span>
        </div>
      </div>
    </footer>
  );
};