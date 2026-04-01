import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Wrench, Brain } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Development",
      icon: Code2,
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "PHP", "Django", "Mobile Application Development", "Full-Stack Web Development"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-200/50 dark:border-blue-500/30",
    },
    {
      category: "Technical",
      icon: Cpu,
      skills: ["REST API Development", "Database Management", "Authentication & Authorization (JWT)", "Cloud Deployment (AWS EC2, Vercel)", "System Analysis", "Requirement Gathering", "Agile Methodologies"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-200/50 dark:border-purple-500/30",
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["Git & GitHub", "Postman", "VS Code", "Figma"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-200/50 dark:border-emerald-500/30",
      minHeight: true, // Add this flag
    },
    {
      category: "Core Skills",
      icon: Brain,
      skills: ["Critical Thinking", "Problem Solving", "Team Collaboration", "Communication Skills", "Time Management"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-200/50 dark:border-orange-500/30",
      minHeight: true, // Add this flag
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
        <div className="absolute top-3/4 left-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className={`
                p-8 relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 
                animate-slideUp ${category.bgColor} border ${category.borderColor} backdrop-blur-sm
                ${category.minHeight ? 'min-h-[280px] flex flex-col' : 'h-fit'}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] rounded-xl bg-white dark:bg-slate-900"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {category.skills.length} skills
                    </div>
                  </div>
                </div>

                {/* Skills Grid - This container will grow to fill space */}
                <div className="flex-1 flex flex-wrap gap-3 content-start">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      className={`
                        px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform
                        bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm
                        border border-slate-200/60 dark:border-slate-700/60
                        text-slate-700 dark:text-slate-300
                        hover:scale-110 hover:shadow-lg
                        group-hover:border-opacity-80
                        animate-fadeIn
                      `}
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Progress Indicator - Fixed at bottom */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Proficiency Level
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          star <= (index % 5) + 1 
                            ? `bg-gradient-to-r ${category.color}`
                            : 'bg-slate-300 dark:bg-slate-600'
                        } group-hover:scale-125`}
                        style={{ transitionDelay: `${star * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};