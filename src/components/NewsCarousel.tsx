import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  image: string;
  type: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Новый режим в Counter-Strike вызвал фурор среди игроков",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1769&auto=format&fit=crop",
    type: "Обновление"
  },
  {
    id: "2",
    title: "Релиз нового дополнения для The War Within состоится в июне",
    image: "https://images.unsplash.com/photo-1513807762437-83a95dbd7b71?q=80&w=1770&auto=format&fit=crop",
    type: "Анонс"
  },
  {
    id: "3",
    title: "Сезонный турнир по Lineage II с призовым фондом $100,000",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1769&auto=format&fit=crop",
    type: "Турнир"
  }
];

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % newsItems.length);
  };

  const goToPrevSlide = () => {
    goToSlide((currentSlide - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative rounded-lg overflow-hidden border border-primary/20 purple-glow">
      <h2 className="absolute top-0 left-0 right-0 z-10 p-3 text-xl font-bold text-accent bg-gradient-to-r from-black/80 to-black/40 backdrop-blur-sm neon-text text-center">
        Новости лунтарес
      </h2>
      
      <div className="relative h-[400px] md:h-[500px]">
        {newsItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
              ${index === currentSlide ? 'opacity-100 translate-x-0' : 
                index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}
            `}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="mb-2">
                <span className="px-2 py-1 bg-primary text-white text-xs rounded-md">
                  {item.type}
                </span>
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-primary/80 transition z-10"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-primary/80 transition z-10"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 bg-primary' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
