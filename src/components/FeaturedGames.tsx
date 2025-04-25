import { useState } from "react";
import { ShieldAlert, Trophy, Users } from "lucide-react";

interface GameCard {
  id: string;
  title: string;
  image: string;
  category: string;
  players: string;
  icon: React.ReactNode;
}

const featuredGames: GameCard[] = [
  {
    id: "cs-featured",
    title: "Counter-Strike 2",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1771&auto=format&fit=crop",
    category: "Шутер",
    players: "24,356 онлайн",
    icon: <ShieldAlert className="h-4 w-4" />
  },
  {
    id: "lineage-featured",
    title: "Lineage II",
    image: "https://images.unsplash.com/photo-1578674473215-9e47f2cbf1bc?q=80&w=1770&auto=format&fit=crop",
    category: "MMORPG",
    players: "12,129 онлайн",
    icon: <Trophy className="h-4 w-4" />
  },
  {
    id: "aion-featured",
    title: "AION 2",
    image: "https://images.unsplash.com/photo-1580327344176-d43a27ae9040?q=80&w=1769&auto=format&fit=crop",
    category: "Фэнтези",
    players: "8,763 онлайн",
    icon: <Users className="h-4 w-4" />
  }
];

const FeaturedGames = () => {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {featuredGames.map((game) => (
        <div 
          key={game.id}
          className="game-card rounded-lg overflow-hidden relative h-64 border border-muted/40"
          onMouseEnter={() => setHoveredGame(game.id)}
          onMouseLeave={() => setHoveredGame(null)}
        >
          <img 
            src={game.image} 
            alt={game.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ 
              transform: hoveredGame === game.id ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          
          <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs flex items-center gap-1">
            {game.icon}
            {game.category}
          </div>
          
          <div 
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent transform transition-all duration-300"
            style={{
              transform: hoveredGame === game.id ? 'translateY(0)' : 'translateY(10px)',
              opacity: hoveredGame === game.id ? 1 : 0.9
            }}
          >
            <h3 className="text-white text-lg font-bold mb-1">{game.title}</h3>
            <p className="text-white/70 text-sm">{game.players}</p>
            
            {hoveredGame === game.id && (
              <button className="mt-3 px-4 py-1.5 bg-primary text-white text-sm rounded-md hover:bg-primary/90 transition animate-fade-in">
                Играть сейчас
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedGames;
