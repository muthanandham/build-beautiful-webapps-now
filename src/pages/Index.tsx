import HeroSection from "@/components/HeroSection";
import LoveTimeline from "@/components/LoveTimeline";
import MemoryGallery from "@/components/MemoryGallery";
import InteractiveLoveQuiz from "@/components/InteractiveLoveQuiz";
import BirthdaySurprise from "@/components/BirthdaySurprise";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LoveTimeline />
      <MemoryGallery />
      <InteractiveLoveQuiz />
      <BirthdaySurprise />
    </div>
  );
};

export default Index;
