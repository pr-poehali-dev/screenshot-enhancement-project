import { useState } from "react";
import { Shield, Swords, Target, Skull, Medical, Flame, Wind, Magic, BookOpen, Leaf, Eye, Snowflake, Dragon } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const wowClasses = [
  {
    id: "warrior",
    name: "Воин",
    icon: <Swords className="h-6 w-6" />,
    description: "Мастера оружия и боевых тактик, использующие ярость для мощных атак.",
    abilities: ["Вихрь", "Рассекающий удар", "Боевой крик"],
    color: "warrior"
  },
  {
    id: "paladin",
    name: "Паладин",
    icon: <Shield className="h-6 w-6" />,
    description: "Святые рыцари, защищающие слабых и исцеляющие союзников силой света.",
    abilities: ["Божественный щит", "Молот правосудия", "Возложение рук"],
    color: "paladin"
  },
  {
    id: "hunter",
    name: "Охотник",
    icon: <Target className="h-6 w-6" />,
    description: "Опытные следопыты, использующие питомцев и ловкость для дальнего боя.",
    abilities: ["Прицельный выстрел", "Дух зверя", "Шквал стрел"],
    color: "hunter"
  },
  {
    id: "rogue",
    name: "Разбойник",
    icon: <Skull className="h-6 w-6" />,
    description: "Мастера скрытности и смертельных атак из теней.",
    abilities: ["Исчезновение", "Гаррота", "Шквал клинков"],
    color: "rogue"
  },
  {
    id: "priest",
    name: "Жрец",
    icon: <Medical className="h-6 w-6" />,
    description: "Целители и мастера тьмы и света, способные как исцелять, так и наносить урон.",
    abilities: ["Исцеление", "Слово силы: Щит", "Слово Тьмы: Боль"],
    color: "priest"
  },
  {
    id: "shaman",
    name: "Шаман",
    icon: <Wind className="h-6 w-6" />,
    description: "Проводники стихийных сил, использующие мощь земли, огня, воды и воздуха.",
    abilities: ["Цепная молния", "Тотем исцеляющего потока", "Щит молний"],
    color: "shaman"
  },
  {
    id: "mage",
    name: "Маг",
    icon: <Magic className="h-6 w-6" />,
    description: "Мудрецы, контролирующие силы огня, льда и тайной магии.",
    abilities: ["Огненный шар", "Превращение", "Чародейский интеллект"],
    color: "mage"
  },
  {
    id: "warlock",
    name: "Чернокнижник",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Тёмные заклинатели, призывающие демонов и использующие силы хаоса.",
    abilities: ["Наложение порчи", "Призыв демона", "Похищение души"],
    color: "warlock"
  },
  {
    id: "monk",
    name: "Монах",
    icon: <Wind className="h-6 w-6" />,
    description: "Мастера рукопашного боя, использующие гармонию тела и духа.",
    abilities: ["Удар восходящего солнца", "Касание смерти", "Лечебный туман"],
    color: "monk"
  },
  {
    id: "druid",
    name: "Друид",
    icon: <Leaf className="h-6 w-6" />,
    description: "Хранители природы, способные менять форму и использовать силы дикой природы.",
    abilities: ["Гнев", "Восстановление", "Звериная форма"],
    color: "druid"
  },
  {
    id: "demon-hunter",
    name: "Охотник на демонов",
    icon: <Eye className="h-6 w-6" />,
    description: "Эльфы крови, принесшие себя в жертву силам тьмы для борьбы с Пылающим Легионом.",
    abilities: ["Рывок хаоса", "Превращение в демона", "Опустошение"],
    color: "demon-hunter"
  },
  {
    id: "death-knight",
    name: "Рыцарь смерти",
    icon: <Skull className="h-6 w-6" />,
    description: "Бывшие герои, воскрешённые Королём-личом и использующие силу нежити.",
    abilities: ["Ледяные оковы", "Кровавый удар", "Призыв армии мертвых"],
    color: "death-knight"
  },
  {
    id: "evoker",
    name: "Пробудитель",
    icon: <Dragon className="h-6 w-6" />,
    description: "Представители драктиров, использующие древние драконьи силы.",
    abilities: ["Огненное дыхание", "Бронзовый полет", "Сущность пробуждения"],
    color: "evoker"
  }
];

const ClassesOverview = () => {
  const [showAll, setShowAll] = useState(false);
  const displayClasses = showAll ? wowClasses : wowClasses.slice(0, 6);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Классы персонажей</h2>
        <Button 
          variant="outline" 
          onClick={() => setShowAll(!showAll)}
          className="wow-button text-white"
        >
          {showAll ? "Показать меньше" : "Показать все классы"}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayClasses.map((wowClass) => (
          <TooltipProvider key={wowClass.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`class-card ${wowClass.color} p-4 rounded-lg cursor-pointer`}>
                  <div className="flex items-center mb-2">
                    <div className="mr-3 p-2 rounded-full bg-black/30">
                      {wowClass.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{wowClass.name}</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{wowClass.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {wowClass.abilities.map((ability, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-black/40 px-2 py-1 rounded text-gray-200 border border-gray-700"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="p-4 max-w-xs">
                <h4 className="font-bold mb-2">{wowClass.name}</h4>
                <p className="text-sm">{wowClass.description}</p>
                <div className="mt-2">
                  <h5 className="text-xs uppercase font-semibold mb-1">Ключевые способности:</h5>
                  <ul className="text-xs space-y-1">
                    {wowClass.abilities.map((ability, index) => (
                      <li key={index}>• {ability}</li>
                    ))}
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default ClassesOverview;
