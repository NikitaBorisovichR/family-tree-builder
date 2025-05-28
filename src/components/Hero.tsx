import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Создайте историю
                <span className="text-primary block">вашей семьи</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Современный инструмент для создания интерактивного семейного
                древа и сохранения истории ваших предков
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/create">
                  <Icon name="Plus" className="mr-2 h-5 w-5" />
                  Создать древо
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Посмотреть демо
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="w-full h-full relative">
                {/* Семейное древо визуализация */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    {/* Дедушка и бабушка по маме */}
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="User" className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Icon name="User" className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>

                    {/* Родители */}
                    <div className="space-y-8 flex flex-col items-center">
                      <div className="space-y-2">
                        <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                          <Icon name="User" className="h-8 w-8 text-blue-700" />
                        </div>
                        <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                          <Icon name="User" className="h-8 w-8 text-pink-700" />
                        </div>
                      </div>

                      {/* Вы */}
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary">
                        <Icon name="User" className="h-10 w-10 text-primary" />
                      </div>
                    </div>

                    {/* Дедушка и бабушка по папе */}
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="User" className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Icon name="User" className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
