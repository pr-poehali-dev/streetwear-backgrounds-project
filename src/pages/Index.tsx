import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'О БРЕНДЕ',
      subtitle: 'ГДЕ УЛИЦА ВСТРЕЧАЕТ СТИЛЬ',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/d07d1bb4-96a9-4bdf-a148-f09eaecc6083.jpg',
      content: 'Мы не просто создаем одежду. Мы создаем культуру.'
    },
    {
      id: 1,
      title: 'ИСТОРИЯ',
      subtitle: 'ОТ УЛИЦ К ПОДИУМАМ',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/09a7af15-5bd6-4d8d-a511-9c7fc106abca.jpg',
      timeline: [
        { year: '2018', event: 'Первая коллекция в гараже' },
        { year: '2020', event: 'Открытие флагманского магазина' },
        { year: '2022', event: 'Коллаборация с уличными художниками' },
        { year: '2024', event: 'Глобальная экспансия' }
      ]
    },
    {
      id: 2,
      title: 'ФИЛОСОФИЯ',
      subtitle: 'СВОБОДА. ВЫРАЖЕНИЕ. БУНТ',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/645d2f5a-0823-466c-9f33-51735ad82828.jpg',
      values: [
        { icon: 'Zap', title: 'АУТЕНТИЧНОСТЬ', desc: 'Будь собой без компромиссов' },
        { icon: 'Target', title: 'КАЧЕСТВО', desc: 'Каждая деталь имеет значение' },
        { icon: 'Users', title: 'СООБЩЕСТВО', desc: 'Вместе мы сильнее' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentData = slides[currentSlide];

  return (
    <div className="min-h-screen relative overflow-hidden font-roboto">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${currentData.background})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-32">
          <div className="max-w-6xl w-full">
            {currentSlide === 0 && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h1 className="font-oswald text-7xl md:text-9xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-2 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-5xl text-secondary mb-12 tracking-wide">
                  {currentData.subtitle}
                </p>
                <p className="text-2xl md:text-3xl text-white/90 max-w-2xl leading-relaxed">
                  {currentData.content}
                </p>
              </div>
            )}

            {currentSlide === 1 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-7xl md:text-9xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-2 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="space-y-8">
                  {currentData.timeline?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-8 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="font-oswald text-5xl md:text-6xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {item.year}
                      </div>
                      <div className="h-1 w-16 bg-primary group-hover:w-24 transition-all" />
                      <div className="text-xl md:text-2xl text-white/90">
                        {item.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 2 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-7xl md:text-9xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-2 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  {currentData.values?.map((value, index) => (
                    <div
                      key={index}
                      className="border-2 border-primary/50 p-8 hover:bg-primary/10 transition-all group"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <Icon
                        name={value.icon}
                        size={48}
                        className="text-primary mb-6 group-hover:scale-110 transition-transform"
                      />
                      <h3 className="font-oswald text-2xl font-bold text-white mb-4 tracking-wider">
                        {value.title}
                      </h3>
                      <p className="text-lg text-white/80">
                        {value.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pb-12 px-8 md:px-16 lg:px-32">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="lg"
              className="text-white hover:text-primary hover:bg-white/10 border-2 border-white/20"
            >
              <Icon name="ChevronLeft" size={32} />
            </Button>

            <div className="flex gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 transition-all ${
                    index === currentSlide
                      ? 'w-12 bg-primary'
                      : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="ghost"
              size="lg"
              className="text-white hover:text-primary hover:bg-white/10 border-2 border-white/20"
            >
              <Icon name="ChevronRight" size={32} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}