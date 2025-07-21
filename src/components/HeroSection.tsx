import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-soft"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-primary-glow animate-float opacity-30`}
            size={20 + (i % 3) * 10}
            style={{
              left: `${15 + (i * 8) % 70}%`,
              top: `${20 + (i * 7) % 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <Heart className="mx-auto mb-6 text-primary animate-pulse-heart" size={80} />
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Happy Birthday
            <span className="block text-primary bg-gradient-romantic bg-clip-text text-transparent">
              Beautiful
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A special digital journey created just for you, filled with our memories, 
            love, and all the reasons why you make every day magical ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="romantic" 
              size="xl"
              className="animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Heart className="mr-2" size={20} />
              Start Our Journey
            </Button>
            
            <Button 
              variant="gold" 
              size="xl"
              className="animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              View Surprises
            </Button>
          </div>
        </div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full animate-sparkle"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${10 + (i * 15) % 80}%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;