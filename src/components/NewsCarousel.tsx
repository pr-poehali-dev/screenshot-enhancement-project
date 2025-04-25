import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Грядущее расширение The War Within: первые подробности",
    date: "21.04.2025",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
    summary: "Blizzard раскрывает детали нового расширения, включая подземные королевства нерубианцев и новые способности героев.",
  },
  {
    id: 2,
    title: "Новый патч 11.2.5: изменения классов и подземелья",
    date: "18.04.2025",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070",
    summary: "Масштабное обновление баланса классов, добавление нового подземелья и улучшения пользовательского интерфейса.",
  },
  {
    id: 3,
    title: "Чемпионат мира по WoW: результаты европейского этапа",
    date: "15.04.2025",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    summary: "Команда Method занимает первое место на европейском этапе и готовится к мировому финалу в Лос-Анджелесе.",
  }
];

const NewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl wow-card">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        
        <div className="relative h-96 overflow-hidden">
          <img 
            src={newsItems[activeIndex].image} 
            alt={newsItems[activeIndex].title} 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center mb-2">
            <div className="bg-primary/80 text-xs font-semibold px-2 py-1 rounded text-white">
              {newsItems[activeIndex].date}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {newsItems[activeIndex].title}
          </h2>
          <p className="text-gray-200 mb-4 max-w-3xl">
            {newsItems[activeIndex].summary}
          </p>
          <Button className="wow-button text-white">
            Читать далее
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-5 right-5 flex space-x-2 z-30">
        <Button 
          variant="outline" 
          size="icon"
          onClick={goToPrevious}
          className="rounded-full bg-black/50 border-blue-500/30 hover:bg-black/70 hover:border-blue-500/50"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={goToNext}
          className="rounded-full bg-black/50 border-blue-500/30 hover:bg-black/70 hover:border-blue-500/50"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </Button>
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-blue-400 w-4" : "bg-gray-400/60"
            }`}
            aria-label={`Перейти к новости ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
