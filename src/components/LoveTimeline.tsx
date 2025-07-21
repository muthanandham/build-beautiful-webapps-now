import { Calendar, Heart, MapPin, Camera, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    date: "First Meeting",
    title: "The Day We Met",
    description: "That magical moment when our eyes first met and time seemed to stop",
    icon: Heart,
    color: "text-primary"
  },
  {
    date: "First Date",
    title: "Our First Adventure",
    description: "Coffee, nervous laughter, and the beginning of something beautiful",
    icon: Calendar,
    color: "text-accent-foreground"
  },
  {
    date: "Special Trip",
    title: "Our Romantic Getaway",
    description: "Creating memories in a place that will forever hold our hearts",
    icon: MapPin,
    color: "text-primary"
  },
  {
    date: "Milestone Moment",
    title: "That Perfect Day",
    description: "When we knew this was something truly special and meant to last",
    icon: Camera,
    color: "text-accent-foreground"
  },
  {
    date: "Today",
    title: "Your Special Day",
    description: "Celebrating you and all the joy you bring to my life every single day",
    icon: Gift,
    color: "text-primary"
  }
];

const LoveTimeline = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="mx-auto mb-4 text-primary animate-pulse-heart" size={50} />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment with you has been a beautiful chapter in our story
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-romantic rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-romantic transition-all duration-300 hover:scale-105 animate-fade-in-up">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <event.icon className={`mr-3 ${event.color}`} size={24} />
                      <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;