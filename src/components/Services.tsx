
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Monitor, Rocket, Settings, Users, Zap, Shield, Database, Cloud, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-devora-cyan" />,
      title: "Custom Software Development",
      description: "Next-generation software solutions engineered from the ground up using cutting-edge technologies and AI-driven methodologies."
    },
    {
      icon: <Monitor className="h-8 w-8 text-devora-purple" />,
      title: "Web Application Development", 
      description: "Ultra-responsive web applications built with quantum-speed frameworks and neural network optimization for maximum performance."
    },
    {
      icon: <Rocket className="h-8 w-8 text-pink-400" />,
      title: "MVP Development",
      description: "Rapid prototype deployment using advanced quantum algorithms to validate revolutionary ideas and accelerate market entry."
    },
    {
      icon: <Shield className="h-8 w-8 text-devora-cyan" />,
      title: "Cybersecurity Solutions",
      description: "Military-grade security protocols with AI-powered threat detection to protect your digital assets from cyber warfare."
    },
    {
      icon: <Database className="h-8 w-8 text-devora-purple" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights using machine learning algorithms and predictive analytics engines."
    },
    {
      icon: <Cloud className="h-8 w-8 text-pink-400" />,
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure designed for the future, with auto-scaling capabilities and zero-downtime deployment."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-devora-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-devora-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-devora-cyan rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-devora-purple rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Futuristic badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-devora-cyan/20 to-devora-purple/20 border border-devora-cyan/30 text-devora-cyan px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Cpu size={16} className="animate-spin-slow" />
              <span>Next-Gen Technology Solutions</span>
              <Zap size={16} />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-devora-cyan via-devora-purple to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Advanced
            </span>{" "}
            <span className="text-white">Services</span>
            <div className="text-white/60 text-lg md:text-xl mt-4 font-light tracking-wider">
              &lt; Powering Tomorrow's Digital Revolution /&gt;
            </div>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the future of software development with our{" "}
            <span className="text-devora-cyan font-medium">AI-powered solutions</span>{" "}
            designed to transform industries and redefine possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-devora-cyan/20 backdrop-blur-sm hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-devora-cyan/25 hover:border-devora-cyan/40 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-devora-cyan/20 to-devora-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-xl border border-devora-cyan/30 group-hover:border-devora-cyan/50 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-devora-cyan transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-devora-cyan via-devora-purple to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
