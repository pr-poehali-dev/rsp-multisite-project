import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 18:00",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@rsp-build.ru",
      description: "Отвечаем в течение часа",
    },
    {
      icon: "MapPin",
      title: "Офис",
      info: "г. Москва, ул. Строителей, 15",
      description: "Приёмная, этаж 3",
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в
            течение часа
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="bg-blue-800 border-blue-700 text-white"
            >
              <CardHeader className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold mb-2">{contact.info}</p>
                <p className="text-blue-200">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-800 rounded-lg p-8 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Получить консультацию</h3>
          <p className="text-blue-100 mb-6">
            Оставьте заявку, и наш менеджер свяжется с вами для бесплатной
            консультации
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            <Icon name="MessageCircle" className="mr-2" />
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
