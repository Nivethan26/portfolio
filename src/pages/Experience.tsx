import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Code2, Database, Palette, Server, Globe, Award, Users, Rocket, Star, Calendar, Zap, Target } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "BSc (Hons) Computer Science",
      institution: "Uva Wellassa University of Sri Lanka",
      period: "2021 – Present",
      description: "Pursuing a comprehensive Computer Science degree with focus on software engineering, web development, database systems, and modern development methodologies. Gained hands-on experience through multiple real-world projects and academic research.",
      achievements: [
        "Developed enterprise-level pharmacy management system",
        "Built AI-powered expense tracking system with OpenAI integration",
        "Built multiple full-stack applications using MERN stack",
        "Currently working on AgriLink agricultural marketplace platform",
        "Maintained strong academic performance while building practical projects",
        "Participated in coding competitions and tech workshops"
      ],
    },
  ];

  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend Development",
      icon: <Server className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ["Node.js", "Express.js", "PHP", "Django", "REST APIs", "JWT Authentication", "API Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Database & Tools",
      icon: <Database className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ["MongoDB", "Mongoose", "MySQL", "SQLite", "Git & GitHub", "Postman", "VS Code", "Vite", "Nodemailer"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Technologies & Concepts",
      icon: <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ["Full Stack Development", "Responsive Design", "Progressive Web Apps", "Agile Methodology", "System Design", "Debugging", "Performance Optimization"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const projectTimeline = [
    {
      title: "AgriLink Platform",
      period: "2025 – Ongoing",
      description: "Agricultural marketplace connecting farmers, buyers, and agents with role-based dashboards and real-time features.",
      type: "project",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Redux"],
      role: "Frontend Lead",
      status: "In Progress",
      featured: true
    },
    {
      title: "Smart Pharmacy Management System",
      period: "2025",
      description: "Enterprise-level MERN stack application for comprehensive pharmacy operations management including inventory, sales, and customer consultations.",
      type: "project",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
      role: "Full Stack Developer",
      status: "Completed",
      featured: true
    },
    {
      title: "Smart Expense Tracker",
      period: "2025",
      description: "AI-powered expense management system with budget tracking, real-time alerts, and intelligent spending insights using OpenAI API for financial analysis.",
      type: "project",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "JWT"],
      role: "Full Stack Developer",
      status: "Completed",
      featured: false
    },
    {
      title: "Food Recipe Platform",
      period: "2024",
      description: "Interactive recipe sharing platform with search functionality and user-generated content.",
      type: "project",
      technologies: ["Django", "Python", "SQLite", "HTML/CSS"],
      role: "Backend Developer",
      status: "Completed",
      featured: false
    },
    {
      title: "Auto Care Lanka",
      period: "2023",
      description: "Service station management system with appointment booking, career portal, and service tracking features.",
      type: "project",
      technologies: ["PHP", "React", "MySQL", "Bootstrap"],
      role: "Full Stack Developer",
      status: "Completed",
      featured: false
    },
    {
      title: "Weather App (Mobile)",
      period: "2023",
      description: "Progressive web app for weather forecasting with location-based services and offline functionality.",
      type: "project",
      technologies: ["Vite", "React", "Tailwind CSS", "Weather API"],
      role: "Frontend Developer",
      status: "Completed",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-indigo-900/20"></div>
          <div className="absolute top-10 right-4 md:top-20 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-4 md:bottom-20 md:left-10 w-24 h-24 md:w-40 md:h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 md:w-24 md:h-24 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 px-2 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Rocket className="h-3 w-3 md:h-4 md:w-4" />
              Professional Journey
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent leading-tight">
              Experience & Education
            </h1>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 md:mb-6 animate-width-grow" />
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
              My journey through education, technical skills development, and real-world project experience
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Education & Skills */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {/* Education */}
              <Card className="p-4 sm:p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 animate-slideUp">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Education</h2>
                </div>

                {education.map((edu, index) => (
                  <div key={index} className="space-y-3 md:space-y-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-white leading-tight">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">{edu.institution}</p>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-amber-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Card>

              {/* Technical Skills */}
              <Card className="p-4 sm:p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 animate-slideUp" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Code2 className="h-5 w-5 md:h-6 md:w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Technical Skills</h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {technicalSkills.map((skillCategory, index) => (
                    <div key={index} className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2">
                        {skillCategory.icon}
                        <h3 className="font-semibold text-slate-800 dark:text-white text-sm md:text-base">{skillCategory.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {skillCategory.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className={`bg-gradient-to-r ${skillCategory.color} text-white border-0 text-xs px-2.5 py-1 md:px-3 md:py-1.5 hover:scale-105 transition-transform duration-300`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Project Timeline */}
            <div className="lg:col-span-2">
              <Card className="p-4 sm:p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 animate-slideUp" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Project Timeline</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Chronological journey of my development projects</p>
                  </div>
                </div>

                {/* Enhanced Timeline Section */}
                <div className="space-y-6 md:space-y-8 relative">
                  {/* Enhanced Timeline Line */}
                  <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 md:w-1">
                    {/* Main Gradient Line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-sm rounded-full"></div>
                    
                    {/* Animated Pulse */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse-slow opacity-70"></div>
                  </div>

                  {projectTimeline.map((project, index) => (
                    <div key={index} className="relative pl-12 md:pl-16 group animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Enhanced Timeline Dot */}
                      <div className={`absolute left-2 md:left-3 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white dark:border-slate-900 shadow-xl md:shadow-2xl flex items-center justify-center ${
                        project.status === "In Progress" 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse-ring" 
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                      }`}>
                        {/* Inner Dot */}
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white ${
                          project.status === "In Progress" ? "animate-ping-slow" : ""
                        }`}></div>
                        
                        {/* Featured Star */}
                        {project.featured && (
                          <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Star className="h-1.5 w-1.5 md:h-2 md:w-2 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      
                      {/* Project Card */}
                      <Card className="p-4 md:p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] md:group-hover:scale-105 group-hover:border-blue-200 dark:group-hover:border-blue-500/30">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                              <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white leading-tight">{project.title}</h3>
                              {project.featured && (
                                <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-current flex-shrink-0" />
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-2 md:mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                <span>{project.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 md:h-4 md:w-4" />
                                <span>{project.role}</span>
                              </div>
                              <Badge variant={project.status === "Completed" ? "default" : "secondary"} className={
                                project.status === "Completed" 
                                  ? "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs" 
                                  : "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30 animate-pulse text-xs"
                              }>
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0 text-xs px-2.5 py-1 md:px-3 md:py-1 hover:scale-105 transition-transform duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;