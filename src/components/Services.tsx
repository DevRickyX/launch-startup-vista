
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Monitor, Rocket, Settings, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business needs and requirements."
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      title: "Web Application Development",
      description: "Modern, responsive web applications using cutting-edge technologies and frameworks for optimal performance."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "MVP Development",
      description: "Rapid prototyping and MVP development to validate your ideas and get to market faster with minimal resources."
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs to extend your application's functionality and capabilities."
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Team Augmentation",
      description: "Scale your development team with our experienced developers who integrate seamlessly with your existing processes."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Performance Optimization",
      description: "Enhance your application's speed, efficiency, and user experience through comprehensive performance optimization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white hover:scale-105 transform transition-transform">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
