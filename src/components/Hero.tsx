
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev];
        
        // Add new particle
        if (newParticles.length < 15) {
          newParticles.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 10,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.5 + 0.3
          });
        }
        
        // Update existing particles
        return newParticles
          .map(particle => ({
            ...particle,
            y: particle.y - 2,
            opacity: particle.opacity - 0.005
          }))
          .filter(particle => particle.y > -10 && particle.opacity > 0);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 via-neon-500/10 to-electric-500/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: `radial-gradient(circle, rgba(6, 182, 212, ${particle.opacity}) 0%, transparent 70%)`
          }}
        />
      ))}

      {/* Mouse Glow Effect */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 bg-gradient-radial from-electric-500/20 via-neon-400/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in">
          <Badge variant="outline" className="glass-effect text-electric-400 border-electric-500/50 mb-8 text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to the Future of Digital Creation
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-left">
          <span className="text-gradient">Digital Mind</span>
          <br />
          <span className="text-white">Studio</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-right">
          Where creativity meets cutting-edge technology. We craft extraordinary digital experiences 
          that push the boundaries of imagination and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button size="lg" className="bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-600 hover:to-neon-600 text-white border-0 px-8 py-4 text-lg font-semibold hover-lift glow-effect group">
            Explore Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="glass-effect text-white border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold hover-lift">
            Start Your Project
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center gap-12 mt-16 animate-fade-in">
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-500 to-electric-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <p className="text-slate-400 text-sm font-medium">AI-Powered</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-500 to-neon-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <p className="text-slate-400 text-sm font-medium">Lightning Fast</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-600 to-neon-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <p className="text-slate-400 text-sm font-medium">Creative Magic</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-electric-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-neon-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-electric-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '-4s' }} />
    </div>
  );
};

export default Hero;
