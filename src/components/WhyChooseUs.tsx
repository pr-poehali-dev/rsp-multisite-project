import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "Calendar",
      title: "Более 10 лет на рынке",
      description:
        "Богатый опыт и проверенная репутация в строительной отрасли",
    },
    {
      icon: "CreditCard",
      title: "Отсрочка платежа",
      description: "Гибкие условия оплаты с возможностью рассрочки",
    },
    {
      icon: "Shield",
      title: "Полная ответственность",
      description: "Гарантируем качество и несём ответственность за результат",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Чёткое планирование и своевременная сдача объектов",
    },
    {
      icon: "Award",
      title: "Лицензии и сертификаты",
      description: "Все необходимые разрешения и высокие стандарты качества",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={reason.icon}
                    size={32}
                    className="text-orange-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
