import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Github, Star, Calendar, Play, Sparkles, Rocket, Code2, Palette, Layers, Target, Users, Zap, Clock, User, Globe, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Smart Pharmacy Management System",
      description: "Enterprise-level pharmacy management system designed to streamline pharmacy operations with real-time tracking and comprehensive inventory management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Next.js", "JWT", "REST API"],
      features: [
        "Automated inventory tracking & management",
        "Sales & consultancy handling",
        "Real-time stock counting system",
        "Multi-user access control",
        "Comprehensive reporting dashboard",
        "Prescription management system"
      ],
      image: "/Smart Pharmacy Management System.png",
      github: "https://github.com/Nivethan26/Project-02-Frontend",
      live: "#",
      status: "Completed",
      category: "Full Stack",
      year: "2025",
      featured: true,
      complexity: "Advanced",
      duration: "3 months",
      team: "Team",
      impact: "Enterprise Solution",
    },
    {
      title: "AgriLink – Agricultural Marketplace",
      description: "MERN-based marketplace platform connecting farmers, buyers, and agents with role-based dashboards and secure authentication system.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux"],
      features: [
        "Role-based dashboards",
        "Secure authentication system",
        "Real-time marketplace",
        "Product management system",
        "Payment integration",
        "Order tracking system"
      ],
      image: "/AgriLink.png",
      github: "https://github.com/Nivethan26/Farmer-s-Gate",
      live: "#",
      status: "In Progress",
      category: "E-commerce",
      year: "2025",
      featured: true,
      complexity: "Advanced",
      duration: "Ongoing",
      team: "Team",
      impact: "Agricultural Tech",
    },
    {
      title: "Smart Expense Tracker",
      description: "Complete expense management system with budget tracking, real-time alerts, and AI-powered spending insights for efficient financial management.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Mongoose", "Nodemailer", "OpenAI API", "REST API"],
      features: [
        "Expense tracking and categorization",
        "Budget monitoring and alerts",
        "AI-powered spending insights",
        "Email notifications",
        "Secure user authentication",
        "Expense reports and analytics"
      ],
      image: "/Smart Expense Tracker.png",
      github: "https://github.com/Nivethan26/Smart-Expense-Tracking-System",
      live: "#",
      status: "Completed",
      category: "Finance Tech",
      year: "2025",
      featured: false,
      complexity: "Intermediate",
      duration: "2 months",
      team: "Solo",
      impact: "AI-Driven Personal Finance Solution",
    },
    {
      title: "Auto Care Lanka",
      description: "Complete management system for automobile service stations with pre-booking appointments and comprehensive service tracking.",
      tech: ["PHP", "React", "MySQL", "REST API", "Bootstrap"],
      features: [
        "Pre-booking appointment system",
        "Career opportunities portal",
        "Knowledge transfer platform",
        "Service history tracking",
        "Customer management system",
        "Inventory management"
      ],
      image: "/AutoCare.png",
      github: "https://github.com/Nivethan26/Project-01-Frontend-Final",
      live: "#",
      status: "Completed",
      category: "Service Management",
      year: "2023",
      featured: false,
      complexity: "Intermediate",
      duration: "2 months",
      team: "Team",
      impact: "Service Industry",
    },
    {
      title: "Food Recipe Platform",
      description: "Interactive food recipe platform with search functionality and user recipe uploads built with Django and modern UI.",
      tech: ["Django", "Python", "SQLite", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Advanced recipe search",
        "User recipe uploads",
        "Recipe categorization",
        "User authentication system",
        "Rating and reviews",
        "Social sharing features"
      ],
      image: "/FoodRecipe.png",
      github: "https://github.com/Nivethan26/RecipeSite-Django",
      live: "#",
      status: "Completed",
      category: "Web Application",
      year: "2024",
      featured: false,
      complexity: "Intermediate",
      duration: "2 months",
      team: "Team",
      impact: "Food Tech",
    },
    {
      title: "Weather App",
      description: "Mobile weather application with accurate forecasting and real-time weather data in a modern, responsive interface.",
      tech: ["Vite", "React", "Tailwind CSS", "Weather API", "PWA"],
      features: [
        "Location-based forecasting",
        "Real-time weather updates",
        "Modern responsive UI",
        "Progressive Web App",
        "Offline functionality",
        "Weather alerts"
      ],
      image: "/WeatherApp.png",
      github: "https://github.com/Nivethan26/Weather-App",
      live: "#",
      status: "Completed",
      category: "Mobile App",
      year: "2023",
      featured: false,
      complexity: "Beginner",
      duration: "1 month",
      team: "Solo",
      impact: "Utility App",
    },
  ];

  const getComplexityColor = (complexity: string) => {
    const colors = {
      "Beginner": { gradient: "from-green-400 to-emerald-500", bg: "bg-green-500/20", text: "text-green-400" },
      "Intermediate": { gradient: "from-blue-400 to-cyan-500", bg: "bg-blue-500/20", text: "text-blue-400" },
      "Advanced": { gradient: "from-purple-400 to-pink-500", bg: "bg-purple-500/20", text: "text-purple-400" }
    };
    return colors[complexity as keyof typeof colors] || colors["Intermediate"];
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      "Full Stack": <Layers className="h-4 w-4 sm:h-5 sm:w-5" />,
      "E-commerce": <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
      "Service Management": <Target className="h-4 w-4 sm:h-5 sm:w-5" />,
      "Web Application": <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />,
      "Mobile App": <Zap className="h-4 w-4 sm:h-5 sm:w-5" />,
      "Finance Tech": <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
    };
    return icons[category as keyof typeof icons] || <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Enhanced Geometric Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-500"></div>
          <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 border-2 border-cyan-500/30 dark:border-cyan-400/30 rotate-45 animate-spin-slow transition-colors duration-500"></div>
          <div className="absolute bottom-20 right-4 md:right-10 w-12 h-12 md:w-24 md:h-24 border-2 border-pink-500/30 dark:border-pink-400/30 rounded-full animate-bounce-medium transition-colors duration-500"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 border-2 border-green-500/30 dark:border-green-400/30 rotate-12 animate-ping-slow transition-colors duration-500"></div>
          <div className="absolute top-40 right-10 md:right-20 w-0 h-0 border-l-[12px] md:border-l-[20px] border-l-transparent border-r-[12px] md:border-r-[20px] border-r-transparent border-b-[20px] md:border-b-[35px] border-b-blue-500/20 dark:border-b-blue-400/20 animate-float-random-1 transition-colors duration-500"></div>
          <div className="absolute bottom-40 left-10 md:left-20 w-0 h-0 border-l-[10px] md:border-l-[15px] border-l-transparent border-r-[10px] md:border-r-[15px] border-r-transparent border-t-[15px] md:border-t-[25px] border-t-purple-500/20 dark:border-t-purple-400/20 animate-float-random-2 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Header */}
          <div className="text-center mb-12 md:mb-16 px-2 animate-glow-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 mb-6 md:mb-8 transition-colors duration-500">
              <Rocket className="h-4 w-4 md:h-5 md:w-5 text-cyan-600 dark:text-cyan-400 animate-bounce transition-colors duration-500" />
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold text-xs md:text-sm transition-colors duration-500">Project Portfolio</span>
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-cyan-600 dark:text-cyan-400 animate-pulse transition-colors duration-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 animate-text-shine leading-tight transition-colors duration-500">
              PROJECTS
            </h1>
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 mx-auto mb-4 md:mb-6 animate-width-grow transition-colors duration-500"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 transition-colors duration-500">
              A curated collection of my work showcasing <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-500">technical expertise</span> and {" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold transition-colors duration-500">innovative solutions</span> across various domains
            </p>
          </div>

          {/* Single Project Per Row Layout */}
          <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const complexity = getComplexityColor(project.complexity);
              
              return (
                <Card
                  key={project.title}
                  className="group relative overflow-hidden border border-slate-200 dark:border-0 bg-white/80 dark:bg-transparent dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/70 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-xl dark:md:shadow-2xl transition-all duration-700 animate-card-enter hover:scale-[1.01] md:hover:scale-[1.02] mx-2"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '0.8s'
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] transition-colors duration-500"></div>
                  
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                    {/* Left Column - Image */}
                    <div className="relative h-64 sm:h-72 md:h-80 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                    
                    {/* Project Image with Fallback */}
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'none';
                          }
                        }}
                      />
                      
                      {/* Fallback Content - Shows when image fails to load */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-col p-4"
                        style={{ display: 'none' }} // Hidden by default, shown only when image fails
                      >
                        <Code2 className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-2 opacity-50 text-white" />
                        <p className="text-sm md:text-base opacity-70 text-white text-center">{project.title}</p>
                        <p className="text-xs opacity-50 text-white mt-1">{project.category}</p>
                      </div>
                    </div>
                      
                      {/* Complexity Badge */}
                      <div className={`absolute top-3 left-3 md:top-4 md:left-4 z-20 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r ${complexity.gradient} shadow-lg md:shadow-2xl backdrop-blur-sm border border-white/20`}>
                        {project.complexity} Level
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 flex items-center gap-1 md:gap-2">
                        {project.featured && (
                          <div className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                            <Star className="h-2 w-2 md:h-3 md:w-3 text-yellow-400 fill-current animate-spin-slow" />
                            <span className="text-xs text-yellow-400 font-medium hidden xs:inline">Featured</span>
                          </div>
                        )}
                        <div className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                          project.status === "Completed" 
                            ? "bg-green-500/20 text-green-400 border-green-500/30" 
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse"
                        }`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Project Meta Overlay */}
                      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20">
                        <div className="flex items-center gap-2 md:gap-4 text-white text-xs md:text-sm">
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="space-y-4 md:space-y-6">
                        {/* Header */}
                        <div>
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                            <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full border border-slate-200 dark:border-slate-600/50 transition-colors duration-500">
                              {getCategoryIcon(project.category)}
                              <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium transition-colors duration-500">{project.category}</span>
                            </div>
                          </div>
                          
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-transparent dark:group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 dark:group-hover:from-cyan-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 mb-2 md:mb-3 leading-tight">
                            {project.title}
                          </h2>
                          
                          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed transition-colors duration-500">
                            {project.description}
                          </p>
                        </div>

                        {/* Features Section */}
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2 transition-colors duration-500">
                            <Zap className="h-4 w-4 md:h-5 md:w-5 text-cyan-600 dark:text-cyan-400 transition-colors duration-500" />
                            Key Features
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                            {project.features.slice(0, 4).map((feature, idx) => (
                              <div 
                                key={feature}
                                className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg md:rounded-xl group/feature hover:bg-slate-100 dark:hover:bg-slate-700/40 transition-all duration-300 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-600/20 dark:hover:border-cyan-400/20"
                              >
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-1.5 md:mt-2 group-hover/feature:scale-150 group-hover/feature:bg-purple-600 dark:group-hover/feature:bg-purple-400 transition-all duration-300 flex-shrink-0"></div>
                                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 flex-1 leading-relaxed transition-colors duration-500">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2 transition-colors duration-500">
                            <Palette className="h-4 w-4 md:h-5 md:w-5 text-purple-600 dark:text-purple-400 transition-colors duration-500" />
                            Technology Stack
                          </h3>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {project.tech.slice(0, 4).map((tech, techIndex) => (
                              <Badge
                                key={tech}
                                className="px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-all duration-300 hover:shadow-lg hover:border-cyan-600/30 dark:hover:border-cyan-400/30 group/tech backdrop-blur-sm text-xs md:text-sm"
                                style={{ 
                                  animationDelay: `${techIndex * 0.1}s`,
                                  animation: 'tech-badge-enter 0.5s ease-out forwards'
                                }}
                              >
                                <Code2 className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 group-hover/tech:scale-110 transition-transform duration-300" />
                                {tech}
                              </Badge>
                            ))}
                            {project.tech.length > 4 && (
                              <Badge className="px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs md:text-sm transition-colors duration-500">
                                +{project.tech.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
                          <Button
                            size="lg"
                            className="flex-1 py-3 md:py-0 h-auto md:h-11 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 bg-[length:200%_auto] hover:bg-[position:right_center] border border-slate-600/50 hover:border-slate-500 text-white shadow-lg hover:shadow-xl group/btn transition-all duration-500 hover:scale-105 backdrop-blur-sm text-sm md:text-base font-medium"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-300" />
                              Source Code
                            </a>
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="lg"
                                className="flex-1 py-3 md:py-0 h-auto md:h-11 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-cyan-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white shadow-lg hover:shadow-xl group/btn transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm md:text-base font-medium w-full sm:w-auto"
                              >
                                <Play className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                                Live Demo
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl w-full p-0 bg-black/95">
                              <AspectRatio ratio={16 / 9} className="w-full">
                                <video
                                  src={
                                    project.title === "Smart Pharmacy Management System"
                                      ? "/demo/Smart Pharmacy Management System Demo.mp4"
                                      : project.title === "Smart Expense Tracker"
                                      ? "/expense-demo.mp4"
                                      : project.title === "AgriLink – Agricultural Marketplace"
                                      ? "/agrilink-demo.mp4"
                                      : project.title === "Auto Care Lanka"
                                      ? "/demo/AutoCare.mp4"
                                      : project.title === "Food Recipe Platform"
                                      ? "/foodrecipe-demo.mp4"
                                      : project.title === "Weather App"
                                      ? "/demo/Weather App.mp4"
                                      : ""
                                  }
                                  controls
                                  autoPlay
                                  className="w-full h-full rounded-b-lg bg-black"
                                  poster={project.image}
                                >
                                  Sorry, your browser does not support embedded videos.
                                </video>
                              </AspectRatio>
                              <div className="flex justify-between items-center px-4 py-2 bg-black/80 rounded-b-lg">
                                <span className="text-xs text-white/70">Demo Video: {project.title}</span>
                                <DialogClose asChild>
                                  <button
                                    onClick={(e) => {
                                      // Stop the video before closing
                                      const dialog = e.currentTarget.closest('[role="dialog"]');
                                      if (dialog) {
                                        const video = dialog.querySelector('video');
                                        if (video) {
                                          video.pause();
                                          video.currentTime = 0;
                                        }
                                      }

                                      const videoUrl = project.title === "Smart Pharmacy Management System"
                                        ? "/demo/Smart Pharmacy Management System Demo.mp4"
                                        : project.title === "Smart Expense Tracker"
                                        ? "/expense-demo.mp4"
                                        : project.title === "AgriLink – Agricultural Marketplace"
                                        ? "/agrilink-demo.mp4"
                                        : project.title === "Auto Care Lanka"
                                        ? "/demo/AutoCare.mp4"
                                        : project.title === "Food Recipe Platform"
                                        ? "/foodrecipe-demo.mp4"
                                        : project.title === "Weather App"
                                        ? "/demo/Weather App.mp4"
                                        : "";
                                      
                                      if (videoUrl) {
                                        const newWindow = window.open("", "_blank");
                                        if (newWindow) {
                                          newWindow.document.write(`
                                            <!DOCTYPE html>
                                            <html>
                                              <head>
                                                <title>${project.title} - Demo</title>
                                                <style>
                                                  body { margin: 0; background: #000; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden; font-family: sans-serif; }
                                                  video { max-width: 100%; max-height: 100%; outline: none; }
                                                </style>
                                              </head>
                                              <body>
                                                <video controls autoplay src="${videoUrl}"></video>
                                              </body>
                                            </html>
                                          `);
                                          newWindow.document.close();
                                        }
                                      }
                                    }}
                                    className="flex items-center gap-1 text-cyan-400 hover:underline text-xs cursor-pointer bg-transparent border-none p-0"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    Open in new tab
                                  </button>
                                </DialogClose>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Effects */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-cyan-600/30 dark:group-hover:border-cyan-500/30 transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-2 h-2 md:w-4 md:h-4 bg-cyan-600 dark:bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100"></div>
                  <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-3 h-3 md:w-6 md:h-6 bg-purple-600 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-200"></div>
                  
                  {/* Progress Bar for In Progress Projects */}
                  {project.status === "In Progress" && (
                    <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-slate-200 dark:bg-slate-700 transition-colors duration-500">
                      <div className="h-full bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 animate-pulse rounded-b-2xl md:rounded-b-3xl transition-colors duration-500" style={{ width: '65%' }}></div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-12 md:mt-16 px-2 animate-fade-in-up">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-cyan-500/20 dark:border-cyan-500/20 backdrop-blur-xl relative overflow-hidden transition-colors duration-500">
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-12 h-12 md:w-20 md:h-20 bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 bg-purple-400/10 rounded-full blur-xl"></div>
              <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-3 md:mb-4 animate-pulse relative z-10 transition-colors duration-500" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 relative z-10 transition-colors duration-500">
                Interested in Collaboration?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-4 md:mb-6 relative z-10 transition-colors duration-500">
                Let's work together to bring your innovative ideas to life with cutting-edge technology
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-cyan-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white shadow-xl hover:shadow-2xl group transition-all duration-300 hover:scale-105 relative z-10 text-sm md:text-base"
                onClick={() => navigate("/contact")}
              >
                Start a Conversation
                <Rocket className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;