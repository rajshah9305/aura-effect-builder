
import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Completed', color: 'from-electric-500 to-electric-600' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-neon-500 to-neon-600' },
    { number: 5, suffix: 'x', label: 'Faster Delivery', color: 'from-purple-500 to-pink-500' },
    { number: 24, suffix: '/7', label: 'Support Available', color: 'from-green-500 to-emerald-500' }
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

  const AnimatedCounter = ({ end, suffix, delay }: { end: number; suffix: string; delay: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        const duration = 2000;
        const increment = end / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }, [isVisible, end, delay]);

    return (
      <span className="text-gradient font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 via-transparent to-neon-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-500/10 rounde-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="glass-effect text-electric-400 border-electric-500/50 mb-6">
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Numbers That <span className="text-gradient">Matter</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the results we deliver 
            and the relationships we build with our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-effect rounded-2xl p-8 hover-lift group-hover:glow-effect transition-all duration-300">
                {/* Icon/Number */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      delay={index * 200}
                    />
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <div className={`h-1 w-16 mx-auto bg-gradient-to-r ${stat.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg">
            Ready to be part of these success stories?
          </p>
          <div className="mt-4">
            <span className="text-electric-400 font-semibold cursor-pointer hover:text-electric-300 transition-colors">
              Let's create something amazing together →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
