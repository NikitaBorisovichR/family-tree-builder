import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "TreePine",
      title: "Интерактивное древо",
      description: "Создавайте красивые семейные деревья с удобным интерфейсом",
    },
    {
      icon: "Users",
      title: "Семейные связи",
      description: "Отслеживайте родственные связи между поколениями",
    },
    {
      icon: "Image",
      title: "Фото и документы",
      description: "Добавляйте фотографии и важные документы к профилям",
    },
    {
      icon: "Share",
      title: "Совместная работа",
      description:
        "Делитесь древом с родственниками для совместного наполнения",
    },
    {
      icon: "Download",
      title: "Экспорт данных",
      description: "Экспортируйте ваше древо в различных форматах",
    },
    {
      icon: "Shield",
      title: "Приватность",
      description: "Полный контроль над тем, кто может видеть ваши данные",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Все для создания семейной истории
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мощные инструменты для исследования, документирования и сохранения
            истории вашей семьи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
