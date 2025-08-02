import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Восстановление повреждённых фото",
      description: "Устранение трещин, пятен и царапин на старых фотографиях",
      icon: "ImageIcon",
      price: "от 2000 ₽"
    },
    {
      title: "Цветокоррекция и реставрация",
      description: "Восстановление выцветших цветов и улучшение качества",
      icon: "Palette",
      price: "от 1500 ₽"
    },
    {
      title: "Удаление дефектов",
      description: "Убираем пыль, царапины и другие повреждения",
      icon: "Eraser",
      price: "от 1000 ₽"
    },
    {
      title: "Оцифровка старых снимков",
      description: "Перевод аналоговых фото в цифровой формат",
      icon: "Scan",
      price: "от 500 ₽"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Отправка фото",
      description: "Пришлите нам фотографию через WhatsApp или Email"
    },
    {
      step: "2", 
      title: "Оценка работы",
      description: "Мы оценим сложность и сообщим стоимость в течение часа"
    },
    {
      step: "3",
      title: "Реставрация",
      description: "Профессиональная обработка фото занимает 1-3 дня"
    },
    {
      step: "4",
      title: "Получение результата",
      description: "Отправляем готовое фото в высоком разрешении"
    }
  ];

  const faq = [
    {
      question: "Какие форматы фото вы принимаете?",
      answer: "Мы работаем с любыми форматами: JPEG, PNG, TIFF, а также сканируем бумажные фотографии."
    },
    {
      question: "Сколько времени занимает реставрация?",
      answer: "Обычно 1-3 рабочих дня в зависимости от сложности повреждений. Срочные заказы выполняем за 24 часа."
    },
    {
      question: "Можете ли вы восстановить очень старые фото?",
      answer: "Да, мы специализируемся на реставрации фотографий любого возраста, включая снимки начала XX века."
    },
    {
      question: "В каком качестве будет готовое фото?",
      answer: "Мы предоставляем фото в высоком разрешении (300 DPI) подходящем для печати любого размера."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Camera" className="text-eco-green" size={32} />
              <span className="text-xl font-bold text-gray-900">ФотоРеставрация</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-eco-green transition-colors">Услуги</a>
              <a href="#gallery" className="text-gray-600 hover:text-eco-green transition-colors">Примеры работ</a>
              <a href="#process" className="text-gray-600 hover:text-eco-green transition-colors">Процесс</a>
              <a href="#pricing" className="text-gray-600 hover:text-eco-green transition-colors">Цены</a>
              <a href="#contact" className="text-gray-600 hover:text-eco-green transition-colors">Контакты</a>
            </div>
            <Button className="bg-eco-green hover:bg-eco-dark text-white">
              Заказать реставрацию
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-eco-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-eco-green/10 text-eco-green border-eco-green/20">
              Профессиональная реставрация
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Восстановление фото<br />
              <span className="text-eco-green">на памятник</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Вернём жизнь старым и повреждённым фотографиям с помощью профессиональной ретуши. 
              Бережно восстанавливаем семейные воспоминания для увековечения памяти.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-eco-green hover:bg-eco-dark text-white px-8">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить фото
              </Button>
              <Button variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональная реставрация фотографий с использованием современных технологий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-eco-light/30">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-eco-green" size={32} />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="border-eco-green text-eco-green">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Примеры наших работ</h2>
            <p className="text-xl text-gray-600">
              Посмотрите, как мы восстанавливаем повреждённые фотографии
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/img/a02ccfc5-d1b6-4ce2-926f-3786b9aa965f.jpg" 
                    alt="Пример реставрации фото" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 shadow-sm">
                      До и После
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                <Icon name="Images" className="mr-2" size={20} />
                Посмотреть больше примеров
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">
              Простой и прозрачный процесс реставрации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-eco-green rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-eco-green/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-eco-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600">
              Честные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-gray-100 hover:border-eco-green transition-colors">
              <CardHeader>
                <CardTitle className="text-eco-green">Базовая</CardTitle>
                <div className="text-3xl font-bold text-gray-900">1000 ₽</div>
                <CardDescription>Простые дефекты</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Удаление пыли и царапин</li>
                  <li>• Коррекция яркости</li>
                  <li>• Базовая ретушь</li>
                  <li>• Срок: 1-2 дня</li>
                </ul>
                <Button className="w-full mt-6 bg-eco-green hover:bg-eco-dark">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-eco-green relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-eco-green text-white">Популярная</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-eco-green">Стандартная</CardTitle>
                <div className="text-3xl font-bold text-gray-900">2000 ₽</div>
                <CardDescription>Средние повреждения</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Все из базовой</li>
                  <li>• Восстановление трещин</li>
                  <li>• Цветокоррекция</li>
                  <li>• Улучшение резкости</li>
                  <li>• Срок: 2-3 дня</li>
                </ul>
                <Button className="w-full mt-6 bg-eco-green hover:bg-eco-dark">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100 hover:border-eco-green transition-colors">
              <CardHeader>
                <CardTitle className="text-eco-green">Премиум</CardTitle>
                <div className="text-3xl font-bold text-gray-900">от 3000 ₽</div>
                <CardDescription>Сложная реставрация</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Все из стандартной</li>
                  <li>• Сложная реконструкция</li>
                  <li>• Восстановление лиц</li>
                  <li>• Индивидуальный подход</li>
                  <li>• Срок: 3-5 дней</li>
                </ul>
                <Button className="w-full mt-6 bg-eco-green hover:bg-eco-dark">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о реставрации фото
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-gray-900 hover:text-eco-green">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят наши клиенты о качестве работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Мария Петрова",
                text: "Восстановили фотографию моего дедушки военных лет. Результат превзошёл все ожидания!",
                rating: 5
              },
              {
                name: "Алексей Иванов", 
                text: "Быстро и качественно восстановили семейное фото. Очень благодарен за профессионализм.",
                rating: 5
              },
              {
                name: "Елена Сидорова",
                text: "Думала, что старое фото уже не спасти. Мастера сделали невозможное - фото как новое!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-eco-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы восстановить ваши фото?</h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами удобным способом и получите бесплатную консультацию
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Icon name="Phone" className="mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="opacity-90">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" className="mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="opacity-90">info@fotorestore.ru</p>
              </div>
              <div className="text-center">
                <Icon name="MessageCircle" className="mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="opacity-90">+7 (999) 123-45-67</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-eco-green hover:bg-gray-100">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить фото
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-eco-green">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Camera" className="text-eco-green" size={32} />
                <span className="text-xl font-bold">ФотоРеставрация</span>
              </div>
              <p className="text-gray-400">
                Профессиональная реставрация фотографий для сохранения семейной памяти
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Реставрация фото</li>
                <li>Цветокоррекция</li>
                <li>Удаление дефектов</li>
                <li>Оцифровка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Цены</li>
                <li>Портфолио</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@fotorestore.ru</li>
                <li>Ежедневно 9:00-21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ФотоРеставрация. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;