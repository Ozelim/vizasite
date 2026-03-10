import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  BadgeCheck,
  ShieldCheck,
  ClipboardCheck,
  CreditCard,
  Banknote,
  Landmark,
  MessageCircle,
  Send,
  PlaneTakeoff,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  Stethoscope,
  HomeIcon,
  Monitor,
  Laptop,
} from "lucide-react";
import Link from "next/link";
import PaymentVariants from "@/components/payment-variants";
import BidForm from "@/components/bid-form";
import { Button } from "@/components/ui/button";
import { VisaCalculatorButton } from "@/components/visa-calculator/vis-calculator-modal";

export default function page() {

  return (
    <>
      <main>
        {/* <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-sm text-gray-500 mb-8">
              <span>Главная</span> &gt; <span>О компании</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  О компании
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                  «Ozelim» - это специализированное агентство, сфокусированное на
                  решении миграционных задач иностранных граждан в Республике
                  Казахстан. Наша деятельность целиком сосредоточена на вопросах
                  миграционного права, что позволило нам достичь глубокого
                  понимания всех тонкостей этой области.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Команда нашего агентства состоит из специалистов, лично
                  прошедших процесс переселения в Казахстан и получения
                  гражданства, благодаря чему мы отлично понимаем ваши ожидания и
                  потребности при обращении в миграционную компанию.
                </p>
              </div>
              <div>
                <Image
                  alt="Фотография команды агентства Ozelim"
                  className="rounded-lg w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiFE9Sdd0jymYHWXqGTBSe8hqI1mFxOdSTcf9Xpjp641j0h8wXFp55P0myU-RJXutrxou7HGmmxi1rRSPBOwNYXSBcQcvsoVQmopbGkpnZ6EkRAcFceTH44e3uBXA62FOLgcEpzrsrrlgfB9g8aVMWT8Y09kQdIHjQmVaH8zUSJpnHKAzstI76IoIrfkZUORMKCd80BKEW6BEiVbunfVAOSgpqXxWvMGGaFY4bOIs-eAbhYosR38VK7G0-BYuBJG2U8igBzgIcXjBq"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section> */}

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-4">
          <div>
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
              Ваш надежный гид в Казахстане
            </span>

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
              <VisaCalculatorButton
                title='Бесплатная онлайн-консультация'
                buttonOptions={{
                  className: "bg-primary font-semibold px-8 py-6 rounded-lg  hover:opacity-90 transition shadow-lg shadow-primary/20 text-white",
                  size: 'lg',
                }}
              />
              {/* <button
                href="#section-id1"
              >
                Бесплатная онлайн-консультация
              </button> */}
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
                  style={{ objectFit: "cover" }}
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
                  style={{ objectFit: "cover" }}
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
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-background-light overflow-hidden">
              <div className="relative w-full md:w-5/12">
                <div className="absolute inset-0 bg-opacity-50 flex items-end p-8 md:bg-opacity-0">
                  <div className="bg-primary text-white p-4 rounded-lg md:translate-x-3/5">
                    <h3 className="text-2xl font-bold">Мукатаева Айгуль</h3>
                    <p className="text-gray-200">Директор офиса</p>
                    <p className="text-gray-300 text-sm">
                      опыт работы более 20 лет
                    </p>
                  </div>
                </div>
                <Image
                  alt="Фотография директора офиса Мукатаева Айгуль"
                  className="w-full object-contain rounded-xl"
                  src={"/mukataeva-aigul.jpeg"}
                  width={550}
                  height={240}
                  style={{ width: "100%", height: "540px", objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="p-8 md:p-12 md:pl-24 w-full md:w-7/12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Здравствуйте!
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-semibold text-primary">
                      Наш визовый центр
                    </span>{" "}
                    помогает иностранным гражданам оформить документы для
                    проживания и работы в Казахстане.
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 mb-3 text-base">
                    <span className="font-bold block mb-3 text-slate-800">
                      Мы помогаем с:
                    </span>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>визами</li>
                      <li>
                        оформлением документов на{" "}
                        <span className="font-semibold">РВП</span>,{" "}
                        <span className="font-semibold">ВНЖ</span>
                      </li>
                      <li>регистрацией</li>
                      <li>бронированием отелей в РК</li>
                      <li>оформлением документов на гражданство РК</li>
                      <li>проверкой документов</li>
                      <li>разрешением на работу</li>
                      <li>страхованием</li>
                    </ul>
                  </div>
                  <p>
                    Мы объясним весь процесс и поможем подготовить документы.
                  </p>
                  <p className="font-semibold text-primary">
                    Обращайтесь — будем рады помочь!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">
                  Визы в Казахстан
                </h2>
                <p className="text-slate-500">
                  Профессиональная помощь в подборе и оформлении всех видов виз
                  для иностранных граждан
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Дипломатические и служебные визы */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <PlaneTakeoff
                  className="text-primary shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <p className="font-bold text-base mb-1">
                    Дипломатические и служебные визы
                  </p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">A1</span> — для глав
                    государств, правительств и членов официальных делегаций.
                    <br />
                    <span className="font-semibold">A2</span> — для сотрудников
                    дипмиссий, консульств, международных организаций.
                    <br />
                    <span className="font-semibold">A3</span> — для
                    представителей иностранных государств и членов их семей.
                    <br />
                  </p>
                  <p className="text-xs text-slate-500">
                    Эти типы виз позволяют осуществлять официальный въезд и
                    пребывание для реализации дипломатической и служебной
                    деятельности.
                  </p>
                </div>
              </div>

              {/* 2. Инвестиционные визы */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <TrendingUp className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">
                    Инвестиционные визы
                  </p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">B1</span> — для инвесторов и
                    представителей инвесткомпаний.
                  </p>
                  <p className="text-xs text-slate-500">
                    Виза для привлечения иностранных инвестиций и ведения
                    инвестиционной деятельности в Казахстане.
                  </p>
                </div>
              </div>

              {/* 3. Бизнес-визы */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <Building2 className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">Бизнес-визы</p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">B2</span> — деловые встречи,
                    конференции, переговоры.
                    <br />
                    <span className="font-semibold">B3</span> — установка
                    оборудования, предоставление услуг и др.
                  </p>
                  <p className="text-xs text-slate-500">
                    Оптимальны для краткосрочных деловых визитов, командировок и
                    выполнения профессиональной деятельности без
                    трудоустройства.
                  </p>
                </div>
              </div>

              {/* 4. Туристические визы */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <PlaneTakeoff
                  className="text-primary shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <p className="font-bold text-base mb-1">Туристические визы</p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">B12</span> — краткосрочные
                    туристические поездки.
                  </p>
                  <p className="text-xs text-slate-500">
                    Позволяют путешествовать по Казахстану с целью туризма,
                    экскурсий, отдыха, изучения достопримечательностей.
                  </p>
                </div>
              </div>

              {/* 5. Визы на лечение, частные и иные краткосрочные цели */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <Stethoscope className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">
                    Визы на лечение, частные визиты
                  </p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">B10</span> — лечение.
                    <br />
                    <span className="font-semibold">B11</span> — частный визит
                    (напр., к родственникам).
                  </p>
                  <p className="text-xs text-slate-500">
                    Для получения медицинских услуг, посещения друзей,
                    родственников, а также иных краткосрочных целей въезда.
                  </p>
                </div>
              </div>

              {/* 6. Студенческие и учебные визы */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <GraduationCap
                  className="text-primary shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <p className="font-bold text-base mb-1">
                    Студенческие и учебные визы
                  </p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">C9</span> — учеба в вузах,
                    колледжах и других образовательных учреждениях.
                  </p>
                  <p className="text-xs text-slate-500">
                    Необходимы для иностранных граждан, поступающих на учебу по
                    программам высшего, среднего и дополнительного образования.
                  </p>
                </div>
              </div>

              {/* 7. Рабочие визы */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <Briefcase className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">Рабочие визы</p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">C3</span> — прибытие на
                    работу.
                    <br />
                    <span className="font-semibold">C4</span>,{" "}
                    <span className="font-semibold">C5</span>,{" "}
                    <span className="font-semibold">C6</span> — различные
                    категории трудовой деятельности, сезонные работы и пр.
                  </p>
                  <p className="text-xs text-slate-500">
                    Дают право на официальное трудоустройство и получение
                    разрешения на работу на территории Казахстана.
                  </p>
                </div>
              </div>

              {/* 8. Визы на воссоединение семьи */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <Users className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">
                    Визы на воссоединение семьи
                  </p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">C2</span> — для членов семьи
                    иностранных граждан, проживающих в РК.
                  </p>
                  <p className="text-xs text-slate-500">
                    Позволяют супругам, детям, другим близким родственникам
                    воссоединиться и проживать с семьей на территории страны.
                  </p>
                </div>
              </div>

              {/* 9. Визы для ПМЖ (постоянное место жительства) */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <HomeIcon className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">Визы для ПМЖ</p>
                  <p className="text-sm text-slate-600 mb-1">
                    <span className="font-semibold">C10</span> — для лиц,
                    получивших разрешение на ПМЖ.
                  </p>
                  <p className="text-xs text-slate-500">
                    После получения ПМЖ позволяет проживать и осуществлять
                    трудовую или иную деятельность на постоянной основе.
                  </p>
                </div>
              </div>

              {/* 10. Дополнительные типы виз */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <Monitor className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">Электронные визы</p>
                  <p className="text-sm text-slate-600 mb-1">
                    Оформляются полностью онлайн для ряда краткосрочных целей
                    (туризм, бизнес, лечение).
                  </p>
                  <p className="text-xs text-slate-500">
                    Упрощают и ускоряют процесс получения разрешения на въезд
                    без необходимости посещать консульство.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
                <Laptop className="text-primary shrink-0 mt-1" size={32} />
                <div>
                  <p className="font-bold text-base mb-1">Digital Nomad виза</p>
                  <p className="text-sm text-slate-600 mb-1">
                    Для удалённых специалистов, фрилансеров, ИТ-экспертов –
                    оформление специальных статусов для работы из Казахстана
                    дистанционно.
                  </p>
                  <p className="text-xs text-slate-500">
                    Позволяет свободно работать онлайн, проживать в стране и
                    пользоваться всеми преимуществами статуса digital nomad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="bg-primary text-white p-8 rounded-lg md:sticky md:top-24">
                <h2 className="text-4xl font-bold">Почему мы?</h2>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Глубокая экспертиза
                    </h3>
                    <p className="text-gray-600">
                      Мы специализируемся исключительно на миграционном
                      законодательстве Казахстана и знаем все его нюансы.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      10+ лет опыта
                    </h3>
                    <p className="text-gray-600">
                      С 2014 года мы помогли более 12 000 иностранным гражданам
                      успешно оформить документы для легального проживания и
                      работы в Казахстане.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Гарантированный результат
                    </h3>
                    <p className="text-gray-600">
                      Заключаем официальный договор и берем на себя полную
                      ответственность за подготовку документов и их успешное
                      принятие государственными органами.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Прозрачные условия
                    </h3>
                    <p className="text-gray-600">
                      Стоимость услуг фиксируется в договоре с самого начала и
                      остается неизменной до момента получения вами РВП, ВНЖ или
                      гражданства.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Честные консультации
                    </h3>
                    <p className="text-gray-600">
                      Предоставляем только объективную информацию о вашей
                      ситуации, не предлагая ненужных услуг.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Полное сопровождение
                    </h3>
                    <p className="text-gray-600">
                      Помогаем не только с консультациями, но и с подготовкой
                      всех документов для получения законного статуса в
                      Казахстане.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Персональный подход
                    </h3>
                    <p className="text-gray-600">
                      Наши юристы сопровождают вас на всех этапах оформления,
                      взаимодействуют с госорганами и решают возникающие
                      вопросы.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
                  <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      Комфортная коммуникация
                    </h3>
                    <p className="text-gray-600">
                      Мы говорим на русском, казахском и английском языках. Если
                      нужен переводчик на другой язык – организуем его для
                      вашего удобства.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Гарантии</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
                <RefreshCw className="text-4xl text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">
                  Повторная подача без ограничений
                </h3>
                <p className="text-gray-600 grow">
                  Если документы не прошли проверку с первого раза, наши
                  специалисты быстро выявят и исправят все недочеты, добиваясь
                  успешного принятия вашего пакета государственными органами
                  Казахстана.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
                <BadgeCheck className="text-4xl text-primary mb-4 shrink-0" />
                <h3 className="text-lg font-bold mb-2">
                  Прозрачная стоимость без сюрпризов
                </h3>
                <p className="text-gray-600 grow">
                  Цена услуг фиксируется на этапе заключения договора и остается
                  неизменной до завершения всего процесса оформления. Никаких
                  скрытых платежей и неожиданных доплат.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
                <ShieldCheck className="text-4xl text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">
                  Документы, полностью соответствующие требованиям
                </h3>
                <p className="text-gray-600 grow">
                  Мы тщательно проверяем каждую деталь, чтобы исключить ошибки и
                  несоответствия. Все документы оформляются в строгом
                  соответствии с законодательством, что обеспечивает их
                  безупречное принятие госорганами.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
                <ClipboardCheck className="text-4xl text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">
                  Гарантированный результат при соблюдении всех условий
                </h3>
                <p className="text-gray-600 grow">
                  Мы уверены в качестве своей работы и гарантируем, что
                  правильно подготовленный пакет документов примут на
                  рассмотрение. Если все требования выполнены, вы получите
                  желаемый результат без задержек и сложностей.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16">
          <PaymentVariants />
        </section>

        <div className="pt-10">
          <BidForm />
        </div>
        {/* <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 bg-gray-800 rounded-lg overflow-hidden text-white">
              <div className="p-8 md:p-12 relative">
                <Image
                  alt="Директор офиса готова к консультации"
                  className="absolute right-0 bottom-0 h-full w-auto object-cover opacity-10 hidden md:block"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD99Hj0yaCHaA8Flzm6w1Rd7nzU2MJzHltQi8PQqbjy51vgg-KTfYawphInCrqAoW6y1VY-NR0H9IDNUEpNfLUvIfzDcUnAGdq1kdn14gajR_C0NXAkxGE0C2zftg-n47ZyRRymWYPdHnjgADEVnSGiu4t2zHBYaqhkYtrET5ukiJI4qjWPmuvD-p5bn15Fg3eY2Q70bBJ4gJ3dypXaZ_vP6aWbD9YgmqBqq_qtL2gR9DnqWMjloFAgLQraCgKrbwb--L6bxdd4wLw"
                  width={550}
                  height={730}
                  style={{
                    objectPosition: "right",
                    objectFit: "cover",
                    height: "100%",
                    width: "auto",
                    opacity: 0.1,
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    display: "none",
                  }}
                  priority
                />
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Получите бесплатную консультацию
                  </h2>
                  <form className="space-y-4">
                    <input
                      className="w-full bg-gray-700 border-gray-600 rounded-full py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
                      placeholder="Напишите ваше имя*"
                      type="text"
                    />
                    <input
                      className="w-full bg-gray-700 border-gray-600 rounded-full py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
                      placeholder="Номер телефона*"
                      type="tel"
                    />
                    <input
                      className="w-full bg-gray-700 border-gray-600 rounded-full py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
                      placeholder="Напишите ваш e-mail"
                      type="email"
                    />
                    <textarea
                      className="w-full bg-gray-700 border-gray-600 rounded-2xl py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
                      placeholder="Комментарий"
                      rows={3}
                      defaultValue={""}
                    />
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        className="bg-background-light py-3 px-8 rounded-full font-semibold hover:opacity-90 transition-opacity mx-auto"
                        type="submit"
                      >
                        Позвоните мне
                      </button>
                      <p className="text-xs text-gray-400">
                        Нажимая на кнопку, вы соглашаетесь с
                        <a className="underline hover:text-white" href="#">
                          Пользовательским соглашением
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-gray-50 rounded-lg m-4 text-center flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Или свяжитесь с нами любым удобным Вам способом
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-4 my-6">
                  <a
                    className="border-2 border-gray-300 rounded-full py-3 px-6 font-medium flex items-center gap-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    href="#"
                  >
                    <MessageCircle className="text-[#25D366] w-6 h-6" />
                    WhatsApp
                  </a>
                  <a
                    className="border-2 border-gray-300 rounded-full py-3 px-6 font-medium flex items-center gap-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    href="#"
                  >
                    <Send className="text-[#0088cc] w-6 h-6" />
                    Telegram
                  </a>
                </div>
                <a
                  className="text-3xl md:text-4xl font-bold text-gray-800 whitespace-nowrap"
                  href="tel:+77273107843"
                >
                  +7 727 310 7843
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
