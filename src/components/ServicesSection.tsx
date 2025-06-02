import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Building2",
      title: "Жилищное строительство",
      description: "Многоквартирные дома, коттеджные посёлки, таунхаусы",
      features: [
        "Проектирование",
        "Строительство",
        "Инженерные сети",
        "Благоустройство",
      ],
    },
    {
      icon: "Factory",
      title: "Промышленное строительство",
      description: "Заводы, склады, производственные комплексы",
      features: [
        "Металлоконструкции",
        "Инженерия",
        "Спецтехника",
        "Пусконаладка",
      ],
    },
    {
      icon: "Store",
      title: "Коммерческая недвижимость",
      description: "Торговые центры, офисные здания, гостиницы",
      features: [
        "Дизайн-проект",
        "Строительство",
        "Отделка",
        "Сдача в эксплуатацию",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный цикл строительных работ от идеи до ключей
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon}
                    size={40}
                    className="text-orange-600"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
