import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import BeforeAfterSlider from "@/components/ui/before-after-slider";

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
              <span className="text-xl font-bold text-gray-900">Ретушь.ру</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-eco-green transition-colors">Услуги</a>
              <a href="#gallery" className="text-gray-600 hover:text-eco-green transition-colors">Примеры работ</a>
              <a href="#process" className="text-gray-600 hover:text-eco-green transition-colors">Процесс</a>
              <a href="#pricing" className="text-gray-600 hover:text-eco-green transition-colors">Цены</a>
              <a href="#contact" className="text-gray-600 hover:text-eco-green transition-colors">Контакты</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <div className="flex flex-col text-sm leading-tight">
                  <a 
                    href="tel:+79123456789" 
                    className="flex items-center space-x-1 text-gray-700 hover:text-eco-green transition-colors mb-0.5"
                  >
                    <Icon name="Phone" size={12} />
                    <span className="font-medium">+7 912 345-67-89</span>
                  </a>
                  <a 
                    href="mailto:info@retush.ru" 
                    className="flex items-center space-x-1 text-gray-600 hover:text-eco-green transition-colors"
                  >
                    <Icon name="Mail" size={12} />
                    <span>info@retush.ru</span>
                  </a>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <a 
                  href="https://wa.me/79123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-colors"
                  title="Написать в WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
              </div>
              <Button className="bg-eco-green hover:bg-eco-dark text-white">
                Заказать Ретушь
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-eco-green/10 via-white to-eco-green/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-eco-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-eco-green/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-eco-green/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-eco-green/10 text-eco-green border-eco-green/20 mb-6 text-sm px-4 py-2">
                ✨ Профессиональная реставрация
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Возвращаем</span>
              <br />
              <span className="bg-gradient-to-r from-eco-green via-eco-green/80 to-eco-green bg-clip-text text-transparent animate-pulse">жизнь</span>
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"> вашим</span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">фотографиям</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 mb-12 mt-8 leading-relaxed max-w-4xl mx-auto">
              Превращаем повреждённые снимки в <span className="text-eco-green font-semibold">идеальные воспоминания</span> с помощью передовых технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-eco-green to-eco-green/80 hover:from-eco-green/90 hover:to-eco-green/70 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <Icon name="Upload" className="mr-3" size={24} />
                Отправить фото
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-eco-green text-eco-green hover:bg-eco-green hover:text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Icon name="Play" className="mr-3" size={24} />
                Посмотреть примеры
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-eco-green mb-2">500+</div>
                <div className="text-gray-600 text-sm md:text-base">Восстановленных фото</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-eco-green mb-2">5⭐</div>
                <div className="text-gray-600 text-sm md:text-base">Рейтинг клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-eco-green mb-2">24ч</div>
                <div className="text-gray-600 text-sm md:text-base">Срочная реставрация</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.3)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-eco-green/10 text-eco-green border-eco-green/20 mb-6">
              Услуги реставрации
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Что мы <span className="text-eco-green">восстанавливаем</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Любые повреждения — не проблема для наших специалистов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-eco-green/20 to-eco-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon name={service.icon} className="text-eco-green group-hover:scale-110 transition-transform duration-300" size={36} />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-eco-green transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Badge className="bg-gradient-to-r from-eco-green/10 to-eco-green/5 text-eco-green border-eco-green/20 px-4 py-2 text-lg font-semibold">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-eco-green/5 via-white to-eco-green/10 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-eco-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-eco-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-eco-green border-eco-green/20 mb-6 backdrop-blur-sm">
              ✨ Портфолио работ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-eco-green">Магия</span> восстановления
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Смотрите сами, как мы превращаем повреждённые снимки в шедевры
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12">
              <BeforeAfterSlider
                beforeImage="/img/b3f03ad1-ac46-4b7f-8c17-bfa00f7484f4.jpg"
                afterImage="/img/7f1804b5-f358-4bf4-827b-afab3426f4e4.jpg"
                beforeLabel="До реставрации"
                afterLabel="После реставрации"
                className="rounded-2xl overflow-hidden"
              />
            </div>
            
            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-eco-green/10 to-eco-green/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Готовы увидеть <span className="text-eco-green">результат?</span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Отправьте нам своё фото и получите бесплатную оценку
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-eco-green hover:bg-eco-green/90 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Icon name="Upload" className="mr-2" size={20} />
                  Отправить фото бесплатно
                </Button>
                <Button variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Icon name="Images" className="mr-2" size={20} />
                  Больше примеров
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-r from-white via-eco-green/5 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 via-transparent to-eco-green/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-eco-green border-eco-green/20 mb-6 backdrop-blur-sm">
              🚀 Простой процесс
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Как мы <span className="text-eco-green">творим чудеса</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Всего 4 простых шага отделяют вас от идеального результата
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="group text-center relative">
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-eco-green to-eco-green/50 z-10"></div>
                )}
                
                {/* Step card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-eco-green/10">
                  <div className="w-20 h-20 bg-gradient-to-br from-eco-green to-eco-green/80 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-eco-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы начать?
              </h3>
              <p className="text-gray-600 mb-6">
                Отправьте нам фото прямо сейчас и получите бесплатную консультацию
              </p>
              <Button size="lg" className="bg-gradient-to-r from-eco-green to-eco-green/80 hover:from-eco-green/90 hover:to-eco-green/70 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-white via-eco-green/5 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-eco-green border-eco-green/20 mb-6 backdrop-blur-sm">
              💎 Прозрачное ценообразование
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Честные <span className="text-eco-green">цены</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Никаких скрытых платежей. Оплата только после одобрения результата
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-eco-green/20 to-eco-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Sparkles" className="text-eco-green" size={32} />
                </div>
                <CardTitle className="text-2xl text-eco-green mb-2">Базовая</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">1000 ₽</div>
                <CardDescription className="text-gray-600">Простые дефекты</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Удаление пыли и царапин
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Коррекция яркости
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Базовая ретушь
                  </li>
                  <li className="flex items-center">
                    <Icon name="Clock" className="text-eco-green mr-2" size={16} />
                    Срок: 1-2 дня
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-eco-green to-eco-green/80 hover:from-eco-green/90 hover:to-eco-green/70 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="group text-center border-2 border-eco-green relative transform scale-105 shadow-2xl bg-white/90 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-eco-green to-eco-green/80 text-white px-4 py-2 shadow-lg">
                  🔥 Популярная
                </Badge>
              </div>
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-eco-green/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon name="Star" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-eco-green mb-2">Стандартная</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">2000 ₽</div>
                <CardDescription className="text-gray-600">Средние повреждения</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Все из базовой
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Восстановление трещин
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Цветокоррекция
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Улучшение резкости
                  </li>
                  <li className="flex items-center">
                    <Icon name="Clock" className="text-eco-green mr-2" size={16} />
                    Срок: 2-3 дня
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-eco-green to-eco-green/80 hover:from-eco-green/90 hover:to-eco-green/70 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Crown" className="text-amber-500" size={32} />
                </div>
                <CardTitle className="text-2xl text-amber-600 mb-2">Премиум</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">от 3000 ₽</div>
                <CardDescription className="text-gray-600">Сложная реставрация</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Все из стандартной
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Сложная реконструкция
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Восстановление лиц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-eco-green mr-2" size={16} />
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <Icon name="Clock" className="text-eco-green mr-2" size={16} />
                    Срок: 3-5 дней
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-500/80 hover:from-amber-500/90 hover:to-amber-500/70 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-gradient-to-br from-gray-50 via-white to-eco-green/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-eco-green/10 rounded-full blur-3xl translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-eco-green/5 rounded-full blur-3xl -translate-x-36 translate-y-36"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-eco-green border-eco-green/20 mb-6 backdrop-blur-sm">
              📞 Связаться с нами
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Готовы <span className="text-eco-green">восстановить</span><br />
              ваши фотографии?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Выберите удобный способ связи. Отвечаем быстро и всегда готовы помочь!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Phone */}
            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon name="Phone" className="text-blue-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Телефон</h3>
                <p className="text-gray-600 mb-4">Звоните прямо сейчас</p>
                <a 
                  href="tel:+79123456789" 
                  className="text-blue-500 font-semibold hover:text-blue-600 transition-colors text-lg"
                >
                  +7 912 345-67-89
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon name="MessageCircle" className="text-green-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Быстрые ответы 24/7</p>
                <a 
                  href="https://wa.me/79123456789" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-semibold hover:text-green-600 transition-colors"
                >
                  Написать в WhatsApp
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon name="Mail" className="text-purple-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Почта</h3>
                <p className="text-gray-600 mb-4">Для подробных запросов</p>
                <a 
                  href="mailto:info@photorestoration.ru" 
                  className="text-purple-500 font-semibold hover:text-purple-600 transition-colors break-all"
                >
                  info@photorestoration.ru
                </a>
              </CardContent>
            </Card>

            {/* Telegram */}
            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon name="Send" className="text-cyan-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Telegram</h3>
                <p className="text-gray-600 mb-4">Удобное общение</p>
                <a 
                  href="https://t.me/photorestoration" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 font-semibold hover:text-cyan-600 transition-colors"
                >
                  @photorestoration
                </a>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-eco-green to-eco-green/80 text-white border-0 shadow-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Не знаете, какой способ выбрать?
                </h3>
                <p className="text-xl mb-8 text-white/90">
                  Отправьте фото в WhatsApp — получите консультацию за 5 минут!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-eco-green hover:bg-white/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Icon name="MessageCircle" className="mr-2" size={24} />
                    Отправить фото в WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить сейчас
                  </Button>
                </div>
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