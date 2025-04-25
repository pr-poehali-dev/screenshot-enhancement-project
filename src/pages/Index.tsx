import { useState, useEffect } from "react";
import GameNavbar from "@/components/GameNavbar";
import NewsCarousel from "@/components/NewsCarousel";
import FeaturedGames from "@/components/FeaturedGames";
import { MoonStar, Sun } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симуляция загрузки данных
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground">Загрузка игрового портала...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-10">
      {/* Шапка */}
      <header className="bg-black/60 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary animate-pulse-glow"></div>
            <h1 className="text-xl font-bold neon-text">ЛунтаГеймс</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-white/80 hover:text-primary transition">Игры</a>
            <a href="#" className="text-white/80 hover:text-primary transition">Новости</a>
            <a href="#" className="text-white/80 hover:text-primary transition">Форум</a>
            <a href="#" className="text-white/80 hover:text-primary transition">Поддержка</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-muted/50 hover:bg-muted">
              {darkMode ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </button>
            <button className="bg-primary px-4 py-2 rounded-md text-white hover:bg-primary/90 transition">
              Войти
            </button>
          </div>
        </div>
      </header>
      
      {/* Основной контент */}
      <main className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          {/* Навигация по играм */}
          <aside>
            <GameNavbar />
          </aside>
          
          {/* Контент */}
          <div className="space-y-6">
            <NewsCarousel />
            
            <Tabs defaultValue="popular" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Популярные игры</h2>
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="popular">Популярные</TabsTrigger>
                  <TabsTrigger value="new">Новые</TabsTrigger>
                  <TabsTrigger value="recommended">Рекомендуемые</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="popular" className="mt-0">
                <FeaturedGames />
              </TabsContent>
              
              <TabsContent value="new" className="mt-0">
                <div className="p-6 bg-muted/30 rounded-lg border border-muted/40 text-center">
                  <p>Новые игры будут добавлены скоро</p>
                </div>
              </TabsContent>
              
              <TabsContent value="recommended" className="mt-0">
                <div className="p-6 bg-muted/30 rounded-lg border border-muted/40 text-center">
                  <p>Войдите в аккаунт чтобы увидеть рекомендации</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      {/* Подвал */}
      <footer className="mt-16 border-t border-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">© 2025 ЛунтаГеймс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
