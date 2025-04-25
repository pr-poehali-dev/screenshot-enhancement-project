import { useState } from "react";
import { ChevronRight, GamepadIcon } from "lucide-react";

interface GameItem {
  id: string;
  title: string;
  image: string;
}

const games: GameItem[] = [
  {
    id: "war-within",
    title: "The War Within",
    image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=1771&auto=format&fit=crop"
  },
  {
    id: "aion2",
    title: "AION 2",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "lineage2",
    title: "LINEAGE II",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "sphere",
    title: "Сфера",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1771&auto=format&fit=crop"
  },
  {
    id: "cs",
    title: "COUNTER STRIKE",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1769&auto=format&fit=crop"
  },
  {
    id: "anno",
    title: "ANNO Online",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1770&auto=format&fit=crop"
  }
];

const GameNavbar = () => {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  return (
    <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 w-full max-w-xs border border-primary/20 purple-glow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 neon-text">
          <GamepadIcon className="h-5 w-5 text-primary animate-pulse-glow" />
          ВАШИ ИГРЫ
        </h2>
        <button className="text-primary/80 hover:text-primary transition">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-3">
        {games.map((game) => (
          <div 
            key={game.id}
            className={`flex items-center gap-3 p-2 rounded-md transition-all duration-300 cursor-pointer
              ${hoveredGame === game.id ? 'bg-primary/20 scale-105' : 'hover:bg-muted'}`}
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
          >
            <div className="w-12 h-12 rounded-md overflow-hidden border border-primary/30">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className={`font-medium transition-all duration-300 ${hoveredGame === game.id ? 'text-primary' : 'text-gray-200'}`}>
                {game.title}
              </p>
              {hoveredGame === game.id && (
                <p className="text-xs text-gray-400 animate-fade-in">Нажмите для настроек</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-accent to-accent/80 rounded-md text-white font-bold tracking-wide hover:brightness-110 transition play-btn">
        Играть
      </button>
    </div>
  );
};

export default GameNavbar;
