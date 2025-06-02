import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: "Building2",
      title: "Проектирование",
      description: "Архитектурное и инженерное проектирование объектов",
    },
    {
      icon: "Hammer",
      title: "Строительство",
      description: "Возведение зданий и сооружений любой сложности",
    },
    {
      icon: "Zap",
      title: "Инженерные сети",
      description: "Электроснабжение, водоснабжение, отопление, вентиляция",
    },
    {
      icon: "Trees",
      title: "Благоустройство",
      description: "Ландшафтный дизайн и благоустройство территории",
    },
  ];

  const contractTypes = [
    {
      title: "Генеральный подряд",
      description: "Полная ответственность за проект от А до Я",
    },
    {
      title: "Субподряд",
      description: "Выполнение отдельных видов работ",
    },
    {
      title: "Технический заказчик",
      description: "Управление проектом и контроль качества",
    },
  ];

  const priorities = [
    {
      icon: "Eye",
      title: "Прозрачность",
      description: "Открытое ценообразование и отчётность на каждом этапе",
    },
    {
      icon: "Calendar",
      title: "Планирование",
      description: "Детальное планирование всех этапов строительства",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Гарантированная сдача объекта в установленные сроки",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-blue-100">
              Полный комплекс строительных услуг
            </p>
          </div>
        </div>
      </section>

      {/* General Contracting Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Генеральный подряд в строительстве
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Генеральный подряд — это комплексный подход к реализации
                строительных проектов, при котором одна компания берёт на себя
                полную ответственность за весь процесс строительства от начала
                до конца.
              </p>
              <p>
                РСП как генеральный подрядчик координирует работу всех
                участников проекта, обеспечивает качество выполнения работ,
                соблюдение сроков и бюджета. Это позволяет заказчику работать с
                одним надёжным партнёром вместо множества отдельных подрядчиков.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Complex */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Комплекс услуг
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наш опыт</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                15000+
              </div>
              <div className="text-lg font-semibold text-gray-900">
                кв.м сдано
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-lg font-semibold text-gray-900">
                успешных проектов
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-lg font-semibold text-gray-900">
                профессионалов
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-lg font-semibold text-gray-900">
                благотворительных проектов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Forms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Формы контрактов
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contractTypes.map((contract, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {contract.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{contract.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Priorities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Приоритеты компании
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {priorities.map((priority, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={priority.icon}
                      size={32}
                      className="text-orange-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {priority.title}
                  </h3>
                  <p className="text-gray-600">{priority.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать ваш проект?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
