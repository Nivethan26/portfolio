import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, Star, Calendar, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectShowcase = () => {
  const projects = [
    {
      title: "Smart Pharmacy Management System",
      description: "Enterprise-level pharmacy management system with real-time inventory, sales analytics, and multi-role access control.",
      tech: ["MongoDB", "Express", "React", "Next.js", "JWT", "REST API"],
      image: "/Smart Pharmacy Management System.png",
      github: "https://github.com/Nivethan26/Project-02-Frontend",
      status: "Completed",
      category: "Full Stack",
      featured: true,
      year: "2025"
    },
    {
      title: "AgriLink – Agricultural Marketplace",
      description: "MERN marketplace for farmers with role-based dashboards, secure authentication, and real-time features.",
      tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind", "Redux"],
      image: "/AgriLink.png",
      github: "https://github.com/Nivethan26/Farmer-s-Gate",
      status: "In Progress",
      category: "E-commerce",
      featured: true,
      year: "2025"
    },
    {
      title: "Auto Care Lanka",
      description: "Service station management system with booking system, career portal, and service tracking.",
      tech: ["PHP", "React", "MySQL", "REST API", "Bootstrap"],
      image: "/AutoCare.png",
      github: "https://github.com/Nivethan26/Project-01-Frontend-Final",
      status: "Completed",
      category: "Service Management",
      featured: false,
      year: "2023"
    },
  ];

  const getCategoryStyle = (category) => {
    const styles = {
      "Full Stack": { 
        gradient: "from-blue-500 to-cyan-500",
        light: "from-blue-500/20 to-cyan-500/20",
        accent: "text-blue-600 dark:text-blue-400",
        glow: "hover:shadow-blue-500/20",
        button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
      },
      "E-commerce": { 
        gradient: "from-purple-500 to-pink-500",
        light: "from-purple-500/20 to-pink-500/20",
        accent: "text-purple-600 dark:text-purple-400",
        glow: "hover:shadow-purple-500/20",
        button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      },
      "Service Management": { 
        gradient: "from-orange-500 to-red-500",
        light: "from-orange-500/20 to-red-500/20",
        accent: "text-orange-600 dark:text-orange-400",
        glow: "hover:shadow-orange-500/20",
        button: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
      }
    };
    return styles[category] || styles["Full Stack"];
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 -left-10 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 -right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-float-fast"></div>
      </div>

      <div className="container mx-auto">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
            Featured
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Modern Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const style = getCategoryStyle(project.category);
            
            return (
              <Card
                key={project.title}
                className={`group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl ${style.glow} transition-all duration-700 animate-slideUp bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden flex-shrink-0">
                  {/* Image with Modern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Modern Badges - Only Category Badge on Image */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className={`px-3 py-1.5 rounded-full backdrop-blur-sm border-0 ${style.accent} bg-white/90 dark:bg-slate-800/90 text-sm font-semibold shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Featured Ribbon */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs font-semibold shadow-lg">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Hover Effect Dots */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-200"></div>
                </div>

                {/* Content Section - This will grow and push button to bottom */}
                <div className="p-6 relative z-10 flex-1 flex flex-col">
                  {/* Header with Year and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === "Completed" 
                        ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
                        : "bg-blue-500/20 text-blue-600 dark:text-blue-400 animate-pulse"
                    }`}>
                      {project.status === "In Progress" && (
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 animate-pulse"></div>
                      )}
                      {project.status}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies - Modern Tags */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:scale-105 hover:shadow-lg transition-all duration-300 group-hover:border-blue-500/30"
                          style={{ 
                            animationDelay: `${techIndex * 0.05}s`,
                            transitionDelay: `${techIndex * 0.05}s` 
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge 
                          className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:scale-105 transition-transform duration-300"
                        >
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* View on GitHub Button - Fixed at bottom */}
                  <div className="mt-auto pt-4">
                    <Button
                      size="lg"
                      className={`w-full ${style.button} text-white shadow-lg hover:shadow-xl group/btn transition-all duration-300 hover:scale-105 backdrop-blur-sm h-12`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View on GitHub
                        <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:scale-110 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Modern Border Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[1.5px] rounded-xl bg-white dark:bg-slate-900"></div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-500 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-500 rounded-bl-xl"></div>
              </Card>
            );
          })}
        </div>

        {/* Modern CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 max-w-2xl mx-auto border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl">
            <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              Ready to See More?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore all my projects and discover the full scope of my work
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-xl hover:shadow-2xl group transition-all duration-300 hover:scale-105"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};