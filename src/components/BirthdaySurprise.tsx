import { useState } from "react";
import { Gift, Heart, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const surprises = [
  {
    title: "A Love Letter",
    content: "My Dearest Love, every day with you feels like a dream come true. Your smile brightens my darkest days, your laugh is my favorite sound, and your love is my greatest treasure. On this special day, I want you to know that you are the most incredible person I've ever known, and I'm so grateful to celebrate another year of your beautiful existence. Happy Birthday, my darling! 💕",
    icon: Heart,
    color: "text-primary"
  },
  {
    title: "Our Dream Plans",
    content: "This year, let's make some incredible memories together! I'm planning that romantic getaway we've been talking about, weekend adventures to new places, cozy movie nights with all your favorite films, and maybe even that cooking class where we'll laugh at our kitchen disasters. Every moment will be perfect because it's with you! ✨",
    icon: Star,
    color: "text-accent-foreground"
  },
  {
    title: "Why I Love You",
    content: "I love the way you scrunch your nose when you laugh, how you always know just what to say to make me feel better, your incredible kindness to everyone you meet, the way you light up when talking about your passions, how you make ordinary moments feel magical, and the way you love so deeply and completely. You are truly one of a kind! 💖",
    icon: Sparkles,
    color: "text-primary"
  }
];

const BirthdaySurprise = () => {
  const [revealedSurprises, setRevealedSurprises] = useState<number[]>([]);
  const [allRevealed, setAllRevealed] = useState(false);

  const revealSurprise = (index: number) => {
    if (!revealedSurprises.includes(index)) {
      const newRevealed = [...revealedSurprises, index];
      setRevealedSurprises(newRevealed);
      
      if (newRevealed.length === surprises.length) {
        setTimeout(() => setAllRevealed(true), 1000);
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-primary-glow opacity-20" size={16 + Math.random() * 20} />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-accent opacity-30" size={12 + Math.random() * 16} />
            ) : (
              <Star className="text-primary opacity-25" size={10 + Math.random() * 14} />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Gift className="mx-auto mb-4 text-primary animate-pulse-heart" size={60} />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Special Birthday Surprises
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I've prepared some special surprises just for you. Click each gift to reveal what's inside!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {surprises.map((surprise, index) => {
            const isRevealed = revealedSurprises.includes(index);
            const IconComponent = surprise.icon;

            return (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isRevealed 
                    ? 'bg-gradient-soft shadow-romantic' 
                    : 'bg-card shadow-soft hover:shadow-glow'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => revealSurprise(index)}
              >
                <CardContent className="p-8 text-center">
                  {!isRevealed ? (
                    <>
                      <div className="mb-6 relative">
                        <Gift 
                          className="mx-auto text-primary animate-pulse-heart" 
                          size={60} 
                        />
                        <div className="absolute -top-2 -right-2">
                          <Sparkles className="text-accent animate-sparkle" size={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Surprise #{index + 1}
                      </h3>
                      <Button variant="romantic" size="sm">
                        Open Gift
                        <Heart className="ml-2" size={16} />
                      </Button>
                    </>
                  ) : (
                    <div className="animate-fade-in-up">
                      <IconComponent 
                        className={`mx-auto mb-4 ${surprise.color} animate-pulse-heart`} 
                        size={50} 
                      />
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {surprise.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {surprise.content}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {allRevealed && (
          <Card className="bg-gradient-romantic text-white shadow-glow animate-fade-in-up">
            <CardContent className="p-12 text-center">
              <Heart className="mx-auto mb-6 animate-pulse-heart" size={80} />
              <h3 className="text-3xl font-bold mb-4">
                Happy Birthday, Beautiful!
              </h3>
              <p className="text-xl leading-relaxed max-w-2xl mx-auto">
                Thank you for being the most amazing person in my life. Your birthday isn't just 
                a celebration of another year - it's a celebration of all the joy, love, and 
                magic you bring to this world. Here's to many more birthdays together, 
                creating beautiful memories and sharing endless love! 🎉💕
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className="animate-pulse-heart text-white/80" 
                    size={24}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {revealedSurprises.length > 0 && !allRevealed && (
          <div className="text-center">
            <p className="text-muted-foreground">
              {revealedSurprises.length} of {surprises.length} surprises revealed
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              {surprises.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    revealedSurprises.includes(index) ? 'bg-primary scale-125' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BirthdaySurprise;