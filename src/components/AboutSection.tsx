import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const advantages = [
    {
      icon: "Award",
      title: "15+ лет опыта",
      description: "Успешно реализовали более 200 объектов различной сложности",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Полная ответственность за результат и гарантийное обслуживание",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Чёткое планирование и контроль каждого этапа строительства",
    },
    {
      icon: "Users",
      title: "Профессиональная команда",
      description:
        "Высококвалифицированные специалисты с лицензиями и сертификатами",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            О компании РСП
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов, которая превращает архитектурные
            замыслы в реальные объекты. Специализируемся на комплексном
            строительстве жилых, коммерческих и промышленных объектов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
