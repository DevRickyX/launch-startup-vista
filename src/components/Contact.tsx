
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Users, Send, Zap, Shield, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Transmitted!",
      description: "Our AI system will respond within 12 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-devora-cyan" />,
      title: "Neural Network Email",
      subtitle: "contact@devora.tech",
      bgColor: "from-devora-cyan/20 to-cyan-500/20",
      borderColor: "border-devora-cyan/30"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-devora-purple" />,
      title: "Quantum Chat",
      subtitle: "Available 24/7",
      bgColor: "from-devora-purple/20 to-purple-500/20",
      borderColor: "border-devora-purple/30"
    },
    {
      icon: <Users className="h-6 w-6 text-pink-400" />,
      title: "Holographic Meeting",
      subtitle: "Schedule consultation",
      bgColor: "from-pink-400/20 to-pink-500/20",
      borderColor: "border-pink-400/30"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-devora-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-devora-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-devora-cyan rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-devora-purple rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Futuristic badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-devora-cyan/20 to-devora-purple/20 border border-devora-cyan/30 text-devora-cyan px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Globe size={16} className="animate-spin-slow" />
              <span>Global Communication Network</span>
              <Zap size={16} />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build</span>{" "}
            <span className="bg-gradient-to-r from-devora-cyan via-devora-purple to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Tomorrow
            </span>{" "}
            <span className="text-white">Together</span>
            <div className="text-white/60 text-lg md:text-xl mt-4 font-light tracking-wider">
              &lt; Connecting Visionaries with Reality /&gt;
            </div>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your ideas into{" "}
            <span className="text-devora-cyan font-medium">revolutionary software solutions</span>?
            Connect with our team of digital architects and AI specialists today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-devora-cyan/30 backdrop-blur-xl shadow-2xl shadow-devora-cyan/10 hover:shadow-devora-cyan/20 transition-all duration-500 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-devora-cyan to-devora-purple p-2 rounded-lg">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <span>Transmit Your Vision</span>
                </CardTitle>
                <p className="text-gray-400 font-light">
                  Send us your project details through our secure neural network
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-devora-cyan/30 text-white placeholder-gray-500 focus:border-devora-cyan focus:ring-devora-cyan/20 backdrop-blur-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-devora-cyan/30 text-white placeholder-gray-500 focus:border-devora-cyan focus:ring-devora-cyan/20 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-devora-cyan/30 text-white placeholder-gray-500 focus:border-devora-cyan focus:ring-devora-cyan/20 backdrop-blur-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Vision *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-slate-800/50 border-devora-cyan/30 text-white placeholder-gray-500 focus:border-devora-cyan focus:ring-devora-cyan/20 backdrop-blur-sm resize-none"
                      placeholder="Describe your revolutionary project, timeline, and technological requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-devora-cyan to-devora-purple hover:from-devora-cyan/80 hover:to-devora-purple/80 text-white font-semibold py-6 rounded-xl border border-devora-cyan/50 shadow-2xl shadow-devora-cyan/25 hover:shadow-devora-cyan/40 transition-all duration-300 hover:scale-105 group"
                  >
                    <Send className="mr-3 group-hover:animate-pulse" size={20} />
                    Transmit Message
                    <div className="absolute inset-0 bg-gradient-to-r from-devora-cyan/20 to-devora-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className={`bg-gradient-to-br from-slate-900/80 to-slate-800/80 border ${method.borderColor} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${method.bgColor} p-4 rounded-xl border ${method.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-devora-cyan transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 font-light">{method.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${method.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional futuristic element */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-devora-cyan/30 backdrop-blur-xl rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-devora-cyan" />
                <h4 className="text-white font-semibold">Secure Communication</h4>
              </div>
              <p className="text-gray-400 text-sm font-light">
                All communications are encrypted with quantum-level security protocols to ensure your project ideas remain confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
