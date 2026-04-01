import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with best practices and modern patterns",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-200/50 dark:border-blue-500/30",
      delay: "0s"
    },
    {
      icon: Palette,
      title: "Beautiful UI",
      description: "Crafting pixel-perfect, responsive designs with modern aesthetics and smooth interactions",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-200/50 dark:border-purple-500/30",
      delay: "0.1s"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for blazing-fast speed, seamless user experience and efficient resource usage",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-200/50 dark:border-emerald-500/30",
      delay: "0.2s"
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <p className="text-xl text-slate-700 dark:text-slate-300 text-center leading-relaxed animate-slideUp max-w-4xl mx-auto font-medium">
            I'm Nivethan Selvaratnam, a Full Stack Developer who loves building intuitive and efficient digital experiences. 
            I enjoy designing clean architectures, writing maintainable code, and bringing ideas to life through modern web technologies. 
            My experience spans full-stack development, database systems, and production-ready applications.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className={`p-8 relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-slideUp ${item.bgColor} border ${item.borderColor} backdrop-blur-sm`}
                style={{ animationDelay: item.delay }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-slate-900"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Animated Arrow/Indicator */}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300`}>
                    <svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100"></div>
              </Card>
            ))}
          </div>

          {/* Additional Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Technologies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Commitment</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};