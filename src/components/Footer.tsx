
import { Code, Zap, Shield, Globe, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Custom Development", href: "#" },
    { name: "Web Applications", href: "#" },
    { name: "MVP Development", href: "#" },
    { name: "AI Integration", href: "#" }
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Our Technology", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-devora-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-devora-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-devora-cyan rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-devora-purple rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 right-2/3 w-1 h-1 bg-pink-400 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-devora-cyan to-devora-purple p-3 rounded-xl">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-devora-cyan via-devora-purple to-pink-400 bg-clip-text text-transparent">
                Devora
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed font-light">
              Transforming revolutionary ideas into{" "}
              <span className="text-devora-cyan">quantum-powered software solutions</span>. 
              We engineer the future of technology, one breakthrough at a time.
            </p>
            
            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-devora-cyan/20 to-cyan-500/20 border border-devora-cyan/30 text-devora-cyan px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <Zap size={14} />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-devora-purple/20 to-purple-500/20 border border-devora-purple/30 text-devora-purple px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <Shield size={14} />
                <span>Quantum-Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-400/20 to-pink-500/20 border border-pink-400/30 text-pink-400 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <Globe size={14} />
                <span>Global Scale</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-devora-cyan/30 p-3 rounded-xl hover:border-devora-cyan/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-devora-cyan transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Advanced Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-devora-cyan transition-colors duration-300 font-light hover:translate-x-1 transform transition-transform inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Neural Network
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-devora-cyan transition-colors duration-300 font-light hover:translate-x-1 transform transition-transform inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-devora-cyan/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-light">
              &copy; 2024 Devora Technologies. All rights reserved. | Powered by Quantum AI
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-devora-cyan transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-devora-cyan transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-devora-cyan transition-colors duration-300">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
