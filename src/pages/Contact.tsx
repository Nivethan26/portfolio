import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nivethan26",
      label: "GitHub",
      color: "hover:bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nivethan-selvaratnam",
      label: "LinkedIn",
      color: "hover:bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      icon: Mail,
      href: "mailto:nivethan.nivethan26@gmail.com",
      label: "Email",
      color: "hover:bg-gradient-to-r from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Animated Background Elements - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:-top-40 md:-right-40 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl md:blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:-bottom-40 md:-left-40 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl md:blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl md:blur-3xl animate-pulse-glow-slow"></div>
        
        {/* Grid Pattern - Lighter on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 animate-slide-down-fade">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm mb-4 md:mb-6 animate-fade-in-delay">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                Available for new opportunities
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Let's Talk
            </h1>
            
            <div className="w-16 sm:w-20 md:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 md:mb-6 animate-width-grow shadow-lg shadow-blue-500/30"></div>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed animate-text-slide-up px-2 sm:px-0">
              Ready to bring your ideas to life? Let's create something amazing together. 
              I'm here to help with your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Contact Form */}
            <Card className="relative group order-1 lg:order-1">
              {/* Card Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative glass-card p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 dark:border-slate-700/30 shadow-xl sm:shadow-2xl shadow-blue-500/10 backdrop-blur-sm rounded-xl animate-card-float">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">Send Message</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">I'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 group sm:col-span-1">
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                        className="h-10 sm:h-12 bg-white/50 dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2 group sm:col-span-1">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                        className="h-10 sm:h-12 bg-white/50 dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this about?"
                      className="h-10 sm:h-12 bg-white/50 dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                      className="bg-white/50 dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/50 transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group/btn relative overflow-hidden text-sm sm:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-6 sm:space-y-8 animate-slide-down-fade order-2 lg:order-2" style={{ animationDelay: "0.2s" }}>
              {/* Contact Information */}
              <Card className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 dark:border-slate-700/30 shadow-xl sm:shadow-2xl shadow-purple-500/10 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">Get In Touch</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Multiple ways to connect</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-base">Email</h3>
                      <a
                        href="mailto:nivethan.nivethan26@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base truncate block"
                      >
                        nivethan.nivethan26@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 hover:border-green-500/30 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-base">Phone</h3>
                      <a
                        href="tel:+94741915898"
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300 text-sm sm:text-base"
                      >
                        +94 741915898
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 hover:border-purple-500/30 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-base">Location</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Jaffna, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 dark:border-slate-700/30 shadow-xl sm:shadow-2xl shadow-pink-500/10 backdrop-blur-sm rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 sm:mb-6">Follow My Journey</h3>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social p-3 sm:p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 ${link.color} transition-all duration-500 hover:scale-105 hover:shadow-lg animate-stagger-fade`}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      aria-label={link.label}
                    >
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400 group-hover/social:text-white/90 transition-colors duration-300">
                          {link.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Response Card */}
              <Card className="glass-card p-4 sm:p-6 border border-white/20 dark:border-slate-700/30 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm rounded-xl shadow-lg shadow-blue-500/10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm sm:text-base">Quick Response</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      I typically respond within 24 hours. For urgent inquiries, 
                      feel free to call me directly.
                    </p>
                  </div>
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

export default Contact;