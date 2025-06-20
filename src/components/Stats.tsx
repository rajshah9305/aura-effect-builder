
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
      gradient: 'from-slate-600 to-slate-800',
      bgGradient: 'from-slate-50 to-white'
    },
    { 
      icon: Users,
      number: 99.8, 
      suffix: '%', 
      label: 'Client Satisfaction Rate', 
      sublabel: 'Exceptional service delivery',
      gradient: 'from-slate-700 to-slate-900',
      bgGradient: 'from-white to-slate-50'
    },
    { 
      icon: Zap,
      number: 15, 
      suffix: 'x', 
      label: 'Performance Enhancement', 
      sublabel: 'Faster than industry standard',
      gradient: 'from-slate-800 to-slate-600',
      bgGradient: 'from-slate-50 to-slate-100'
    },
    { 
      icon: Globe,
      number: 47, 
      suffix: '', 
      label: 'Global Markets Served', 
      sublabel: 'Worldwide digital presence',
      gradient: 'from-slate-600 to-slate-800',
      bgGradient: 'from-white to-slate-50'
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

  const EnhancedCounter = ({ end, suffix, delay }: { end: number; suffix: string; delay: number }) => {
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
      <span className="enhanced-text font-bold text-5xl md:text-6xl">
        {suffix === '%' ? count.toFixed(1) : count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden bg-surface-white elegant-texture">
      {/* Enhanced Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-pearl via-slate-50/15 to-slate-100/10" />
      <div className="absolute inset-0 subtle-pattern bg-[length:200px_200px] opacity-6" />
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-100/15 to-slate-200/10 rounded-full blur-3xl animate-soft-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-slate-200/10 to-slate-300/8 rounded-full blur-3xl animate-soft-float" style={{animationDelay: '-4s'}} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <Badge className="premium-glass border-slate-200/60 text-slate-700 mb-8 px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Metrics
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Results That <span className="enhanced-text">Matter</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our sophisticated approach delivers measurable results that exceed expectations, 
            creating lasting impact across digital landscapes and user experiences.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="enhanced-card rounded-3xl p-8 professional-hover professional-glow transition-all duration-500 group-hover:scale-105 relative overflow-hidden shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-slate-50/30">
                {/* Enhanced Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.bgGradient} rounded-2xl flex items-center justify-center group-hover:animate-gentle-pulse transition-all duration-500 relative shadow-sm border border-slate-100`}>
                  <stat.icon className={`w-10 h-10 text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] duration-700" />
                </div>

                {/* Enhanced Counter */}
                <div className="mb-4">
                  <EnhancedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    delay={index * 300}
                  />
                </div>

                {/* Enhanced Labels */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:enhanced-text transition-all duration-500">
                  {stat.label}
                </h3>
                
                <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors">
                  {stat.sublabel}
                </p>
                
                {/* Enhanced Indicator */}
                <div className={`h-1 w-20 mx-auto mt-4 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`} />

                {/* Subtle Hover Enhancement */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-1 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Enhanced Corner Detail */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-bl ${stat.gradient} rounded-full animate-gentle-pulse`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center mt-20">
          <div className="enhanced-card rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 subtle-pattern bg-[length:50px_50px] opacity-5" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to achieve <span className="enhanced-text">exceptional results</span>?
              </h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                These metrics represent our commitment to excellence. Let's create something 
                extraordinary together with precision, sophistication, and measurable impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-transparent bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text font-bold text-lg cursor-pointer hover:from-slate-900 hover:to-slate-700 transition-all duration-300 hover:scale-105">
                  Start Your Project →
                </span>
                <span className="text-slate-500 text-sm">
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
