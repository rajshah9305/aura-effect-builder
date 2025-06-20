
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  Camera, 
  Megaphone,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description: "Crafting memorable visual identities that capture your brand's essence and resonate with your audience.",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, high-performance websites with cutting-edge technologies and seamless user experiences.",
      tags: ["React", "Next.js", "TypeScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Creating intuitive mobile applications that engage users and drive business growth across all platforms.",
      tags: ["iOS", "Android", "React Native"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Developing comprehensive digital strategies that align with your business goals and market opportunities.",
      tags: ["Analytics", "SEO", "Growth Hacking"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Producing compelling visual and written content that tells your story and engages your target audience.",
      tags: ["Photography", "Video", "Copywriting"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Implementing data-driven marketing campaigns that maximize reach, engagement, and conversions.",
      tags: ["Social Media", "PPC", "Email Marketing"],
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="glass-effect text-electric-400 border-electric-500/50 mb-6">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We <span className="text-gradient">Create</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From concept to execution, we deliver comprehensive digital solutions 
            that transform ideas into remarkable experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass-effect border-white/10 hover:border-white/20 group cursor-pointer hover-lift overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-white/10 text-white/80 border-0 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-electric-400 font-medium group-hover:text-electric-300 transition-colors">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
