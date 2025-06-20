
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
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-white subtle-grid clean-texture">
      {/* Dynamic Background Effects */}
      <div 
        className="absolute inset-0 opacity-10 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 0, 0, 0.02) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Clean Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-mono-100/50 to-mono-200/30 animate-float-clean rounded-2xl" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-bl from-mono-200/40 to-mono-300/20 animate-float-clean rounded-xl" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-tr from-mono-100/40 to-mono-200/25 animate-float-clean rounded-lg" style={{ animationDelay: '-4s' }} />

      {/* Data Flow Streams */}
      {dataStreams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-mono-300/20 to-transparent animate-data-flow"
          style={{ 
            left: `${10 + stream.id * 12}%`,
            animationDelay: `${stream.delay}s`
          }}
        />
      ))}

      {/* Orbital Elements */}
      <div className="absolute inset-0 animate-orbital">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-mono-600 rounded-full opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-mono-500 rounded-full opacity-40" />
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-mono-700 rounded-full opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Professional Badge */}
        <div className="mb-8 animate-elevate">
          <Badge className="clean-glass border-mono-200/50 text-mono-800 px-6 py-3 text-sm font-medium shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation Digital Innovation
          </Badge>
        </div>

        {/* High-Contrast Title */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
          <span className="contrast-text">Digital Mind</span>
          <br />
          <span className="text-mono-900 shine-lines">Studio</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="text-xl md:text-2xl text-mono-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Where sophisticated creativity intersects with intelligent design. 
          We architect digital experiences that transcend conventional boundaries and 
          redefine the future of human-computer interaction.
        </p>

        {/* Clean Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="pro-glow bg-gradient-to-r from-mono-800 to-mono-900 hover:from-mono-900 hover:to-mono-800 text-white border-0 px-10 py-4 text-lg font-semibold clean-levitate group relative overflow-hidden shadow-lg"
          >
            <span className="relative z-10">Explore the Future</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-mono-700 to-mono-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="clean-glass border-mono-300/60 text-mono-800 hover:bg-mono-50 px-10 py-4 text-lg font-semibold clean-levitate shine-lines shadow-sm"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Innovation Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group magnetic">
            <div className="w-20 h-20 mx-auto mb-4 clean-glass rounded-2xl flex items-center justify-center group-hover:animate-bright-pulse transition-all duration-300 bg-gradient-to-br from-mono-50 to-white shadow-sm">
              <Cpu className="w-10 h-10 text-mono-700" />
            </div>
            <h3 className="text-lg font-semibold text-mono-900 mb-2">Neural Architecture</h3>
            <p className="text-mono-600 text-sm">AI-driven design intelligence</p>
          </div>
          
          <div className="text-center group magnetic">
            <div className="w-20 h-20 mx-auto mb-4 clean-glass rounded-2xl flex items-center justify-center group-hover:animate-soft-glow transition-all duration-300 bg-gradient-to-br from-mono-50 to-white shadow-sm">
              <Globe className="w-10 h-10 text-mono-700" />
            </div>
            <h3 className="text-lg font-semibold text-mono-900 mb-2">Global Reach</h3>
            <p className="text-mono-600 text-sm">Worldwide digital ecosystems</p>
          </div>
          
          <div className="text-center group magnetic">
            <div className="w-20 h-20 mx-auto mb-4 clean-glass rounded-2xl flex items-center justify-center group-hover:animate-bright-pulse transition-all duration-300 bg-gradient-to-br from-mono-50 to-white shadow-sm">
              <Zap className="w-10 h-10 text-mono-700" />
            </div>
            <h3 className="text-lg font-semibold text-mono-900 mb-2">Instant Evolution</h3>
            <p className="text-mono-600 text-sm">Real-time adaptive systems</p>
          </div>
        </div>
      </div>

      {/* Background Pattern Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-subtle-pattern bg-[length:100px_100px] animate-shine-sweep" />
      </div>
    </div>
  );
};

export default Hero;
