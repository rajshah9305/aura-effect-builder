
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  Camera, 
  Megaphone,
  ArrowUpRight,
  Layers,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Sophisticated Branding",
      description: "Refined visual identities that exist at the intersection of elegance, psychology, and cutting-edge design principles.",
      tags: ["Premium Design", "Brand Identity", "Visual Strategy"],
      gradient: "from-mono-600 to-mono-800",
      bgColor: "from-mono-50 to-mono-100"
    },
    {
      icon: Code2,
      title: "Intelligent Development",
      description: "Advanced web architectures that learn, adapt, and evolve with user interactions through sophisticated programming.",
      tags: ["AI Integration", "Smart Systems", "Adaptive Code"],
      gradient: "from-mono-700 to-mono-900",
      bgColor: "from-mono-100 to-mono-200"
    },
    {
      icon: Smartphone,
      title: "Adaptive Applications",
      description: "Shape-shifting mobile experiences that intelligently adapt their interface to user behavior and context.",
      tags: ["Responsive UI", "Smart Adaptation", "Context-Aware"],
      gradient: "from-mono-800 to-mono-600",
      bgColor: "from-mono-50 to-mono-150"
    },
    {
      icon: Globe,
      title: "Strategic Consulting",
      description: "Multi-dimensional digital strategies that operate across diverse market realities and user engagement patterns.",
      tags: ["Data Analytics", "Market Research", "Strategic Planning"],
      gradient: "from-mono-600 to-mono-800",
      bgColor: "from-mono-100 to-mono-200"
    },
    {
      icon: Camera,
      title: "Premium Content",
      description: "Sophisticated content creation that transcends traditional media boundaries and creates lasting emotional connections.",
      tags: ["Visual Storytelling", "Brand Content", "Media Production"],
      gradient: "from-mono-700 to-mono-900",
      bgColor: "from-mono-50 to-mono-100"
    },
    {
      icon: Megaphone,
      title: "Intelligent Marketing",
      description: "Marketing strategies that connect with sophisticated audiences and emerging digital communication paradigms.",
      tags: ["Smart Campaigns", "Audience Intelligence", "Digital Strategy"],
      gradient: "from-mono-800 to-mono-600",
      bgColor: "from-mono-100 to-mono-150"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden texture">      
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-white via-surface-cream to-mono-50/30" />
      <div className="absolute inset-0 bg-mono-mesh bg-[length:150px_150px] opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-mono-200/20 to-mono-300/15 rounded-full blur-3xl animate-morphic-float" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-bl from-mono-300/15 to-mono-400/10 rounded-full blur-2xl animate-morphic-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mono-glass border-mono-300/50 text-mono-800 mb-8 px-6 py-3">
            <Layers className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-mono-900 mb-8 leading-tight">
            What We <span className="mono-text">Create</span>
          </h2>
          <p className="text-xl text-mono-600 max-w-3xl mx-auto leading-relaxed">
            From sophisticated concepts to intelligent realities, we create digital experiences 
            that redefine what's possible in the intersection of technology and human experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group cursor-pointer levitate mono-glow border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Dynamic Icon Container */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:animate-mono-pulse transition-all duration-500 relative overflow-hidden`}>
                  <service.icon className={`w-8 h-8 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} />
                  <div className="absolute inset-0 gradient-lines opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-mono-900 mb-4 group-hover:mono-text transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-mono-600 mb-6 leading-relaxed group-hover:text-mono-700 transition-colors">
                  {service.description}
                </p>

                {/* Sophisticated Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      className="mono-glass border-white/30 text-mono-700 text-xs px-3 py-1 hover:animate-subtle-glow transition-all duration-300"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Interactive Link */}
                <div className="flex items-center text-transparent bg-gradient-to-r from-mono-700 to-mono-900 bg-clip-text font-semibold group-hover:from-mono-900 group-hover:to-mono-700 transition-all duration-300">
                  Explore Service
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-mono-700" />
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-500 rounded-lg`} />
                
                {/* Subtle Corner Detail */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-bl from-mono-600/20 to-transparent rounded-bl-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="mono-glass rounded-3xl p-8 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 mx-auto mb-4 text-transparent bg-gradient-to-r from-mono-700 to-mono-900 bg-clip-text" />
            <h3 className="text-2xl font-bold text-mono-900 mb-4">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-mono-600 mb-6">
              Let's craft your digital future with sophisticated precision and intelligent design.
            </p>
            <div className="flex justify-center">
              <span className="text-transparent bg-gradient-to-r from-mono-700 to-mono-900 bg-clip-text font-semibold cursor-pointer hover:from-mono-900 hover:to-mono-700 transition-all duration-300">
                Begin Your Project →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
