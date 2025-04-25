import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute inset-4 bg-primary/50 rounded-full animate-pulse"></div>
          <div className="absolute inset-8 bg-primary rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Страница не найдена</h2>
        <p className="text-muted-foreground mb-6">
          Возможно, эта страница была удалена или вы ввели неверный адрес.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
