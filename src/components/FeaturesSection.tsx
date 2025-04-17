import FeatureCard from '@/components/FeatureCard';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Возможности платформы
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Удобные инструменты для создания родословной и сохранения семейных реликвий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🌳" 
            title="Интерактивное древо" 
            description="Создавайте детальные родословные с удобным интерфейсом редактирования и визуализации связей"
          />
          <FeatureCard 
            icon="🖼️" 
            title="Мультимедийная галерея" 
            description="Храните фотографии, документы и видеозаписи, связанные с каждым членом семьи"
          />
          <FeatureCard 
            icon="🔍" 
            title="Архивный поиск" 
            description="Используйте инструменты для поиска исторических данных в открытых архивах"
          />
          <FeatureCard 
            icon="📚" 
            title="Образовательные ресурсы" 
            description="Изучайте методики генеалогических исследований с помощью видеокурсов и инструкций"
          />
          <FeatureCard 
            icon="👨‍👩‍👧‍👦" 
            title="Совместное редактирование" 
            description="Приглашайте членов семьи для работы над общим древом и обмена информацией"
          />
          <FeatureCard 
            icon="📱" 
            title="Мобильный доступ" 
            description="Получайте доступ к семейному древу с любого устройства в любое время"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;