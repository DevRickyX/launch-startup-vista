
import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Rocket, Code, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    "AI-Driven Development Methodology",
    "Quantum-Speed Agile Delivery",
    "Neural Network Communication Systems",
    "Self-Healing Code Architecture",
    "24/7 Autonomous Support Systems",
    "Transparent Pricing with Zero Hidden Costs"
  ];

  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "99.9%", label: "System Uptime", color: "from-devora-cyan to-cyan-300" },
    { icon: <Zap className="h-6 w-6" />, value: "<12h", label: "Response Time", color: "from-devora-purple to-purple-300" },
    { icon: <Shield className="h-6 w-6" />, value: "100%", label: "Secure Delivery", color: "from-pink-400 to-pink-300" },
    { icon: <Users className="h-6 w-6" />, value: "24/7", label: "AI Support", color: "from-devora-cyan to-devora-purple" }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-devora-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-devora-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-devora-cyan rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-devora-purple rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 right-2/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            {/* Futuristic badge */}
            <div className="flex justify-start mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-devora-cyan/20 to-devora-purple/20 border border-devora-cyan/30 text-devora-cyan px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
                <Code size={16} className="animate-pulse" />
                <span>Revolutionary Technology</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-devora-cyan via-devora-purple to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Devora?
              </span>
              <div className="text-white/60 text-lg mt-2 font-light tracking-wider">
                &lt; The Future of Software Development /&gt;
              </div>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
              We are an elite team of{" "}
              <span className="text-devora-cyan font-medium">quantum engineers</span>,{" "}
              <span className="text-devora-purple font-medium">AI architects</span>, and{" "}
              <span className="text-pink-400 font-medium">digital innovators</span>{" "}
              dedicated to transforming your vision into reality. With years of experience in{" "}
              <span className="text-devora-cyan font-medium">next-generation technologies</span>, 
              we deliver solutions that don't just meet expectations—they redefine possibilities.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-devora-cyan/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-devora-cyan/20 to-devora-purple/20 p-2 rounded-full border border-devora-cyan/30">
                      <Check className="h-4 w-4 text-devora-cyan" />
                    </div>
                  </div>  
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">{value}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-devora-cyan to-devora-purple hover:from-devora-cyan/80 hover:to-devora-purple/80 text-white px-10 py-6 text-lg font-semibold rounded-xl border border-devora-cyan/50 shadow-2xl shadow-devora-cyan/25 hover:shadow-devora-cyan/40 transition-all duration-300 hover:scale-105 group"
            >
              <Rocket className="mr-3 group-hover:animate-bounce" size={22} />
              Discover Our Technology
              <div className="absolute inset-0 bg-gradient-to-r from-devora-cyan/20 to-devora-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main stats container */}
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-devora-cyan/30 shadow-2xl shadow-devora-cyan/10 hover:shadow-devora-cyan/20 transition-all duration-500 hover:scale-105">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center group hover:scale-110 transition-transform duration-300"
                    >
                      <div className="flex justify-center mb-3">
                        <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl shadow-lg`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 font-light tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-devora-cyan via-devora-purple to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              {/* Floating elements around the stats */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-devora-cyan/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-devora-purple/30 rounded-full blur-sm animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
