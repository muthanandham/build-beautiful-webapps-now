import { useState } from "react";
import { Heart, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder memories - you can replace these with real photos
const memories = [
  {
    id: 1,
    title: "Our First Selfie",
    description: "That nervous but excited first photo together",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    date: "The Beginning"
  },
  {
    id: 2,
    title: "Adventure Day",
    description: "Exploring new places, making new memories",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    date: "Best Day Ever"
  },
  {
    id: 3,
    title: "Cozy Evening",
    description: "Perfect night in, just you and me",
    image: "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?w=600&h=400&fit=crop",
    date: "So Perfect"
  },
  {
    id: 4,
    title: "Sunset Together",
    description: "Watching the world fade into beautiful colors",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&h=400&fit=crop",
    date: "Magical Moment"
  },
  {
    id: 5,
    title: "Celebration Time",
    description: "Dancing through life with you by my side",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
    date: "Pure Joy"
  },
  {
    id: 6,
    title: "Simple Happiness",
    description: "Finding joy in the little everyday moments",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop",
    date: "Every Day"
  }
];

const MemoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const currentMemory = memories[currentIndex];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Camera className="mx-auto mb-4 text-primary animate-pulse-heart" size={50} />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every photo tells a story of love, laughter, and the magic we create together
          </p>
        </div>

        {/* Featured Memory Display */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-romantic bg-card/90 backdrop-blur-sm">
            <div className="relative">
              <img
                src={currentMemory.image}
                alt={currentMemory.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={prevImage}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={nextImage}
              >
                <ChevronRight size={20} />
              </Button>

              {/* Memory Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm mb-2">
                    {currentMemory.date}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{currentMemory.title}</h3>
                  <p className="text-white/90">{currentMemory.description}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {memories.map((memory, index) => (
            <Card
              key={memory.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden ${
                index === currentIndex ? 'ring-4 ring-primary shadow-glow' : 'shadow-soft'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-24 md:h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="text-white animate-pulse-heart" size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Memory Counter */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Memory {currentIndex + 1} of {memories.length}
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            {memories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;