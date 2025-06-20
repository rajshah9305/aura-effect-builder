
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
      gradient: "from-slate-600 to-slate-800",
      bgColor: "from-slate-50 to-white"
    },
    {
      icon: Code2,
      title: "Intelligent Development",
      description: "Advanced web architectures that learn, adapt, and evolve with user interactions through sophisticated programming.",
      tags: ["AI Integration", "Smart Systems", "Adaptive Code"],
      gradient: "from-slate-700 to-slate-900",
      bgColor: "from-white to-slate-50"
    },
    {
      icon: Smartphone,
      title: "Adaptive Applications",
      description: "Shape-shifting mobile experiences that intelligently adapt their interface to user behavior and context.",
      tags: ["Responsive UI", "Smart Adaptation", "Context-Aware"],
      gradient: "from-slate-800 to-slate-600",
      bgColor: "from-slate-50 to-slate-100"
    },
    {
      icon: Globe,
      title: "Strategic Consulting",
      description: "Multi-dimensional digital strategies that operate across diverse market realities and user engagement patterns.",
      tags: ["Data Analytics", "Market Research", "Strategic Planning"],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "from-white to-slate-50"
    },
    {
      icon: Camera,
      title: "Premium Content",
      description: "Sophisticated content creation that transcends traditional media boundaries and creates lasting emotional connections.",
      tags: ["Visual Storytelling", "Brand Content", "Media Production"],
      gradient: "from-slate-700 to-slate-900",
      bgColor: "from-slate-50 to-white"
    },
    {
      icon: Megaphone,
      title: "Intelligent Marketing",
      description: "Marketing strategies that connect with sophisticated audiences and emerging digital communication paradigms.",
      tags: ["Smart Campaigns", "Audience Intelligence", "Digital Strategy"],
      gradient: "from-slate-800 to-slate-600",
      bgColor: "from-white to-slate-100"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-surface-pearl elegant-texture">      
      {/* Subtle Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-white via-surface-pearl to-slate-50/30" />
      <div className="absolute inset-0 subtle-pattern bg-[length:150px_150px] opacity-8" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-slate-100/20 to-slate-200/15 rounded-full blur-3xl animate-soft-float" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-bl from-slate-200/15 to-slate-300/10 rounded-full blur-2xl animate-soft-float" style={{animationDelay: '-3s'}} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="premium-glass border-slate-200/60 text-slate-700 mb-8 px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300">
            <Layers className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            What We <span className="enhanced-text">Create</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From sophisticated concepts to intelligent realities, we create digital experiences 
            that redefine what's possible in the intersection of technology and human experience.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group cursor-pointer enhanced-card professional-glow border-slate-200/50 bg-white/95 backdrop-blur-sm overflow-hidden relative hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Enhanced Icon Container */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:animate-gentle-pulse transition-all duration-500 relative overflow-hidden shadow-sm border border-slate-100`}>
                  <service.icon className={`w-8 h-8 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] duration-700" />
                </div>

                {/* Enhanced Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:enhanced-text transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {service.description}
                </p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      className="premium-glass border-slate-200/50 text-slate-600 text-xs px-3 py-1 hover:animate-subtle-glow transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300/60"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced Interactive Link */}
                <div className="flex items-center text-transparent bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text font-semibold group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
                  Explore Service
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-slate-700 group-hover:text-slate-900" />
                </div>

                {/* Subtle Hover Enhancement */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-2 transition-opacity duration-500 rounded-xl`} />
                
                {/* Enhanced Corner Detail */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-8 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-bl from-slate-200/20 to-transparent rounded-bl-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="enhanced-card rounded-3xl p-8 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50">
            <Zap className="w-12 h-12 mx-auto mb-4 text-transparent bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's craft your digital future with sophisticated precision and intelligent design.
            </p>
            <div className="flex justify-center">
              <span className="text-transparent bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text font-semibold cursor-pointer hover:from-slate-900 hover:to-slate-700 transition-all duration-300 hover:scale-105">
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
