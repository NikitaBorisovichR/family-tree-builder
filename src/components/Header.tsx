import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="TreePine" className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">FamilyTree</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/create"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Создать древо
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Войти</Button>
          <Button>Начать</Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                Главная
              </Link>
              <Link
                to="/create"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                Создать древо
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost" className="justify-start">
                  Войти
                </Button>
                <Button className="justify-start">Начать</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
