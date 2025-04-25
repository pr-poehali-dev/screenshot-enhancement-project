import WowHeader from "@/components/WowHeader";
import NewsCarousel from "@/components/NewsCarousel";
import ClassesOverview from "@/components/ClassesOverview";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Calendar, Users, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen wow-container">
      <WowHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Героический блок */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-7/12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 luntares-glow">
                World of Warcraft:<br />
                <span className="text-blue-300">The War Within</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Погрузитесь в новое эпическое приключение в глубинах Азерота. Откройте древние секреты и 
                сразитесь с невиданными ранее угрозами в продолжении саги World of Warcraft.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="wow-button text-white px-6 py-6 text-lg">
                  Купить расширение
                </Button>
                <Button variant="outline" className="wow-button text-white px-6 py-6 text-lg">
                  Узнать больше
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="wow-card p-4 rounded-lg">
                <Info className="h-5 w-5 text-blue-300 mb-2" />
                <h3 className="text-white font-semibold mb-1">Новые зоны</h3>
                <p className="text-gray-300 text-sm">5 масштабных подземных регионов для исследования</p>
              </div>
              <div className="wow-card p-4 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-300 mb-2" />
                <h3 className="text-white font-semibold mb-1">Дата выхода</h3>
                <p className="text-gray-300 text-sm">Релиз запланирован на август 2025 года</p>
              </div>
              <div className="wow-card p-4 rounded-lg">
                <Star className="h-5 w-5 text-blue-300 mb-2" />
                <h3 className="text-white font-semibold mb-1">Бонусы</h3>
                <p className="text-gray-300 text-sm">Эксклюзивный маунт при предзаказе</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <NewsCarousel />
          </div>
        </div>
        
        {/* Классы персонажей */}
        <ClassesOverview />
        
        {/* Дополнительный контент */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Активности сообщества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="news-card rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2070" 
                alt="PvP Турнир" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Еженедельный PvP турнир
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Участвуйте в сражениях гильдий каждую субботу и заработайте уникальные награды.
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <Users className="h-4 w-4 mr-1" />
                  <span>245 участников</span>
                </div>
              </div>
            </div>
            
            <div className="news-card rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=2073" 
                alt="Рейд" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Рейды выходного дня
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Присоединяйтесь к гильдии Luntares для прохождения героических рейдов.
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Каждое воскресенье, 19:00</span>
                </div>
              </div>
            </div>
            
            <div className="news-card rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070" 
                alt="Конкурс трансмогрификации" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Конкурс трансмогрификации
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Продемонстрируйте свой стиль и выиграйте 50,000 золота за лучший комплект.
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>30 апреля 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-black/80 border-t border-blue-900/30 mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 mr-3 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-25 animate-pulse"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">LUNTARES</h2>
                <p className="text-xs text-blue-300">Сообщество игроков WoW</p>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Правила
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Контакты
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2025 Luntares. World of Warcraft и Blizzard Entertainment являются товарными знаками или зарегистрированными товарными знаками Blizzard Entertainment, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
