import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

export const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/nivethan26", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nivethan-selvaratnam", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nivethan.nivethan26@gmail.com", label: "Email" },
  ];

  const handleDownloadCV = () => {
    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = '/Nivethan_Selvaratnam_CV.pdf';
    link.download = 'Nivethan_Selvaratnam_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Professional Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Slow-moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 animate-gradient-shift"></div>

        {/* Subtle animated glow accents */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slower"></div>

        {/* Very subtle floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-400/10 dark:bg-slate-400/20 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${20 + i * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                Undergraduate • Full Stack Developer
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-sm">
                <span className="text-slate-900 dark:text-white" style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.1)' }}>Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent" style={{ textShadow: '0 0 60px rgba(59, 130, 246, 0.2)' }}>
                  Nivethan Selvaratnam
                </span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 font-medium drop-shadow-sm">
                I build modern, scalable & delightful digital experiences
              </p>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Full Stack Developer specializing in creating high-performance web applications,
                clean user interfaces, and scalable backend systems using modern technologies like
                MERN, TypeScript, and cloud platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* View Projects Button - Primary Gradient */}
              <Button
                asChild
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 group/btn relative overflow-hidden border-0"
              >
                <Link to="/projects">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  View Projects
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                </Link>
              </Button>

              {/* Contact Me Button - Glass Morphism */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 border-2 border-blue-500/60 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 backdrop-blur-xl bg-white/30 dark:bg-slate-800/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 group/contact hover:scale-105"
              >
                <Link to="/contact">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/contact:scale-150 transition-transform duration-300"></div>
                  Contact Me
                </Link>
              </Button>

              {/* Download CV Button - Success Gradient with Loading Animation */}
              <Button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                size="lg"
                className={`h-14 px-8 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-500 group/download relative overflow-hidden border-0 ${
                  isDownloading ? 'opacity-90 cursor-not-allowed' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/download:translate-x-full transition-transform duration-700"></div>

                {isDownloading ? (
                  <>
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      <span>Preparing...</span>
                    </div>
                  </>
                ) : (
                  <>
                    <Download className="mr-3 h-5 w-5 transition-transform group-hover/download:scale-110 group-hover/download:-translate-y-1" />
                    Download CV
                  </>
                )}
              </Button>
            </div>

            {/* Download Progress Indicator */}
            {isDownloading && (
              <div className="animate-fadeIn">
                <div className="w-full max-w-md bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full animate-pulse-width"></div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 animate-pulse">
                  Preparing your CV download...
                </p>
              </div>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Accent blur behind avatar - with subtle pulse */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl scale-110 animate-pulse-slow"></div>

              <Avatar className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-2xl">
                <AvatarImage src="/profile.png" alt="Nivethan Selvaratnam" className="object-cover" />
                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-600 dark:text-blue-300 text-5xl font-bold">
                  NS
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};