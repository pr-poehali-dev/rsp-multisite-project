import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">РСП</h3>
            <p className="text-gray-300 mb-4">
              Генеральный подрядчик в строительстве. Реализуем проекты любой
              сложности.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-3 text-orange-400" />
                <span className="text-gray-300">+7 (846) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-3 text-orange-400" />
                <span className="text-gray-300">info@rsp-samara.ru</span>
              </div>
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mr-3 text-orange-400 mt-1"
                />
                <span className="text-gray-300">
                  г. Самара, ул. Владимирская, 15
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="text-gray-300 space-y-2">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 РСП. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
