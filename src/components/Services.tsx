
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
      title: "Quantum Branding",
      description: "Revolutionary visual identities that exist at the intersection of art, psychology, and technology.",
      tags: ["Neural Design", "Holographic Identity", "Adaptive Branding"],
      gradient: "from-quantum-400 to-cyber-400",
      bgColor: "from-quantum-50 to-cyber-50"
    },
    {
      icon: Code2,
      title: "Neural Development",
      description: "Intelligent web architectures that learn, adapt, and evolve with user interactions in real-time.",
      tags: ["AI Integration", "Quantum Computing", "Reactive Systems"],
      gradient: "from-cyber-400 to-matrix-400",
      bgColor: "from-cyber-50 to-matrix-50"
    },
    {
      icon: Smartphone,
      title: "Morphic Applications",
      description: "Shape-shifting mobile experiences that adapt their interface to user behavior and environmental context.",
      tags: ["Adaptive UI", "Biometric Integration", "Context-Aware"],
      gradient: "from-matrix-400 to-neural-400",
      bgColor: "from-matrix-50 to-neural-50"
    },
    {
      icon: Globe,
      title: "Dimensional Strategy",
      description: "Multi-dimensional digital strategies that operate across parallel market realities and user timelines.",
      tags: ["Predictive Analytics", "Timeline Mapping", "Reality Synthesis"],
      gradient: "from-neural-400 to-quantum-400",
      bgColor: "from-neural-50 to-quantum-50"
    },
    {
      icon: Camera,
      title: "Holographic Content",
      description: "Immersive content creation that transcends traditional media boundaries and creates emotional resonance.",
      tags: ["3D Narratives", "Emotional AI", "Immersive Media"],
      gradient: "from-quantum-500 to-cyber-500",
      bgColor: "from-quantum-50 to-cyber-50"
    },
    {
      icon: Megaphone,
      title: "Consciousness Marketing",
      description: "Marketing strategies that connect with the collective digital consciousness and emerging social paradigms.",
      tags: ["Collective Intelligence", "Viral Consciousness", "Digital Empathy"],
      gradient: "from-cyber-500 to-matrix-500",
      bgColor: "from-cyber-50 to-matrix-50"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">      
      {/* Revolutionary Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-white via-surface-cream to-quantum-50/30" />
      <div className="absolute inset-0 bg-quantum-mesh bg-[length:150px_150px] opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyber-200/30 to-quantum-200/30 rounded-full blur-3xl animate-morphic-float" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-bl from-neural-200/30 to-matrix-200/30 rounded-full blur-2xl animate-morphic-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="neo-glass border-cyber-200/50 text-cyber-700 mb-8 px-6 py-3">
            <Layers className="w-4 h-4 mr-2" />
            Our Capabilities
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-void-900 mb-8 leading-tight">
            What We <span className="holo-text">Architect</span>
          </h2>
          <p className="text-xl text-void-600 max-w-3xl mx-auto leading-relaxed">
            From quantum concepts to neural realities, we create digital experiences 
            that redefine what's possible in the intersection of technology and human consciousness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group cursor-pointer levitate quantum-glow border-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Dynamic Icon Container */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:animate-quantum-pulse transition-all duration-500 relative overflow-hidden`}>
                  <service.icon className={`w-8 h-8 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} />
                  <div className="absolute inset-0 neural-lines opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-void-900 mb-4 group-hover:holo-text transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-void-600 mb-6 leading-relaxed group-hover:text-void-700 transition-colors">
                  {service.description}
                </p>

                {/* Revolutionary Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      className="neo-glass border-white/30 text-void-700 text-xs px-3 py-1 hover:animate-glow-pulse transition-all duration-300"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Interactive Link */}
                <div className="flex items-center text-transparent bg-gradient-to-r from-quantum-600 to-cyber-600 bg-clip-text font-semibold group-hover:from-cyber-600 group-hover:to-quantum-600 transition-all duration-300">
                  Explore Capability
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-quantum-600" />
                </div>

                {/* Hover Quantum Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`} />
                
                {/* Neural Network Overlay */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-bl from-quantum-400/30 to-transparent rounded-bl-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="neo-glass rounded-3xl p-8 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 mx-auto mb-4 text-transparent bg-gradient-to-r from-quantum-500 to-cyber-500 bg-clip-text" />
            <h3 className="text-2xl font-bold text-void-900 mb-4">
              Ready to transcend digital boundaries?
            </h3>
            <p className="text-void-600 mb-6">
              Let's architect your digital future with quantum precision and neural intelligence.
            </p>
            <div className="flex justify-center">
              <span className="text-transparent bg-gradient-to-r from-quantum-600 to-cyber-600 bg-clip-text font-semibold cursor-pointer hover:from-cyber-600 hover:to-quantum-600 transition-all duration-300">
                Initialize Project Consciousness →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
