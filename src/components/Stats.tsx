
import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: TrendingUp,
      number: 250, 
      suffix: '+', 
      label: 'Neural Projects Deployed', 
      sublabel: 'Quantum-enhanced experiences',
      gradient: 'from-quantum-400 to-cyber-400',
      bgGradient: 'from-quantum-50 to-cyber-50'
    },
    { 
      icon: Users,
      number: 99.8, 
      suffix: '%', 
      label: 'Consciousness Alignment', 
      sublabel: 'Client-AI synergy rate',
      gradient: 'from-cyber-400 to-matrix-400',
      bgGradient: 'from-cyber-50 to-matrix-50'
    },
    { 
      icon: Zap,
      number: 15, 
      suffix: 'x', 
      label: 'Reality Acceleration', 
      sublabel: 'Faster than conventional',
      gradient: 'from-matrix-400 to-neural-400',
      bgGradient: 'from-matrix-50 to-neural-50'
    },
    { 
      icon: Globe,
      number: 47, 
      suffix: '', 
      label: 'Dimensional Markets', 
      sublabel: 'Global presence expanded',
      gradient: 'from-neural-400 to-quantum-400',
      bgGradient: 'from-neural-50 to-quantum-50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const QuantumCounter = ({ end, suffix, delay }: { end: number; suffix: string; delay: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        const duration = 2500;
        const increment = end / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(suffix === '%' ? Math.floor(current * 10) / 10 : Math.floor(current));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }, [isVisible, end, delay]);

    return (
      <span className="holo-text font-bold text-5xl md:text-6xl">
        {suffix === '%' ? count.toFixed(1) : count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Revolutionary Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-cream via-quantum-50/20 to-cyber-50/20" />
      <div className="absolute inset-0 bg-quantum-mesh bg-[length:200px_200px] opacity-20 animate-neural-sweep" />
      
      {/* Morphic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-quantum-200/20 to-cyber-200/20 rounded-full blur-3xl animate-morphic-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-cyber-200/20 to-matrix-200/20 rounded-full blur-3xl animate-morphic-float" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="neo-glass border-matrix-200/50 text-matrix-700 mb-8 px-6 py-3">
            <TrendingUp className="w-4 h-4 mr-2" />
            Quantum Metrics
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-void-900 mb-8 leading-tight">
            Impact That <span className="holo-text">Transcends</span>
          </h2>
          <p className="text-xl text-void-600 max-w-3xl mx-auto leading-relaxed">
            Our quantum-neural approach delivers results that exist beyond conventional measurement, 
            creating ripple effects across digital realities and consciousness networks.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="neo-glass rounded-3xl p-8 levitate quantum-glow transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.bgGradient} rounded-2xl flex items-center justify-center group-hover:animate-quantum-pulse transition-all duration-500 relative`}>
                  <stat.icon className={`w-10 h-10 text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`} />
                  <div className="absolute inset-0 neural-lines opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Quantum Counter */}
                <div className="mb-4">
                  <QuantumCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    delay={index * 300}
                  />
                </div>

                {/* Labels */}
                <h3 className="text-xl font-bold text-void-900 mb-2 group-hover:holo-text transition-all duration-500">
                  {stat.label}
                </h3>
                
                <p className="text-void-600 text-sm group-hover:text-void-700 transition-colors">
                  {stat.sublabel}
                </p>
                
                {/* Quantum Indicator */}
                <div className={`h-1 w-20 mx-auto mt-4 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`} />

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Neural Network Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-bl ${stat.gradient} rounded-full animate-pulse`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consciousness Call-to-Action */}
        <div className="text-center mt-20">
          <div className="neo-glass rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-quantum-mesh bg-[length:50px_50px] opacity-10" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-void-900 mb-4">
                Ready to join the <span className="holo-text">quantum revolution</span>?
              </h3>
              <p className="text-void-600 text-lg mb-8 max-w-2xl mx-auto">
                These metrics represent just the beginning. Let's transcend conventional limits 
                and architect your digital consciousness in ways that haven't been imagined yet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-transparent bg-gradient-to-r from-quantum-600 to-cyber-600 bg-clip-text font-bold text-lg cursor-pointer hover:from-cyber-600 hover:to-matrix-600 transition-all duration-300">
                  Initialize Quantum Partnership →
                </span>
                <span className="text-void-500 text-sm">
                  Join 250+ neural network pioneers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
