import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            РСП — Ваш надёжный
            <span className="text-orange-400"> генеральный подрядчик</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
            Реализуем строительные проекты любой сложности под ключ. От
            проектирования до сдачи объекта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
