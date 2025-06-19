
import { Button } from "@/components/ui/button";
import { ArrowDown, Rocket, Zap, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyber-grid opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          {/* Futuristic badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Sparkles size={16} className="animate-spin-slow" />
              <span>Next-Gen Software Solutions</span>
              <Code size={16} />
            </div>
          </div>
          
          {/* Main heading with futuristic styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Code
            </span>{" "}
            <span className="text-white">the</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Future
            </span>
            <div className="text-white/80 text-lg md:text-xl mt-2 font-light tracking-wider">
              &lt; Revolutionary Software Development /&gt;
            </div>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transformamos ideas revolucionarias en{" "}
            <span className="text-cyan-400 font-medium">experiencias digitales</span> que definen el futuro. 
            Desde startups disruptivas hasta corporaciones globales, creamos{" "}
            <span className="text-purple-400 font-medium">soluciones tecnológicas</span> que trascienden límites.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <Rocket className="mr-3 group-hover:animate-bounce" size={22} />
              Iniciar Proyecto
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
            >
              <Zap className="mr-3 group-hover:animate-pulse" size={22} />
              Ver Portfolio
            </Button>
          </div>
          
          {/* Stats with futuristic design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Proyectos Completados</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Clientes Satisfechos</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Años de Innovación</div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ArrowDown size={20} className="text-cyan-400/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
