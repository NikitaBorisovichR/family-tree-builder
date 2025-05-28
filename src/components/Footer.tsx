import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="TreePine" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FamilyTree</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Создавайте и сохраняйте историю вашей семьи для будущих поколений
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-foreground">
                  Создать древо
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground">
                  Справка
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Конфиденциальность
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 FamilyTree. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
