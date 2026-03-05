import Image from "next/image";
import {
  Phone,
  BadgeCheck,
  Briefcase,
  Landmark,
  Brain,
  History,
  CheckCircle,
  Eye,
  MessageCircle,
  Euro, Building2, Globe,
  Mail,
  Hotel,
  UsersRound,
  ShieldCheck,
  Headphones,
  HeartPulse,
  Laptop,
  Monitor,
  Stethoscope,
  TrendingUp,
  Users,
  GraduationCap,
  PlaneTakeoff,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <main className="py-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Ваш надежный гид в Казахстане</span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-4">
              Миграционные услуги для иностранных граждан в Казахстане
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Помощь миграционных юристов в оформлении документов на РВП, ВНЖ,
              гражданство РК и получении виз С3 и С5.
            </p>
            <p className="mt-4 text-slate-600">
              Гарантируем подачу документов в соответствии с законом
            </p>
            <div className="mt-8">
              <Link
                className="bg-primary font-semibold px-8 py-4 rounded-lg inline-block hover:opacity-90 transition shadow-lg shadow-primary/20 text-white"
                href="#section-id1"
              >
                Бесплатная онлайн-консультация
              </Link>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-64 soft-shadow shadow-lg bg-white">
              <Image
                alt="Almaty Architecture"
                className="w-full h-full object-cover"
                src="/Picture1.jpg"
                height={200}
                width={200} 
                data-alt="Modern Almaty architecture reflecting city life"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 soft-shadow shadow-lg bg-white">
              <Image
                alt="Passport Control"
                className="w-full h-full object-cover"
                src="/Picture2.jpg"
                height={200}
                width={200}
                data-alt="Officer checking international passport at customs"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <div className="pt-12 space-y-4">
            <div className="rounded-2xl overflow-hidden h-80 soft-shadow shadow-lg bg-white">
              <Image
                alt="Business Consultation"
                className="w-full h-full object-cover"
                src="/Picture3.jpg"
                height={200}
                width={200}
                data-alt="Professional meeting between consultants and client"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          </div>
        </div>


        <section className="py-8 bg-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Визы в Казахстан</h2>
                <p className="text-slate-500">Поможем оформить разрешение на въезд для любых целей</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all shadow-md">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Visa Types Tags */}
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <PlaneTakeoff className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Туристические</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Briefcase className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Рабочие</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <GraduationCap className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Студенческие</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Building2 className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Бизнес-визы</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Users className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На воссоединение</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <TrendingUp className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Инвестиционные</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Stethoscope className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На лечение</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Home className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">ПМЖ</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Monitor className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Электронная</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Laptop className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Digital Nomad</p>
              </div>
            </div>
          </div>
        </section>


        {/* <section className="py-14" id="services">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Помощь в получении государственных миграционных услуг
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <FileText className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Истребование документов за границей
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Позволяет получить дубликаты или оригиналы ранее выданных бумаг
                в другой стране.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <BadgeCheck className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Вид на жительство (ВНЖ)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Долгосрочный статус для жизни и работы в Казахстане с
                возможностью получать кредиты и приобретать недвижимость.
              </p>

            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Briefcase className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Разрешение на работу (РНР)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Документ, который дает иностранцам право на официальное
                трудоустройство.
              </p>

            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Landmark className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Юридическое лицо
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Казахстан привлекает бизнес низкими налогами, простой
                регистрацией и доступом к международным рынкам.
              </p>

            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Plane className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">Визы</h3>
              <p className="mt-2 text-sm text-slate-600">
                Разрешение на въезд для граждан стран, с которыми не установлен
                безвизовый режим.
              </p>

            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Flag className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Гражданство Казахстана
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Поможем вам пройти весь путь до получения паспорта РК.
                Подготовим полный комплект документов.
              </p>

            </div>
          </div>
        </section> */}

        {/* <section className="py-16 bg-slate-50 rounded-2xl" id="about">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-8">
            <div>
              <Image
                alt="Team meeting in a modern office"
                className="rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN6eim0oDvdSnyN0WeqpCfQ1vvAdBLb6a7VSd-aHQGoaInQ-NNhuH_o196toPXrBBb6l7Yxjh27K1n50WtdqDkR9svn_wdcPvHThH8H1IC-q1RI2zMSmaaixDfz-csYbnwA1MU_ts96kC4rwJCZl0-OdLJinfF4cSGiH65afc-U5OIH3t0p0W_3xrrWRmsH8HFFEnVnoaSuNW3GtkpjKVgZU0r7R9q2siP8zm3ZXnDdij0TpbhqgByk5aeSvsewxHlDKeE6c90AN4"
                width={500}
                height={312}
                style={{
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 30px -5px rgba(15,23,42,0.25)",
                }}
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                О компании
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                «Ozelim» — это специализированное агентство, сфокусированное на
                решении миграционных задач иностранных граждан в Республике
                Казахстан.
              </p>
              <p className="mt-2 text-slate-600">
                Наша деятельность целиком сосредоточена на вопросах
                миграционного права, что позволило нам достичь глубокого
                понимания всех тонкостей этой области.
              </p>
              <a
                className="mt-6 inline-block px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                href="#"
              >
                Подробнее
              </a>
            </div>
          </div>
        </section> */}

        <section className="py-16 bg-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Визы в Казахстан</h2>
                <p className="text-slate-500">Поможем оформить разрешение на въезд для любых целей</p>
              </div>
              {/* <div className="flex gap-2">
                <button className="p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all shadow-md">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md">
                  <ChevronRight size={20} />
                </button>
              </div> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <PlaneTakeoff className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Туристические</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Briefcase className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Рабочие</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <GraduationCap className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Студенческие</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Building2 className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Бизнес-визы</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Users className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На воссоединение</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <TrendingUp className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Инвестиционные</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Stethoscope className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На лечение</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Home className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">ПМЖ</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Monitor className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Электронная</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Laptop className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Digital Nomad</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Визы из Казахстана</h2>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 rounded-3xl overflow-hidden relative min-h-[500px] bg-white">
                <Image
                  alt="World Map"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsP7T30rVTMsRMuckn7rFCDvweSooxaV1fYs2yP-qnnMQ8jnXOTP-O-idf6s2ZEJggDDXftxX0lxFCec-NV_l-Q57ycWTb8E0q-sfqw0q1_FKoXBmBxdOCxc7fNm8QcVRaMV6iu4mkKX18LsorjfnTAb0qFg-gBLBXS0IBeR-qepyvKgXPgtT6oRP2B4KjkPBDdXfz1ECHr_FbJQmrDmMP02WjU-61dXYzhqJ3yHO3dHgV07eRyITMZQGw4vjqWb62lgfTVzluNf4"
                  data-alt="Stylized world map showing global travel routes"
                  fill
                  sizes="(max-width:1024px) 100vw, 384px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Весь мир открыт для вас</h3>
                  <p className="text-sm opacity-90">Профессиональная помощь в получении виз в более чем 50 стран мира.</p>
                </div>
              </div>
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                {/* Europe */}
                <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                    <Euro className="text-primary" size={20} />
                    <h4 className="font-bold">Европа</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">Германия</li>
                    <li className="flex items-center gap-2">Франция</li>
                    <li className="flex items-center gap-2">Испания</li>
                    <li className="flex items-center gap-2">Италия</li>
                    <li className="flex items-center gap-2">Англия</li>
                  </ul>
                </div>
                {/* Asia */}
                <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                    <Landmark className="text-primary" size={20} />
                    <h4 className="font-bold">Азия</h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <li>Вьетнам</li><li>Индонезия</li>
                    <li>Камбоджа</li><li>Лаос</li>
                    <li>Малайзия</li><li>Сингапур</li>
                    <li>Таиланд</li><li>Филиппины</li>
                  </ul>
                </div>
                {/* SE Asia */}
                <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                    <Building2 className="text-primary" size={20} />
                    <h4 className="font-bold">Юго-Восточная Азия</h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <li>Китай</li><li>Япония</li>
                    <li>Афганистан</li><li>Бангладеш</li>
                    <li>Индия</li><li>Мальдивы</li>
                    <li>Пакистан</li><li>Шри-Ланка</li>
                  </ul>
                </div>
                {/* Americas (US/Canada/Aus as requested) */}
                <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                    <Globe className="text-primary" size={20} />
                    <h4 className="font-bold">Южная Америка (США/Канада)</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>США</li>
                    <li>Канада</li>
                    <li>Австралия</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-10 w-full">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
              <div className="md:w-1/2 p-6 lg:p-10 bg-primary text-white">
                <h2 className="text-4xl font-black mb-6">Оставить заявку на услугу</h2>
                <p className="opacity-90 mb-8">Получите бесплатную консультацию по оформлению виз и миграционным вопросам. Мы ответим на все ваши вопросы в течение 15 минут.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="opacity-70" size={20} />
                    <span>+7 (777) 000-00-00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="opacity-70" size={20} />
                    <span>info@ozelim.kz</span>
                  </div>
                </div>
                <div className="text-white">
                  <p className="opacity-90 mt-4">
                    Или свяжитесь с нами любым удобным Вам способом
                  </p>
                <div className="my-6 flex space-x-4">
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <MessageCircle className="mr-2 text-emerald-300 h-5 w-5" />
                    WhatsApp
                  </a>
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <SendPlaneIcon className="mr-2 text-emerald-300 h-5 w-5" />
                    Telegram
                  </a>
                </div>

              </div>
              </div>
              <div className="md:w-1/2 p-6 lg:p-16 space-y-6 bg-white ">
                <div>
                  <label className="block text-sm font-bold mb-2">Имя</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="Введите ваше имя" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">№ телефона</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="+7 (___) ___-__-__" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Выбрать услугу</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow">
                    <option>Оформление визы</option>
                    <option>ВНЖ / ПМЖ</option>
                    <option>ИИН / Банковская карта</option>
                    <option>Трудоустройство за рубежом</option>
                  </select>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold soft-shadow shadow-lg transition-all">Отправить заявку</button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Услуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <HeartPulse size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Страхование</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Оформление медицинских страховых полисов для выезда за рубеж и пребывания в РК в соответствии с международными стандартами.</p>
                {/* <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a> */}
              </div>
              {/* Card 2 */}
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <BadgeCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Работа за рубежом</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Помощь в поиске легального трудоустройства в странах Европы, Азии и Америки. Полное документальное сопровождение.</p>
                {/* <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a> */}
              </div>
              {/* Card 3 */}
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Headphones size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Вызов специалиста</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Консультация нашего эксперта с выездом в ваш офис или на дом для сбора документов и заполнения анкет.</p>
                {/* <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a> */}
              </div>
              {/* Card 4 */}
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Проверка документов</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Профессиональный аудит вашего пакета документов для исключения рисков отказа в получении визы или РВП.</p>
                {/* <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a> */}
              </div>
              {/* Card 5 */}
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <UsersRound size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Услуги для граждан РФ</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Специализированная помощь в получении ИИН, открытии банковских карт и оформлении ВНЖ для граждан Российской Федерации.</p>
                {/* <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a> */}
              </div>
              {/* Card 6 */}
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Hotel size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Бронирование отелей</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Подбор и бронирование отелей и курортных баз по всему миру по эксклюзивным корпоративным ценам.</p>
                {/* <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a> */}
              </div>
            </div>
          </div>
        </section>


        <section className="pt-10 w-full">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
              <div className="md:w-1/2 p-6 lg:p-10 bg-primary text-white">
                <h2 className="text-4xl font-black mb-6">Оставить заявку на услугу</h2>
                <p className="opacity-90 mb-8">Получите бесплатную консультацию по оформлению виз и миграционным вопросам. Мы ответим на все ваши вопросы в течение 15 минут.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="opacity-70" size={20} />
                    <span>+7 (777) 000-00-00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="opacity-70" size={20} />
                    <span>info@ozelim.kz</span>
                  </div>
                </div>
                <div className="text-white">
                  <p className="opacity-90 mt-4">
                    Или свяжитесь с нами любым удобным Вам способом
                  </p>
                <div className="my-6 flex space-x-4">
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <MessageCircle className="mr-2 text-emerald-300 h-5 w-5" />
                    WhatsApp
                  </a>
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <SendPlaneIcon className="mr-2 text-emerald-300 h-5 w-5" />
                    Telegram
                  </a>
                </div>

              </div>
              </div>
              <div className="md:w-1/2 p-6 lg:p-16 space-y-6 bg-white ">
                <div>
                  <label className="block text-sm font-bold mb-2">Имя</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="Введите ваше имя" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">№ телефона</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="+7 (___) ___-__-__" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Выбрать услугу</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow">
                    <option>Оформление визы</option>
                    <option>ВНЖ / ПМЖ</option>
                    <option>ИИН / Банковская карта</option>
                    <option>Трудоустройство за рубежом</option>
                  </select>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold soft-shadow shadow-lg transition-all">Отправить заявку</button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10" id="why-us">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 bg-primary p-12 rounded-lg flex items-center justify-center">
              <h2 className="text-4xl font-bold text-center text-white">
                Почему мы?
              </h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
                <Brain className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Глубокая экспертиза
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Мы специализируемся исключительно на миграционном
                    законодательстве Казахстана.
                  </p>
                </div>
              </div>
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
                <History className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    10+ лет опыта
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    С 2014 года мы помогли более 12 000 иностранным гражданам.
                  </p>
                </div>
              </div>
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
                <CheckCircle className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Гарантированный результат
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Заключаем официальный договор и берем на себя полную
                    ответственность.
                  </p>
                </div>
              </div>
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
                <Eye className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Прозрачные условия
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Стоимость услуг фиксируется в договоре с самого начала.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex mb-6">
              <h2 className="text-3xl font-bold tracking-tight">Вопросы</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
                  <Image
                    alt="Legal Documents"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYOf_hW1pOQ-GdqE4Hue0hTpVJIeYNNF-9pSDwS4PYlIvVOdJmg4ux31OXFcCJjvUOSC90XMPgfchtZhVR4wL16CDkNpUyuw-FA1nlwJCoe15Ek9t34KGv6UhFJYvJd8TOYKKEu99JAMshcxHz4GUAB7NbaroGJ31HSVqYtEWYNYZK-Bee_ZQTmMzY4XHiKvdoJa1YA7VpzbR6HjSvl_0hImV-ZN1SeV0l2-eI8zzcb2I_Z4p0d73MbtvKYyX_2ib8RGR46JNSQc"
                    data-alt="Stack of legal migration documents on a desk"
                    fill
                    sizes="(max-width:1024px) 100vw, 384px"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">Гайд</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Как получить ВНЖ в Казахстане в 2026 году?</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4">Подробная инструкция по сбору документов, срокам рассмотрения и основным требованиям для получения вида на жительство...</p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">12 Октября 2026</span>
              </div>
              {/* Post 2 */}
              <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
                  <Image
                    alt="Meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8QF-dedHBSPL-QG5238jDF-6frXS5LdTOBaesD08gjVXWIY-mDiu_tTCZJMaSHWPLCXnZAouFLF_TZ1ZEfeTTAOCIxDh5cMa9IuaHnpbhR80ZHEVMMmunBOd_Ym5I2nHhMYKkjzNNKW1FXHdDzj45eRD_wWLlL0zLpSgEu7OovQS-8AK0gZmHFAthI8ql0Zm3-YLv-V3pEpihE9eIEjH17srx__7w5g3oVzcU_Ab8V-vcpd0HZ9CknpoDXEHjrfO8riU4xSH6-o"
                    data-alt="Business professionals in a corporate meeting setting"
                    fill
                    sizes="(max-width:1024px) 100vw, 384px"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">Бизнес</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Digital Nomad Visa: Новые возможности для IT</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4">Казахстан запустил программу для цифровых кочевников. Разбираемся, кто может претендовать и какие льготы это дает...</p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">05 Октября 2026</span>
              </div>
              {/* Post 3 */}
              <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
                  <Image
                    alt="Law"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAE8JWIqZxdXbN47Jxtwla685FfeS2LhXQT1qyh9leH4msvAFnAlh0mE_spieXkzZH1ShFnjgpQF8-N0L1HsJkxeu5aZku3yT87wexyhKR_MtdSN4Med6fbS8g5FZ7n_moZ1obfQDvIDEXlEf8P13kbKHw5mN1LemXM77DBD_AecKW9R6XHDhSflZWhmMEPyxfk6qtND0SRVkjdJWsGLk0-eHx8_DUS0ddMfJYLx26taLWyA0Qv2EPFoNQh3k2PpGDj9HKfTF0BIE"
                    data-alt="Gavel and law books representing legal services"
                    fill
                    sizes="(max-width:1024px) 100vw, 384px"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">Законодательство</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Изменения в миграционном учете</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4">Важные поправки в законодательстве РК, которые вступают в силу с начала следующего месяца. О чем нужно знать иностранцам...</p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">28 Сентября 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16" id='section-id1'>
          <div className="relative bg-primary rounded-2xl p-8 md:p-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Получите бесплатную консультацию
                </h2>
                <form action="#" className="mt-8 space-y-4 text-white">
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Напишите ваше имя*"
                    type="text"
                  />
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4  focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Номер телефона*"
                    type="tel"
                  />
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4  focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Напишите ваш e-mail"
                    type="email"
                  />
                  <textarea
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4  focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Комментарий"
                    rows={3}
                    defaultValue={""}
                  />
                  <button
                    className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition"
                    type="submit"
                  >
                    Позвоните мне
                  </button>
                  <p className="text-xs">
                    Нажимая на кнопку, вы соглашаетесь с пользовательским
                    соглашением
                  </p>
                </form>
              </div>
              <div className="text-center text-white">
                <p className="text-lg">
                  Или свяжитесь с нами любым удобным Вам способом
                </p>
                <div className="my-6 flex justify-center space-x-4">
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <MessageCircle className="mr-2 text-emerald-300 h-5 w-5" />
                    WhatsApp
                  </a>
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <SendPlaneIcon className="mr-2 text-emerald-300 h-5 w-5" />
                    Telegram
                  </a>
                </div>
                <p className="text-4xl lg:text-5xl font-bold tracking-wider ">
                  +7 727 310 7843
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                alt="Smiling woman on the phone"
                className="absolute bottom-0 right-0 h-2/3 md:h-full w-auto opacity-80 md:opacity-100 z-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6zAKrKAY-2uZUNQFZpmA-i2PLgVQ9hQsFLn3gIpAWC_o-rgVtpZvXMUhuGR4vQCCduO4TMHdzZco8c7OspbfONQk41L22T_0NTkCEYmZiaTxXZItMUFVSYtKWhMUpw6PC5K4sCtK_fyOD_r7SoLzrl-PaDp7qxIEiw8f85jGhznogFZaZEuuxsjTrez66WSNoz_4b6GBxV68--SGQpOW7s-okyYCek-YFFFl0gdXZ4mlgepm4c6D3JpECCZA9yxYVjZBV7tOnTqA"
                width={448}
                height={542}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  opacity: "0.7",
                  zIndex: 0,
                }}
                unoptimized
              />
            </div>
          </div>
        </section> */}


      </main>
    </div>
  );
}

// Custom icons that are similar to WhatsApp/Telegram
function SendPlaneIcon({ className }) {
  // Lucide's Send (plane/paper) icon as SVG
  return (
    <svg
      className={className}
      height="1em"
      width="1em"
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 2L11 13"></path>
      <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
    </svg>
  );
}
