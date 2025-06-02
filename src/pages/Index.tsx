import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmotionalSection from "@/components/EmotionalSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AwardsCarousel from "@/components/AwardsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <EmotionalSection />
      <ProjectsCarousel />
      <AwardsCarousel />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
