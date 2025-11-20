import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'COEVAL',
      subtitle: 'СОВРЕМЕННИК',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/5ebfcab2-a4f7-4aaf-a6dd-d1f77687037f.jpg',
      content: 'Быть современником — значит быть в курсе актуальных тенденций, жить в ритме города, понимать язык улиц и при этом сохранять утонченность.',
      position: 'HEAD OF CONTENT'
    },
    {
      id: 1,
      title: 'ЦЕЛЕВАЯ АУДИТОРИЯ',
      subtitle: 'ОСОЗНАННЫЕ ГОРОДСКИЕ ИСКАТЕЛИ',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/d9884a53-d62e-4783-aa57-c6707d0df19a.jpg',
      audience: [
        { label: 'КТО', text: 'Креаторы, предприниматели, арт-дилеры, архитекторы 25-40 лет' },
        { label: 'СРЕДА', text: 'Галереи, концепт-стоуры, скейт-парки, кофейни третьей волны' },
        { label: 'ЦЕННОСТИ', text: 'Аутентичность, внимание к деталям, уникальность, культурный контекст' }
      ]
    },
    {
      id: 2,
      title: 'КОНЦЕПЦИЯ',
      subtitle: 'УЛИЦА В ДЕТАЛЯХ',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/fddb1cfa-1849-4935-8a73-d54200ce7bbf.jpg',
      concept: [
        { title: 'ЛОКАЦИИ', desc: 'Бетонные конструкции, граффити, металл, скейт-парки на рассвете' },
        { title: 'СВЕТ', desc: 'Естественный, резкий, игра с тенями из окон подъездов' },
        { title: 'ЦВЕТА', desc: 'Монохром + насыщенные акценты одежды' },
        { title: 'НАСТРОЕНИЕ', desc: 'Созерцательное, уверенное, модель — часть среды' }
      ]
    },
    {
      id: 3,
      title: 'КОМАНДА',
      subtitle: 'ПРОФЕССИОНАЛЫ СТРИТ-КУЛЬТУРЫ',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/5ebfcab2-a4f7-4aaf-a6dd-d1f77687037f.jpg',
      team: [
        { role: 'Фотограф', desc: 'Урбанистическая эстетика, естественный свет' },
        { role: 'Видеограф', desc: 'Динамичный контент для Reels/TikTok' },
        { role: 'Стилист', desc: 'Работа с луками, визуальный образ' },
        { role: 'Модели', desc: 'Лица с характером, аутентичные типажи' },
        { role: 'Head of Content', desc: 'Общее руководство, арт-дирекшн' }
      ]
    },
    {
      id: 4,
      title: 'УРОВНИ СЪЕМОК',
      subtitle: 'ЭКОНОМ / КОМФОРТ / КОМФОРТ+',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/d9884a53-d62e-4783-aa57-c6707d0df19a.jpg',
      levels: [
        { name: 'ЭКОНОМ', team: 'Фотограф + 1 модель', time: '3-4 часа', result: '5-7 фото, 2-3 рилса' },
        { name: 'КОМФОРТ', team: 'Фото + Видео + Модель + Стилист', time: '5-6 часов', result: 'Лукбук 15-20 фото, 10+ фото, 5+ рилсов' },
        { name: 'КОМФОРТ+', team: 'Полная команда + 2 модели', time: 'Полный день', result: '30+ фото, серия видео, культурный капитал' }
      ]
    },
    {
      id: 5,
      title: 'СТРАТЕГИЯ',
      subtitle: 'COEVAL × СТРИТ-КУЛЬТУРА',
      background: 'https://cdn.poehali.dev/projects/9e12e992-5af2-4c44-a71f-c944a32e026c/files/fddb1cfa-1849-4935-8a73-d54200ce7bbf.jpg',
      strategy: [
        { phase: 'ФАЗА 1', period: '0-6 мес', title: 'Контент & Сообщества', desc: 'Съемки в аутентичных локациях, микроколлаборации с локальными скейтерами и BMX-райдерами' },
        { phase: 'ФАЗА 2', period: '6-18 мес', title: 'События & Коллаборации', desc: 'Выставка "Улица в деталях" с художниками, журнал Coeval (Zine/Lookbook) для концепт-сторов' },
        { phase: 'ФАЗА 3', period: '18+ мес', title: 'Укрепление & Легенда', desc: 'Стабильные коллаборации, капсульная коллекция, презентация-перформанс в скейт-парке' }
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
              <div className="animate-fade-in text-center">
                <p className="text-primary text-xl mb-4 tracking-widest">{currentData.position}</p>
                <h1 className="font-oswald text-8xl md:text-[12rem] font-bold text-white mb-6 tracking-wider">
                  {currentData.title}
                </h1>
                <div className="h-1 w-48 bg-primary mx-auto mb-8" />
                <p className="font-oswald text-4xl md:text-5xl text-secondary mb-12 tracking-wide">
                  {currentData.subtitle}
                </p>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  {currentData.content}
                </p>
              </div>
            )}

            {currentSlide === 1 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-1 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="space-y-10">
                  {currentData.audience?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="font-oswald text-3xl md:text-4xl font-bold text-primary min-w-[150px]">
                        {item.label}
                      </div>
                      <div className="text-xl md:text-2xl text-white/90 leading-relaxed">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 2 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-1 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {currentData.concept?.map((item, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary pl-6 py-4 hover:border-secondary transition-colors group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h3 className="font-oswald text-2xl font-bold text-white mb-3 tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-lg text-white/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 3 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-1 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="space-y-6">
                  {currentData.team?.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 p-6 border border-white/20 hover:border-primary/50 transition-all group"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <div className="font-oswald text-xl font-bold text-primary min-w-[200px]">
                        {member.role}
                      </div>
                      <div className="text-lg text-white/80">
                        {member.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 4 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-1 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {currentData.levels?.map((level, index) => (
                    <div
                      key={index}
                      className="border-2 border-primary/50 p-8 hover:bg-primary/10 transition-all group"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <h3 className="font-oswald text-3xl font-bold text-primary mb-6 tracking-wider">
                        {level.name}
                      </h3>
                      <div className="space-y-3 text-white/80">
                        <p className="text-sm"><span className="text-secondary font-bold">Команда:</span> {level.team}</p>
                        <p className="text-sm"><span className="text-secondary font-bold">Время:</span> {level.time}</p>
                        <p className="text-sm"><span className="text-secondary font-bold">Результат:</span> {level.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlide === 5 && (
              <div className="animate-fade-in">
                <div className="mb-12">
                  <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
                    {currentData.title}
                  </h1>
                  <div className="h-1 w-32 bg-primary" />
                </div>
                <p className="font-oswald text-3xl md:text-4xl text-secondary mb-16 tracking-wide">
                  {currentData.subtitle}
                </p>
                <div className="space-y-8">
                  {currentData.strategy?.map((phase, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary pl-8 py-6 hover:border-secondary transition-all group"
                      style={{ animationDelay: `${index * 0.12}s` }}
                    >
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="font-oswald text-2xl font-bold text-primary">{phase.phase}</span>
                        <span className="text-secondary text-lg">{phase.period}</span>
                      </div>
                      <h3 className="font-oswald text-2xl font-bold text-white mb-3 tracking-wide">
                        {phase.title}
                      </h3>
                      <p className="text-lg text-white/80 leading-relaxed max-w-4xl">
                        {phase.desc}
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