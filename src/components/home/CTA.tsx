import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse-glow-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="relative glass-card p-8 md:p-12 rounded-2xl border border-white/20 dark:border-slate-700/30 backdrop-blur-xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 animate-card-float">
              <div className="text-center space-y-6">
                {/* Icon with enhanced animation */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse-glow-medium"></div>
                  <Mail className="h-16 w-16 mx-auto text-accent relative z-10 animate-float" />
                </div>

                {/* Heading with gradient text */}
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-text-glow">
                  Let's Work Together
                </h2>

                {/* Animated divider */}
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-width-grow shadow-lg shadow-blue-500/30"></div>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-text-slide-up">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                {/* Buttons with enhanced animations */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <Link to="/contact">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      Get In Touch
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 group/outline backdrop-blur-sm"
                  >
                    <a href="mailto:nivethan.nivethan26@gmail.com">
                      <Mail className="mr-2 h-5 w-5 transition-transform group-hover/outline:scale-110" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};