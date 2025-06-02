import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const AwardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards = [
    {
      title: "Диплом за качество строительства",
      image:
        "https://images.unsplash.com/photo-1618083263100-2e2c7bb8c8e4?w=400&h=500&fit=crop",
    },
    {
      title: "Благодарность от администрации",
      image:
        "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400&h=500&fit=crop",
    },
    {
      title: "Сертификат соответствия ISO",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [awards.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Награды и сертификаты
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {awards.map((award, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="overflow-hidden">
                    <div className="relative h-96">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white text-center">
                          {award.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {awards.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCarousel;
