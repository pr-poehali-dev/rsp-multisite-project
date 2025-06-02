import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const EmotionalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Мы строим не просто здания — мы создаём будущее
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Каждый наш проект — это история успеха, воплощённая в камне и стали.
            Мы понимаем, что за каждым строительным объектом стоят мечты людей,
            развитие бизнеса и процветание сообществ. Доверьте нам воплощение
            ваших самых амбициозных планов.
          </p>

          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
