import { useState } from "react";
import { Bell, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WowHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/60 backdrop-blur-md border-b border-primary/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-25 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white luntares-glow">LUNTARES</h1>
              <p className="text-xs text-blue-300">The War Within Community</p>
            </div>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors font-medium">
              Новости
            </a>
            <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors font-medium">
              Форум
            </a>
            <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors font-medium">
              Поддержка
            </a>
            <Button variant="outline" className="wow-button text-white">
              <User className="h-5 w-5 mr-2" />
              Войти в профиль
            </Button>
          </nav>

          {/* Мобильное меню */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fade-in">
            <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors font-medium px-2 py-1">
              Новости
            </a>
            <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors font-medium px-2 py-1">
              Форум
            </a>
            <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors font-medium px-2 py-1">
              Поддержка
            </a>
            <Button variant="outline" className="wow-button text-white justify-start">
              <User className="h-5 w-5 mr-2" />
              Войти в профиль
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default WowHeader;
