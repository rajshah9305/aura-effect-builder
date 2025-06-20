
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
    const streams = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 0.5
    }));
    setDataStreams(streams);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden hex-grid">
      {/* Dynamic Background Effects */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--quantum-blue))/0.1 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Morphic Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-quantum-400/20 to-cyber-400/20 animate-morphic-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-bl from-neural-400/20 to-matrix-400/20 animate-morphic-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-tr from-cyber-400/20 to-quantum-400/20 animate-morphic-float" style={{ animationDelay: '-4s' }} />

      {/* Data Streams */}
      {dataStreams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-quantum-400/50 to-transparent animate-data-stream"
          style={{ 
            left: `${10 + stream.id * 10}%`,
            animationDelay: `${stream.delay}s`
          }}
        />
      ))}

      {/* Orbital Elements */}
      <div className="absolute inset-0 animate-orbital">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-quantum-400 rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyber-400 rounded-full" />
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-neural-400 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Revolutionary Badge */}
        <div className="mb-8 animate-levitate">
          <Badge className="neo-glass border-quantum-200/50 text-quantum-700 px-6 py-3 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation Digital Innovation
          </Badge>
        </div>

        {/* Holographic Title */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
          <span className="holo-text">Digital Mind</span>
          <br />
          <span className="text-void-900 neural-lines">Studio</span>
        </h1>

        {/* Revolutionary Subtitle */}
        <p className="text-xl md:text-2xl text-void-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Where quantum creativity intersects with neural intelligence. 
          We architect digital realities that transcend conventional boundaries and 
          redefine the future of human-computer interaction.
        </p>

        {/* Quantum Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="quantum-glow bg-gradient-to-r from-quantum-500 to-cyber-500 hover:from-quantum-600 hover:to-cyber-600 text-white border-0 px-10 py-4 text-lg font-semibold levitate group relative overflow-hidden"
          >
            <span className="relative z-10">Explore the Future</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-500 to-quantum-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="neo-glass border-quantum-300/50 text-void-700 hover:bg-quantum-50/50 px-10 py-4 text-lg font-semibold levitate neural-lines"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Innovation Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group magnetic">
            <div className="w-20 h-20 mx-auto mb-4 neo-glass rounded-2xl flex items-center justify-center group-hover:animate-quantum-pulse transition-all duration-300 bg-gradient-to-br from-quantum-100 to-quantum-50">
              <Cpu className="w-10 h-10 text-quantum-600" />
            </div>
            <h3 className="text-lg font-semibold text-void-800 mb-2">Neural Architecture</h3>
            <p className="text-void-600 text-sm">AI-driven design intelligence</p>
          </div>
          
          <div className="text-center group magnetic">
            <div className="w-20 h-20 mx-auto mb-4 neo-glass rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300 bg-gradient-to-br from-cyber-100 to-cyber-50">
              <Globe className="w-10 h-10 text-cyber-600" />
            </div>
            <h3 className="text-lg font-semibold text-void-800 mb-2">Quantum Reach</h3>
            <p className="text-void-600 text-sm">Global digital ecosystems</p>
          </div>
          
          <div className="text-center group magnetic">
            <div className="w-20 h-20 mx-auto mb-4 neo-glass rounded-2xl flex items-center justify-center group-hover:animate-quantum-pulse transition-all duration-300 bg-gradient-to-br from-neural-100 to-neural-50">
              <Zap className="w-10 h-10 text-neural-600" />
            </div>
            <h3 className="text-lg font-semibold text-void-800 mb-2">Instant Evolution</h3>
            <p className="text-void-600 text-sm">Real-time adaptive systems</p>
          </div>
        </div>
      </div>

      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-quantum-mesh bg-[length:100px_100px] animate-neural-sweep" />
      </div>
    </div>
  );
};

export default Hero;
