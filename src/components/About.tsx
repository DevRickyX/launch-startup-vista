
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  const values = [
    "Innovation-driven development approach",
    "Agile methodology and rapid delivery",
    "Transparent communication throughout",
    "Scalable and maintainable code quality",
    "24/7 support and maintenance services",
    "Competitive pricing with no hidden costs"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevCraft?
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're a passionate team of software engineers, designers, and innovators dedicated to 
              transforming your vision into reality. With years of experience in cutting-edge technologies, 
              we deliver solutions that not only meet your requirements but exceed your expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">48h</div>
                    <div className="text-sm text-gray-600">Average Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
