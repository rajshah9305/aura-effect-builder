
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Cpu, Globe, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dataStreams, setDataStreams] = useState<Array<{ id: number; delay: number }>>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const streams = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.5
    }));
    setDataStreams(streams);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-white subtle-pattern elegant-texture">
      {/* Subtle Interactive Background */}
      <div 
        className="absolute inset-0 opacity-5 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-slate-100/60 to-slate-200/40 animate-soft-float rounded-2xl backdrop-blur-sm" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-bl from-slate-200/50 to-slate-300/30 animate-soft-float rounded-xl backdrop-blur-sm" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-tr from-slate-100/50 to-slate-200/35 animate-soft-float rounded-lg backdrop-blur-sm" style={{ animationDelay: '-4s' }} />

      {/* Subtle Data Streams */}
      {dataStreams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-300/15 to-transparent animate-elegant-slide"
          style={{ 
            left: `${10 + stream.id * 12}%`,
            animationDelay: `${stream.delay}s`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Professional Badge */}
        <div className="mb-8 animate-elegant-slide">
          <Badge className="premium-glass border-slate-200/60 text-slate-700 px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation Digital Innovation
          </Badge>
        </div>

        {/* Enhanced Title */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
          <span className="enhanced-text">Digital Mind</span>
          <br />
          <span className="text-slate-900">Studio</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Where sophisticated creativity intersects with intelligent design. 
          We architect digital experiences that transcend conventional boundaries and 
          redefine the future of human-computer interaction.
        </p>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="professional-glow bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-800 text-white border-0 px-10 py-4 text-lg font-semibold professional-hover group relative overflow-hidden shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Explore the Future</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="premium-glass border-slate-300/70 text-slate-800 hover:bg-slate-50/80 px-10 py-4 text-lg font-semibold professional-hover shadow-sm hover:shadow-md"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Enhanced Innovation Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 enhanced-card flex items-center justify-center group-hover:animate-gentle-pulse transition-all duration-300 bg-gradient-to-br from-slate-50 to-white">
              <Cpu className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Neural Architecture</h3>
            <p className="text-slate-600 text-sm">AI-driven design intelligence</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 enhanced-card flex items-center justify-center group-hover:animate-subtle-glow transition-all duration-300 bg-gradient-to-br from-slate-50 to-white">
              <Globe className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Reach</h3>
            <p className="text-slate-600 text-sm">Worldwide digital ecosystems</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 enhanced-card flex items-center justify-center group-hover:animate-gentle-pulse transition-all duration-300 bg-gradient-to-br from-slate-50 to-white">
              <Zap className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Evolution</h3>
            <p className="text-slate-600 text-sm">Real-time adaptive systems</p>
          </div>
        </div>
      </div>

      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 subtle-pattern bg-[length:100px_100px] animate-soft-float" />
      </div>
    </div>
  );
};

export default Hero;
