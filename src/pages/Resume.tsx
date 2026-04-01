import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, ArrowDown, Sparkles, UserCheck, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Path to your CV file in the public folder
    link.href = '/Nivethan_Selvaratnam_CV.pdf';
    
    // Set the download attribute with the desired file name
    link.download = 'Nivethan_Selvaratnam_CV.pdf';
    
    // Append to the document, trigger click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Simulate download time and reset loading state
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // 2 seconds loading animation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 dark:from-slate-900 dark:via-blue-900/10 dark:to-teal-900/10 overflow-hidden">
      <Navbar />
      <main className="pt-32 pb-20 px-4 relative">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-float-1"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-teal-400/20 rounded-full animate-float-2"></div>
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-slate-400/10 rounded-full animate-float-3"></div>
          
          {/* Animated Gradients */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl animate-pulse-glow-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-slate-500/5 rounded-full blur-3xl animate-pulse-glow-fast"></div>
          
          {/* Moving Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-scan-line"></div>
        </div>

        <div className="container mx-auto max-w-4xl">
          {/* Enhanced Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-slide-down-fade' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Professional Resume
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent animate-text-glow">
              My Resume
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6 animate-width-grow"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Access my full resume for a complete overview of my skills and experience
            </p>
          </div>

          {/* Enhanced Main Content */}
          <div className="space-y-8">
            {/* Enhanced Download Card */}
            <Card className={`p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 group relative overflow-hidden ${
              isVisible ? 'animate-card-float' : 'opacity-0 scale-95'
            }`}>
              {/* Card Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 group-hover:duration-200 animate-tilt"></div>
              
              <div className="text-center space-y-6 relative z-10">
                {/* Enhanced Animated Icon */}
                <div className="relative animate-bounce-soft">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 animate-icon-float">
                    <FileText className="h-10 w-10 text-white animate-icon-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce-certificate">
                    <UserCheck className="h-4 w-4 text-white" />
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-orbit-1"></div>
                  <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-teal-400/20 rounded-full animate-orbit-2"></div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white animate-text-slide-up">
                    Download Resume
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto animate-text-slide-up-delay">
                    Get a complete PDF copy of my professional resume with detailed qualifications and experience
                  </p>
                  
                  {/* Enhanced Stats */}
                  <div className="flex justify-center gap-8 py-4">
                    <div className="text-center animate-stat-1">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-pulse-soft" />
                      </div>
                      <p className="font-semibold text-slate-800 dark:text-white">Professional</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Layout</p>
                    </div>
                    <div className="text-center animate-stat-3">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400 animate-pulse-soft" />
                      </div>
                      <p className="font-semibold text-slate-800 dark:text-white">Updated</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Recently</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Download Button with Loading Animation */}
                <Button
                  size="lg"
                  disabled={isDownloading}
                  className={`h-14 px-8 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 group/btn relative overflow-hidden border-0 ${
                    isDownloading ? 'opacity-90 cursor-not-allowed' : ''
                  }`}
                  onClick={handleDownloadCV}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  {isDownloading ? (
                    <>
                      {/* Loading Animation */}
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        <span>Preparing Download...</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Download className="mr-3 h-5 w-5 transition-transform group-hover/btn:scale-110" />
                      Download PDF
                      <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-y-1" />
                    </>
                  )}
                </Button>

                {/* Download Progress Indicator */}
                {isDownloading && (
                  <div className="animate-fadeIn">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-4">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full animate-pulse-width"></div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 animate-pulse">
                      Processing your download...
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;