import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">О компании РСП</h1>
            <p className="text-xl text-blue-100">
              Ваш надёжный партнёр в строительстве
            </p>
          </div>
        </div>
      </section>

      {/* About General Contracting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Генеральный подряд и наша экспертность
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                РСП — ведущий генеральный подрядчик с более чем 10-летним опытом
                в строительной индустрии. Мы берём на себя полную
                ответственность за реализацию строительных проектов любой
                сложности — от проектирования до сдачи объекта под ключ.
              </p>
              <p>
                Наша экспертность охватывает все этапы строительства:
                проектирование, получение разрешений, строительно-монтажные
                работы, инженерные системы и благоустройство территории. Мы
                координируем работу всех субподрядчиков и гарантируем соблюдение
                сроков и качества.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Quote */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                      alt="Руководитель РСП"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-xl text-gray-700 italic mb-6">
                      "За годы работы мы поняли, что строительство — это не
                      просто возведение стен. Это создание пространства для
                      жизни, работы и развития людей. Каждый наш проект — это
                      вклад в будущее, и мы гордимся тем, что можем быть частью
                      этого процесса."
                    </blockquote>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        Александр Петров
                      </p>
                      <p className="text-gray-600">Генеральный директор РСП</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Наша команда
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop"
              alt="Команда РСП"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg w-full md:w-auto"
              >
                <Icon name="Settings" className="mr-2" />
                Перейти к услугам
              </Button>
            </Link>

            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg w-full md:w-auto"
              >
                <Icon name="UserPlus" className="mr-2" />
                Записаться на собеседование
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Документы компании
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <Icon name="FileText" className="mr-3 text-blue-600" />
                  <span className="text-lg">Свидетельство о регистрации</span>
                </div>
              </Card>
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <Icon name="FileText" className="mr-3 text-blue-600" />
                  <span className="text-lg">Лицензия на строительство</span>
                </div>
              </Card>
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <Icon name="FileText" className="mr-3 text-blue-600" />
                  <span className="text-lg">Сертификаты качества</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
