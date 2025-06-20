
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
      label: 'Premium Projects Delivered', 
      sublabel: 'Sophisticated digital experiences',
      gradient: 'from-mono-600 to-mono-800',
      bgGradient: 'from-mono-50 to-mono-100'
    },
    { 
      icon: Users,
      number: 99.8, 
      suffix: '%', 
      label: 'Client Satisfaction Rate', 
      sublabel: 'Exceptional service delivery',
      gradient: 'from-mono-700 to-mono-900',
      bgGradient: 'from-mono-100 to-mono-200'
    },
    { 
      icon: Zap,
      number: 15, 
      suffix: 'x', 
      label: 'Performance Enhancement', 
      sublabel: 'Faster than industry standard',
      gradient: 'from-mono-800 to-mono-600',
      bgGradient: 'from-mono-50 to-mono-150'
    },
    { 
      icon: Globe,
      number: 47, 
      suffix: '', 
      label: 'Global Markets Served', 
      sublabel: 'Worldwide digital presence',
      gradient: 'from-mono-600 to-mono-800',
      bgGradient: 'from-mono-100 to-mono-200'
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

  const SophisticatedCounter = ({ end, suffix, delay }: { end: number; suffix: string; delay: number }) => {
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
      <span className="mono-text font-bold text-5xl md:text-6xl">
        {suffix === '%' ? count.toFixed(1) : count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden texture">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-cream via-mono-50/20 to-mono-100/20" />
      <div className="absolute inset-0 bg-mono-mesh bg-[length:200px_200px] opacity-15 animate-gradient-sweep" />
      
      {/* Morphic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-mono-200/15 to-mono-300/10 rounded-full blur-3xl animate-morphic-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-mono-300/10 to-mono-400/5 rounded-full blur-3xl animate-morphic-float" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mono-glass border-mono-300/50 text-mono-800 mb-8 px-6 py-3">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Metrics
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-mono-900 mb-8 leading-tight">
            Results That <span className="mono-text">Matter</span>
          </h2>
          <p className="text-xl text-mono-600 max-w-3xl mx-auto leading-relaxed">
            Our sophisticated approach delivers measurable results that exceed expectations, 
            creating lasting impact across digital landscapes and user experiences.
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
              <div className="mono-glass rounded-3xl p-8 levitate mono-glow transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.bgGradient} rounded-2xl flex items-center justify-center group-hover:animate-mono-pulse transition-all duration-500 relative`}>
                  <stat.icon className={`w-10 h-10 text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`} />
                  <div className="absolute inset-0 gradient-lines opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Sophisticated Counter */}
                <div className="mb-4">
                  <SophisticatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    delay={index * 300}
                  />
                </div>

                {/* Labels */}
                <h3 className="text-xl font-bold text-mono-900 mb-2 group-hover:mono-text transition-all duration-500">
                  {stat.label}
                </h3>
                
                <p className="text-mono-600 text-sm group-hover:text-mono-700 transition-colors">
                  {stat.sublabel}
                </p>
                
                {/* Sophisticated Indicator */}
                <div className={`h-1 w-20 mx-auto mt-4 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`} />

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-2 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Subtle Corner Detail */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-bl ${stat.gradient} rounded-full animate-pulse`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sophisticated Call-to-Action */}
        <div className="text-center mt-20">
          <div className="mono-glass rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-mono-mesh bg-[length:50px_50px] opacity-5" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-mono-900 mb-4">
                Ready to achieve <span className="mono-text">exceptional results</span>?
              </h3>
              <p className="text-mono-600 text-lg mb-8 max-w-2xl mx-auto">
                These metrics represent our commitment to excellence. Let's create something 
                extraordinary together with precision, sophistication, and measurable impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-transparent bg-gradient-to-r from-mono-700 to-mono-900 bg-clip-text font-bold text-lg cursor-pointer hover:from-mono-900 hover:to-mono-700 transition-all duration-300">
                  Start Your Project →
                </span>
                <span className="text-mono-500 text-sm">
                  Join 250+ satisfied clients worldwide
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
