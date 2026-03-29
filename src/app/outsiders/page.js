// import React from "react";
// import Image from "next/image";
// import {
//   CheckCircle2,
//   ArrowRight,
//   RefreshCw,
//   BadgeCheck,
//   ShieldCheck,
//   ClipboardCheck,
//   CreditCard,
//   Banknote,
//   Landmark,
//   MessageCircle,
//   Send,
//   PlaneTakeoff,
//   Briefcase,
//   GraduationCap,
//   Building2,
//   Users,
//   TrendingUp,
//   Stethoscope,
//   HomeIcon,
//   Monitor,
//   Laptop,
// } from "lucide-react";
// import Link from "next/link";
// import PaymentVariants from "@/components/payment-variants";
// import BidForm from "@/components/bid-form";
// import { Button } from "@/components/ui/button";
// import { VisaCalculatorButton } from "@/components/visa-calculator/vis-calculator-modal";

// export default function page() {

//   return (
//     <>
//       <main>
//         {/* <section className="py-16 md:py-24">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="text-sm text-gray-500 mb-8">
//               <span>Главная</span> &gt; <span>О компании</span>
//             </div>
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//                   О компании
//                 </h1>
//                 <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
//                   «Ozelim» - это специализированное агентство, сфокусированное на
//                   решении миграционных задач иностранных граждан в Республике
//                   Казахстан. Наша деятельность целиком сосредоточена на вопросах
//                   миграционного права, что позволило нам достичь глубокого
//                   понимания всех тонкостей этой области.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   Команда нашего агентства состоит из специалистов, лично
//                   прошедших процесс переселения в Казахстан и получения
//                   гражданства, благодаря чему мы отлично понимаем ваши ожидания и
//                   потребности при обращении в миграционную компанию.
//                 </p>
//               </div>
//               <div>
//                 <Image
//                   alt="Фотография команды агентства Ozelim"
//                   className="rounded-lg w-full"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiFE9Sdd0jymYHWXqGTBSe8hqI1mFxOdSTcf9Xpjp641j0h8wXFp55P0myU-RJXutrxou7HGmmxi1rRSPBOwNYXSBcQcvsoVQmopbGkpnZ6EkRAcFceTH44e3uBXA62FOLgcEpzrsrrlgfB9g8aVMWT8Y09kQdIHjQmVaH8zUSJpnHKAzstI76IoIrfkZUORMKCd80BKEW6BEiVbunfVAOSgpqXxWvMGGaFY4bOIs-eAbhYosR38VK7G0-BYuBJG2U8igBzgIcXjBq"
//                   width={700}
//                   height={450}
//                   style={{ width: "100%", height: "auto" }}
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </section> */}

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-4 pt-6">
//           <div>
//             <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
//               Ваш надежный гид в Казахстане
//             </span>

//             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-4">
//               Миграционные услуги для иностранных граждан в Казахстане
//             </h1>
//             <p className="mt-4 text-lg text-slate-600">
//               Помощь миграционных юристов в оформлении документов на РВП, ВНЖ,
//               гражданство РК и получении виз С3 и С5.
//             </p>
//             <p className="mt-4 text-slate-600">
//               Гарантируем подачу документов в соответствии с законом
//             </p>
//             <div className="mt-8">
//               <VisaCalculatorButton
//                 title='Бесплатная онлайн-консультация'
//                 buttonOptions={{
//                   className: "bg-primary font-semibold px-8 py-6 rounded-lg  hover:opacity-90 transition shadow-lg shadow-primary/20 text-white",
//                   size: 'lg',
//                 }}
//               />
//               {/* <button
//                 href="#section-id1"
//               >
//                 Бесплатная онлайн-консультация
//               </button> */}
//             </div>
//           </div>

//           <div className="relative gap-4">
//             <div className="space-y-4">
//               <div className="rounded-2xl overflow-hidden h-96 soft-shadow shadow-lg bg-white">
//                 <Image
//                   alt="Almaty Architecture"
//                   className="w-full h-full object-cover"
//                   src="/outsiders-hero.jpeg"
//                   height={500}
//                   width={500}
//                   data-alt="Modern Almaty architecture reflecting city life"
//                   style={{ objectFit: "cover" }}
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="py-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center bg-background-light overflow-hidden">
//               <div className="relative w-full md:w-5/12">
//                 <div className="absolute inset-0 bg-opacity-50 flex items-end p-8 md:bg-opacity-0">
//                   <div className="bg-primary text-white p-4 rounded-lg md:translate-x-3/5">
//                     <h3 className="text-2xl font-bold">Мукатаева Айгуль</h3>
//                     <p className="text-gray-200">Директор офиса</p>
//                     <p className="text-gray-300 text-sm">
//                       опыт работы более 20 лет
//                     </p>
//                   </div>
//                 </div>
//                 <Image
//                   alt="Фотография директора офиса Мукатаева Айгуль"
//                   className="w-full object-contain rounded-xl"
//                   src={"/mukataeva-aigul.jpeg"}
//                   width={550}
//                   height={240}
//                   style={{ width: "100%", height: "540px", objectFit: "cover" }}
//                   priority
//                 />
//               </div>
//               <div className="pt-6 md:p-12 md:pl-24 w-full md:w-7/12">
//                 <h2 className="text-3xl font-bold mb-6 text-gray-900">
//                   Здравствуйте!
//                 </h2>
//                 <div className="space-y-4 text-gray-700 leading-relaxed">
//                   <p>
//                     <span className="font-semibold text-primary">
//                       Наш визовый центр
//                     </span>{" "}
//                     помогает иностранным гражданам оформить документы для
//                     проживания и работы в Казахстане.
//                   </p>
//                   <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 mb-3 text-base">
//                     <span className="font-bold block mb-3 text-slate-800">
//                       Мы помогаем с:
//                     </span>
//                     <ul className="space-y-2 list-disc list-inside">
//                       <li>визами</li>
//                       <li>
//                         оформлением документов на{" "}
//                         <span className="font-semibold">РВП</span>,{" "}
//                         <span className="font-semibold">ВНЖ</span>
//                       </li>
//                       <li>регистрацией</li>
//                       <li>бронированием отелей в РК</li>
//                       <li>оформлением документов на гражданство РК</li>
//                       <li>проверкой документов</li>
//                       <li>разрешением на работу</li>
//                       <li>страхованием</li>
//                     </ul>
//                   </div>
//                   <p>
//                     Мы объясним весь процесс и поможем подготовить документы.
//                   </p>
//                   <p className="font-semibold text-primary">
//                     Обращайтесь — будем рады помочь!
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-8 mx-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-end justify-between mb-6">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tight">
//                   Визы в Казахстан
//                 </h2>
//                 <p className="text-slate-500">
//                   Профессиональная помощь в подборе и оформлении всех видов виз
//                   для иностранных граждан
//                 </p>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* 1. Дипломатические и служебные визы */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <PlaneTakeoff
//                   className="text-primary shrink-0 mt-1"
//                   size={32}
//                 />
//                 <div>
//                   <p className="font-bold text-base mb-1">
//                     Дипломатические и служебные визы
//                   </p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">A1</span> — для глав
//                     государств, правительств и членов официальных делегаций.
//                     <br />
//                     <span className="font-semibold">A2</span> — для сотрудников
//                     дипмиссий, консульств, международных организаций.
//                     <br />
//                     <span className="font-semibold">A3</span> — для
//                     представителей иностранных государств и членов их семей.
//                     <br />
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Эти типы виз позволяют осуществлять официальный въезд и
//                     пребывание для реализации дипломатической и служебной
//                     деятельности.
//                   </p>
//                 </div>
//               </div>

//               {/* 2. Инвестиционные визы */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <TrendingUp className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">
//                     Инвестиционные визы
//                   </p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">B1</span> — для инвесторов и
//                     представителей инвесткомпаний.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Виза для привлечения иностранных инвестиций и ведения
//                     инвестиционной деятельности в Казахстане.
//                   </p>
//                 </div>
//               </div>

//               {/* 3. Бизнес-визы */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <Building2 className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">Бизнес-визы</p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">B2</span> — деловые встречи,
//                     конференции, переговоры.
//                     <br />
//                     <span className="font-semibold">B3</span> — установка
//                     оборудования, предоставление услуг и др.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Оптимальны для краткосрочных деловых визитов, командировок и
//                     выполнения профессиональной деятельности без
//                     трудоустройства.
//                   </p>
//                 </div>
//               </div>

//               {/* 4. Туристические визы */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <PlaneTakeoff
//                   className="text-primary shrink-0 mt-1"
//                   size={32}
//                 />
//                 <div>
//                   <p className="font-bold text-base mb-1">Туристические визы</p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">B12</span> — краткосрочные
//                     туристические поездки.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Позволяют путешествовать по Казахстану с целью туризма,
//                     экскурсий, отдыха, изучения достопримечательностей.
//                   </p>
//                 </div>
//               </div>

//               {/* 5. Визы на лечение, частные и иные краткосрочные цели */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <Stethoscope className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">
//                     Визы на лечение, частные визиты
//                   </p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">B10</span> — лечение.
//                     <br />
//                     <span className="font-semibold">B11</span> — частный визит
//                     (напр., к родственникам).
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Для получения медицинских услуг, посещения друзей,
//                     родственников, а также иных краткосрочных целей въезда.
//                   </p>
//                 </div>
//               </div>

//               {/* 6. Студенческие и учебные визы */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <GraduationCap
//                   className="text-primary shrink-0 mt-1"
//                   size={32}
//                 />
//                 <div>
//                   <p className="font-bold text-base mb-1">
//                     Студенческие и учебные визы
//                   </p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">C9</span> — учеба в вузах,
//                     колледжах и других образовательных учреждениях.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Необходимы для иностранных граждан, поступающих на учебу по
//                     программам высшего, среднего и дополнительного образования.
//                   </p>
//                 </div>
//               </div>

//               {/* 7. Рабочие визы */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <Briefcase className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">Рабочие визы</p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">C3</span> — прибытие на
//                     работу.
//                     <br />
//                     <span className="font-semibold">C4</span>,{" "}
//                     <span className="font-semibold">C5</span>,{" "}
//                     <span className="font-semibold">C6</span> — различные
//                     категории трудовой деятельности, сезонные работы и пр.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Дают право на официальное трудоустройство и получение
//                     разрешения на работу на территории Казахстана.
//                   </p>
//                 </div>
//               </div>

//               {/* 8. Визы на воссоединение семьи */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <Users className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">
//                     Визы на воссоединение семьи
//                   </p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">C2</span> — для членов семьи
//                     иностранных граждан, проживающих в РК.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Позволяют супругам, детям, другим близким родственникам
//                     воссоединиться и проживать с семьей на территории страны.
//                   </p>
//                 </div>
//               </div>

//               {/* 9. Визы для ПМЖ (постоянное место жительства) */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <HomeIcon className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">Визы для ПМЖ</p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     <span className="font-semibold">C10</span> — для лиц,
//                     получивших разрешение на ПМЖ.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     После получения ПМЖ позволяет проживать и осуществлять
//                     трудовую или иную деятельность на постоянной основе.
//                   </p>
//                 </div>
//               </div>

//               {/* 10. Дополнительные типы виз */}
//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <Monitor className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">Электронные визы</p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     Оформляются полностью онлайн для ряда краткосрочных целей
//                     (туризм, бизнес, лечение).
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Упрощают и ускоряют процесс получения разрешения на въезд
//                     без необходимости посещать консульство.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-all soft-shadow shadow flex gap-4">
//                 <Laptop className="text-primary shrink-0 mt-1" size={32} />
//                 <div>
//                   <p className="font-bold text-base mb-1">Digital Nomad виза</p>
//                   <p className="text-sm text-slate-600 mb-1">
//                     Для удалённых специалистов, фрилансеров, ИТ-экспертов –
//                     оформление специальных статусов для работы из Казахстана
//                     дистанционно.
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Позволяет свободно работать онлайн, проживать в стране и
//                     пользоваться всеми преимуществами статуса digital nomad.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="grid md:grid-cols-3 gap-12 items-start">
//               <div className="bg-primary text-white p-8 rounded-lg md:sticky md:top-24">
//                 <h2 className="text-4xl font-bold">Почему мы?</h2>
//               </div>
//               <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-10">
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Глубокая экспертиза
//                     </h3>
//                     <p className="text-gray-600">
//                       Мы специализируемся исключительно на миграционном
//                       законодательстве Казахстана и знаем все его нюансы.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       10+ лет опыта
//                     </h3>
//                     <p className="text-gray-600">
//                       С 2014 года мы помогли более 12 000 иностранным гражданам
//                       успешно оформить документы для легального проживания и
//                       работы в Казахстане.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Гарантированный результат
//                     </h3>
//                     <p className="text-gray-600">
//                       Заключаем официальный договор и берем на себя полную
//                       ответственность за подготовку документов и их успешное
//                       принятие государственными органами.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Прозрачные условия
//                     </h3>
//                     <p className="text-gray-600">
//                       Стоимость услуг фиксируется в договоре с самого начала и
//                       остается неизменной до момента получения вами РВП, ВНЖ или
//                       гражданства.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Честные консультации
//                     </h3>
//                     <p className="text-gray-600">
//                       Предоставляем только объективную информацию о вашей
//                       ситуации, не предлагая ненужных услуг.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Полное сопровождение
//                     </h3>
//                     <p className="text-gray-600">
//                       Помогаем не только с консультациями, но и с подготовкой
//                       всех документов для получения законного статуса в
//                       Казахстане.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Персональный подход
//                     </h3>
//                     <p className="text-gray-600">
//                       Наши юристы сопровождают вас на всех этапах оформления,
//                       взаимодействуют с госорганами и решают возникающие
//                       вопросы.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 border border-slate-200 bg-white p-3 rounded-xl">
//                   <CheckCircle2 className="text-3xl text-primary mt-1 shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       Комфортная коммуникация
//                     </h3>
//                     <p className="text-gray-600">
//                       Мы говорим на русском, казахском и английском языках. Если
//                       нужен переводчик на другой язык – организуем его для
//                       вашего удобства.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="py-16 md:py-24 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex justify-between items-center mb-12">
//               <h2 className="text-3xl font-bold">Гарантии</h2>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
//                 <RefreshCw className="text-4xl text-primary mb-4" />
//                 <h3 className="text-lg font-bold mb-2">
//                   Повторная подача без ограничений
//                 </h3>
//                 <p className="text-gray-600 grow">
//                   Если документы не прошли проверку с первого раза, наши
//                   специалисты быстро выявят и исправят все недочеты, добиваясь
//                   успешного принятия вашего пакета государственными органами
//                   Казахстана.
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
//                 <BadgeCheck className="text-4xl text-primary mb-4 shrink-0" />
//                 <h3 className="text-lg font-bold mb-2">
//                   Прозрачная стоимость без сюрпризов
//                 </h3>
//                 <p className="text-gray-600 grow">
//                   Цена услуг фиксируется на этапе заключения договора и остается
//                   неизменной до завершения всего процесса оформления. Никаких
//                   скрытых платежей и неожиданных доплат.
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
//                 <ShieldCheck className="text-4xl text-primary mb-4" />
//                 <h3 className="text-lg font-bold mb-2">
//                   Документы, полностью соответствующие требованиям
//                 </h3>
//                 <p className="text-gray-600 grow">
//                   Мы тщательно проверяем каждую деталь, чтобы исключить ошибки и
//                   несоответствия. Все документы оформляются в строгом
//                   соответствии с законодательством, что обеспечивает их
//                   безупречное принятие госорганами.
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-lg flex flex-col border border-slate-200">
//                 <ClipboardCheck className="text-4xl text-primary mb-4" />
//                 <h3 className="text-lg font-bold mb-2">
//                   Гарантированный результат при соблюдении всех условий
//                 </h3>
//                 <p className="text-gray-600 grow">
//                   Мы уверены в качестве своей работы и гарантируем, что
//                   правильно подготовленный пакет документов примут на
//                   рассмотрение. Если все требования выполнены, вы получите
//                   желаемый результат без задержек и сложностей.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="py-10 md:py-16">
//           <PaymentVariants />
//         </section>

//         <div className="pt-10">
//           <BidForm />
//         </div>
//         {/* <section className="py-16 md:py-24">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12 bg-gray-800 rounded-lg overflow-hidden text-white">
//               <div className="p-8 md:p-12 relative">
//                 <Image
//                   alt="Директор офиса готова к консультации"
//                   className="absolute right-0 bottom-0 h-full w-auto object-cover opacity-10 hidden md:block"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuD99Hj0yaCHaA8Flzm6w1Rd7nzU2MJzHltQi8PQqbjy51vgg-KTfYawphInCrqAoW6y1VY-NR0H9IDNUEpNfLUvIfzDcUnAGdq1kdn14gajR_C0NXAkxGE0C2zftg-n47ZyRRymWYPdHnjgADEVnSGiu4t2zHBYaqhkYtrET5ukiJI4qjWPmuvD-p5bn15Fg3eY2Q70bBJ4gJ3dypXaZ_vP6aWbD9YgmqBqq_qtL2gR9DnqWMjloFAgLQraCgKrbwb--L6bxdd4wLw"
//                   width={550}
//                   height={730}
//                   style={{
//                     objectPosition: "right",
//                     objectFit: "cover",
//                     height: "100%",
//                     width: "auto",
//                     opacity: 0.1,
//                     position: "absolute",
//                     right: 0,
//                     bottom: 0,
//                     display: "none",
//                   }}
//                   priority
//                 />
//                 <div className="relative">
//                   <h2 className="text-4xl md:text-5xl font-bold mb-8">
//                     Получите бесплатную консультацию
//                   </h2>
//                   <form className="space-y-4">
//                     <input
//                       className="w-full bg-gray-700 border-gray-600 rounded-full py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
//                       placeholder="Напишите ваше имя*"
//                       type="text"
//                     />
//                     <input
//                       className="w-full bg-gray-700 border-gray-600 rounded-full py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
//                       placeholder="Номер телефона*"
//                       type="tel"
//                     />
//                     <input
//                       className="w-full bg-gray-700 border-gray-600 rounded-full py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
//                       placeholder="Напишите ваш e-mail"
//                       type="email"
//                     />
//                     <textarea
//                       className="w-full bg-gray-700 border-gray-600 rounded-2xl py-3 px-5 focus:ring-primary focus:border-primary placeholder-gray-400"
//                       placeholder="Комментарий"
//                       rows={3}
//                       defaultValue={""}
//                     />
//                     <div className="flex flex-wrap items-center gap-4 pt-4">
//                       <button
//                         className="bg-background-light py-3 px-8 rounded-full font-semibold hover:opacity-90 transition-opacity mx-auto"
//                         type="submit"
//                       >
//                         Позвоните мне
//                       </button>
//                       <p className="text-xs text-gray-400">
//                         Нажимая на кнопку, вы соглашаетесь с
//                         <a className="underline hover:text-white" href="#">
//                           Пользовательским соглашением
//                         </a>
//                         .
//                       </p>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="p-8 md:p-12 bg-gray-50 rounded-lg m-4 text-center flex flex-col justify-center">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//                   Или свяжитесь с нами любым удобным Вам способом
//                 </h2>
//                 <div className="flex flex-col md:flex-row justify-center gap-4 my-6">
//                   <a
//                     className="border-2 border-gray-300 rounded-full py-3 px-6 font-medium flex items-center gap-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                     href="#"
//                   >
//                     <MessageCircle className="text-[#25D366] w-6 h-6" />
//                     WhatsApp
//                   </a>
//                   <a
//                     className="border-2 border-gray-300 rounded-full py-3 px-6 font-medium flex items-center gap-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                     href="#"
//                   >
//                     <Send className="text-[#0088cc] w-6 h-6" />
//                     Telegram
//                   </a>
//                 </div>
//                 <a
//                   className="text-3xl md:text-4xl font-bold text-gray-800 whitespace-nowrap"
//                   href="tel:+77273107843"
//                 >
//                   +7 727 310 7843
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section> */}
//       </main>
//     </>
//   );
// }
"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  RefreshCw,
  BadgeCheck,
  ShieldCheck,
  ClipboardCheck,
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
import PaymentVariants from "@/components/payment-variants";
import BidForm from "@/components/bid-form";
import { VisaCalculatorButton } from "@/components/visa-calculator/visa-calculator-modal";

/* ─── design tokens (same as main visa page) ─── */
const gradStyle = {
  background: "linear-gradient(135deg, #c084fc 0%, #9333ea 45%, #6b21a8 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};
const accentBar = {
  background: "linear-gradient(90deg, #dca7f2, #a855f7, #7c3aed)",
};
const iconBg = {
  background:
    "linear-gradient(135deg, rgba(220,167,242,0.18), rgba(168,85,247,0.12))",
};
const cardShadow =
  "0 2px 16px rgba(168,85,247,0.08), 0 1px 3px rgba(0,0,0,0.06)";
const cardShadowHover =
  "0 8px 32px rgba(168,85,247,0.16), 0 2px 8px rgba(0,0,0,0.08)";

/* ══════════════════════════════════════════════════════════════════
   FULL-PAGE DIAGONAL BACKGROUND
   One fixed layer, alternating 100vh bands right → left → right…
══════════════════════════════════════════════════════════════════ */
function PageDiagBg({ bands = 9 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${bands * 100}vh`,
        }}
      >
        {Array.from({ length: bands }).map((_, i) => {
          const R = i % 2 === 0;
          const edge = R ? "right" : "left";
          const deg = R ? "-8deg" : "8deg";
          const gDir = R ? "155deg" : "205deg";
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${i * 100}vh`,
                left: 0,
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-40%",
                  [edge]: "-6%",
                  width: "58%",
                  height: "180%",
                  background: `linear-gradient(${gDir},rgba(192,132,252,.13) 0%,rgba(147,51,234,.09) 55%,transparent 85%)`,
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                  borderRadius: "64px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-30%",
                  [edge]: "4%",
                  width: "40%",
                  height: "160%",
                  background: `linear-gradient(${gDir},rgba(192,132,252,.17) 0%,rgba(147,51,234,.11) 55%,transparent 90%)`,
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                  borderRadius: "44px",
                  border: "1px solid rgba(192,132,252,.18)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  [edge]: "15%",
                  width: "24%",
                  height: "140%",
                  background: `linear-gradient(${gDir},rgba(192,132,252,.21) 0%,rgba(147,51,234,.13) 50%,transparent 85%)`,
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                  borderRadius: "28px",
                  border: "1px solid rgba(192,132,252,.22)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  [edge]: "33%",
                  width: "2px",
                  height: "140%",
                  background:
                    "linear-gradient(180deg,transparent 0%,rgba(192,132,252,.52) 20%,rgba(147,51,234,.42) 80%,transparent 100%)",
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  [edge]: "26%",
                  width: "1px",
                  height: "140%",
                  background:
                    "linear-gradient(180deg,transparent 0%,rgba(192,132,252,.24) 40%,transparent 100%)",
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  [edge]: "calc(33% - 4px)",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "rgba(192,132,252,.62)",
                  boxShadow: "0 0 14px 4px rgba(147,51,234,.32)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── SectionHeader ─── */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-1"
        style={{ color: "#7c3aed" }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-bold tracking-tight mb-2"
        style={{
          fontSize: "clamp(2rem,4.5vw,3.2rem)",
          lineHeight: 1.1,
          ...gradStyle,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-sm max-w-xl">{subtitle}</p>
      )}
      <div className="flex items-center gap-3 mt-4">
        <div className="h-[2px] w-16 rounded-full" style={accentBar} />
        <div
          className="h-px w-8 rounded-full"
          style={{ background: "rgba(220,167,242,.3)" }}
        />
        <div
          className="h-px w-4 rounded-full"
          style={{ background: "rgba(220,167,242,.15)" }}
        />
      </div>
    </div>
  );
}

/* ─── VisaCard ─── */
function VisaCard({ icon: Icon, title, codes, desc }) {
  return (
    <div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border relative overflow-hidden transition-all duration-300 group flex gap-4"
      style={{ borderColor: "rgba(220,167,242,.2)", boxShadow: cardShadow }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(220,167,242,.55)";
        e.currentTarget.style.boxShadow = cardShadowHover;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(220,167,242,.2)";
        e.currentTarget.style.boxShadow = cardShadow;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(220,167,242,.12) 0%,transparent 70%)",
        }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
        style={iconBg}
      >
        <Icon size={22} style={{ color: "#a855f7" }} />
      </div>
      <div className="min-w-0">
        <p className="font-bold text-base mb-1" style={gradStyle}>
          {title}
        </p>
        {codes && (
          <p className="text-sm text-slate-600 mb-1 leading-relaxed">{codes}</p>
        )}
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={accentBar}
      />
    </div>
  );
}

/* ─── WhyCard ─── */
function WhyCard({ title, desc }) {
  return (
    <div
      className="flex items-start gap-4 border rounded-2xl p-5 bg-white/80 backdrop-blur-sm relative overflow-hidden transition-all duration-300 group"
      style={{ borderColor: "rgba(220,167,242,.2)", boxShadow: cardShadow }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(220,167,242,.55)";
        e.currentTarget.style.boxShadow = cardShadowHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(220,167,242,.2)";
        e.currentTarget.style.boxShadow = cardShadow;
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={iconBg}
      >
        <CheckCircle2 size={16} style={{ color: "#a855f7" }} />
      </div>
      <div>
        <h3 className="font-bold text-base mb-1" style={gradStyle}>
          {title}
        </h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={accentBar}
      />
    </div>
  );
}

/* ─── GuaranteeCard ─── */
function GuaranteeCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col border relative overflow-hidden transition-all duration-300 group"
      style={{ borderColor: "rgba(220,167,242,.2)", boxShadow: cardShadow }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(220,167,242,.55)";
        e.currentTarget.style.boxShadow = cardShadowHover;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(220,167,242,.2)";
        e.currentTarget.style.boxShadow = cardShadow;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={iconBg}
      >
        <Icon size={24} style={{ color: "#a855f7" }} />
      </div>
      <h3 className="font-bold text-base mb-2" style={gradStyle}>
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed grow">{desc}</p>
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={accentBar}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function Page() {
  return (
    <div className="relative w-full">
      <PageDiagBg bands={9} />

      <main className="relative z-10">
        {/* ══════ HERO ══════ */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-4 pt-6">
          <div>
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
              Ваш надежный гид в Казахстане
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mt-4">
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
                title="Бесплатная онлайн-консультация"
                buttonOptions={{
                  className:
                    "bg-primary font-semibold px-8 py-6 rounded-lg hover:opacity-90 transition shadow-lg shadow-primary/20 text-white",
                  size: "lg",
                }}
              />
            </div>
          </div>
          <div className="relative gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-96 soft-shadow shadow-lg bg-white">
                <Image
                  alt="Almaty Architecture"
                  className="w-full h-full object-cover"
                  src="/outsiders-hero.jpeg"
                  height={500}
                  width={500}
                  data-alt="Modern Almaty architecture reflecting city life"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══════ DIRECTOR INTRO ══════ */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="О нас"
              subtitle="Наш визовый центр помогает иностранным гражданам оформить документы для проживания и работы в Казахстане."
            />
            <div
              className="flex flex-col md:flex-row rounded-3xl overflow-hidden border"
              style={{
                borderColor: "rgba(220,167,242,.2)",
                boxShadow: cardShadow,
                background: "rgba(255,255,255,.75)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* photo */}
              <div className="relative w-full md:w-5/12 min-h-[380px]">
                <Image
                  alt="Мукатаева Айгуль — директор офиса"
                  src="/mukataeva-aigul.jpeg"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
                {/* name badge */}
                <div
                  className="absolute top-6 left-6 right-6 md:right-auto md:translate-x-0 rounded-2xl px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(135deg,#dca7f2,#a855f7,#7c3aed)",
                    boxShadow: "0 8px 32px rgba(168,85,247,.4)",
                  }}
                >
                  <p className="font-bold text-white text-lg">
                    Мукатаева Айгуль
                  </p>
                  <p className="text-white text-sm">Директор офиса</p>
                  <p className="text-white text-sm mt-0.5">
                    опыт работы более 20 лет
                  </p>
                </div>
              </div>

              {/* text */}
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-slate-700 leading-relaxed mb-6">
                  <span className="font-semibold" style={{ color: "#7c3aed" }}>
                    Наш визовый центр
                  </span>{" "}
                  помогает иностранным гражданам оформить документы для
                  проживания и работы в Казахстане. Мы объясним весь процесс и
                  поможем подготовить документы.
                </p>

                {/* services list */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    borderColor: "rgba(220,167,242,.2)",
                    background: "rgba(220,167,242,.05)",
                  }}
                >
                  <p
                    className="font-bold text-sm uppercase tracking-widest mb-4"
                    style={{ color: "#7c3aed" }}
                  >
                    Мы помогаем с:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Визами С3 и С5",
                      "Оформлением РВП и ВНЖ",
                      "Регистрацией",
                      "Гражданством РК",
                      "Проверкой документов",
                      "Разрешением на работу",
                      "Бронированием отелей",
                      "Страхованием",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={accentBar}
                        />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p
                  className="mt-6 font-semibold text-lg"
                  style={{ color: "#7c3aed" }}
                >
                  Обращайтесь — будем рады помочь! 🤝
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ VISA TYPES ══════ */}
        <section id="visa-types" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Въезд в Казахстан"
              title="Визы в Казахстан"
              subtitle="Профессиональная помощь в подборе и оформлении всех видов виз для иностранных граждан"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <VisaCard
                icon={PlaneTakeoff}
                title="Дипломатические и служебные визы"
                codes={
                  <>
                    <strong>A1</strong> — главы государств и делегации ·{" "}
                    <strong>A2</strong> — сотрудники дипмиссий ·{" "}
                    <strong>A3</strong> — представители иностранных государств
                  </>
                }
                desc="Официальный въезд для дипломатической и служебной деятельности."
              />
              <VisaCard
                icon={TrendingUp}
                title="Инвестиционные визы"
                codes={
                  <>
                    <strong>B1</strong> — инвесторы и представители
                    инвесткомпаний
                  </>
                }
                desc="Для привлечения иностранных инвестиций и ведения инвестиционной деятельности."
              />
              <VisaCard
                icon={Building2}
                title="Бизнес-визы"
                codes={
                  <>
                    <strong>B2</strong> — деловые встречи и конференции ·{" "}
                    <strong>B3</strong> — установка оборудования и услуги
                  </>
                }
                desc="Краткосрочные деловые визиты без оформления трудоустройства."
              />
              <VisaCard
                icon={PlaneTakeoff}
                title="Туристические визы"
                codes={
                  <>
                    <strong>B12</strong> — краткосрочные туристические поездки
                  </>
                }
                desc="Туризм, экскурсии, отдых и изучение достопримечательностей Казахстана."
              />
              <VisaCard
                icon={Stethoscope}
                title="Визы на лечение и частные визиты"
                codes={
                  <>
                    <strong>B10</strong> — лечение · <strong>B11</strong> —
                    частный визит к родственникам
                  </>
                }
                desc="Медицинские услуги, посещение друзей и родственников."
              />
              <VisaCard
                icon={GraduationCap}
                title="Студенческие и учебные визы"
                codes={
                  <>
                    <strong>C9</strong> — учёба в вузах, колледжах,
                    образовательных учреждениях
                  </>
                }
                desc="Для поступающих на программы высшего, среднего и дополнительного образования."
              />
              <VisaCard
                icon={Briefcase}
                title="Рабочие визы"
                codes={
                  <>
                    <strong>C3</strong> — прибытие на работу ·{" "}
                    <strong>C4, C5, C6</strong> — различные категории и сезонные
                    работы
                  </>
                }
                desc="Официальное трудоустройство и разрешение на работу в Казахстане."
              />
              <VisaCard
                icon={Users}
                title="Визы на воссоединение семьи"
                codes={
                  <>
                    <strong>C2</strong> — члены семьи иностранных граждан,
                    проживающих в РК
                  </>
                }
                desc="Для воссоединения супругов, детей и близких родственников."
              />
              <VisaCard
                icon={HomeIcon}
                title="Визы для ПМЖ"
                codes={
                  <>
                    <strong>C10</strong> — для лиц с разрешением на постоянное
                    место жительства
                  </>
                }
                desc="Постоянное проживание и ведение трудовой деятельности в Казахстане."
              />
              <VisaCard
                icon={Monitor}
                title="Электронные визы"
                codes={null}
                desc="Оформление полностью онлайн для туризма, бизнеса и лечения — без посещения консульства."
              />
              <VisaCard
                icon={Laptop}
                title="Digital Nomad виза"
                codes={null}
                desc="Для удалённых специалистов, фрилансеров и IT-экспертов. Работа онлайн со статусом цифрового кочевника."
              />
            </div>
          </div>
        </section>

        {/* ══════ WHY US ══════ */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* sticky title block */}
              <div className="shrink-0 md:sticky md:top-24">
                <div
                  className="rounded-2xl px-8 py-6 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg,#dca7f2,#a855f7,#7c3aed)",
                    boxShadow: "0 8px 32px rgba(168,85,247,.35)",
                    minWidth: 200,
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full opacity-10"
                    viewBox="0 0 200 120"
                  >
                    <circle
                      cx="160"
                      cy="30"
                      r="80"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <circle
                      cx="160"
                      cy="30"
                      r="50"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.6"
                    />
                  </svg>
                  <h2
                    className="text-3xl font-bold text-white whitespace-nowrap relative z-10"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,.2)" }}
                  >
                    Почему мы?
                  </h2>
                </div>
                <div className="flex flex-col gap-1 mt-4">
                  <div
                    className="h-[2px] w-full rounded-full"
                    style={accentBar}
                  />
                  <div
                    className="h-px w-3/4 rounded-full"
                    style={{ background: "rgba(220,167,242,.3)" }}
                  />
                  <div
                    className="h-px w-1/2 rounded-full"
                    style={{ background: "rgba(220,167,242,.15)" }}
                  />
                </div>
              </div>

              {/* cards grid */}
              <div className="grid sm:grid-cols-2 gap-5 flex-1">
                <WhyCard
                  title="Глубокая экспертиза"
                  desc="Специализируемся исключительно на миграционном законодательстве Казахстана и знаем все его нюансы."
                />
                <WhyCard
                  title="20+ лет опыта"
                  desc="С 2005 года помогли более 12 000 иностранным гражданам оформить документы для легального проживания и работы."
                />
                <WhyCard
                  title="Гарантированный результат"
                  desc="Заключаем официальный договор и берём на себя полную ответственность за успешное принятие документов госорганами."
                />
                <WhyCard
                  title="Прозрачные условия"
                  desc="Стоимость фиксируется в договоре с самого начала и не меняется до получения РВП, ВНЖ или гражданства."
                />
                <WhyCard
                  title="Честные консультации"
                  desc="Предоставляем только объективную информацию о вашей ситуации, не предлагая ненужных услуг."
                />
                <WhyCard
                  title="Полное сопровождение"
                  desc="Помогаем не только с консультациями, но и с подготовкой всех документов для получения законного статуса."
                />
                <WhyCard
                  title="Персональный подход"
                  desc="Наши юристы сопровождают вас на всех этапах, взаимодействуют с госорганами и решают возникающие вопросы."
                />
                <WhyCard
                  title="Комфортная коммуникация"
                  desc="Работаем на русском, казахском и английском языках. Переводчик на другой язык — организуем по запросу."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════ GUARANTEES ══════ */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Наши обязательства"
              title="Гарантии"
              subtitle="Мы уверены в качестве своей работы и подкрепляем это конкретными обязательствами"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <GuaranteeCard
                icon={RefreshCw}
                title="Повторная подача без ограничений"
                desc="Если документы не прошли проверку, наши специалисты быстро выявят и исправят все недочёты до успешного принятия госорганами."
              />
              <GuaranteeCard
                icon={BadgeCheck}
                title="Прозрачная стоимость без сюрпризов"
                desc="Цена фиксируется при заключении договора и не меняется до конца. Никаких скрытых платежей и доплат."
              />
              <GuaranteeCard
                icon={ShieldCheck}
                title="Документы по всем требованиям"
                desc="Тщательно проверяем каждую деталь. Все документы оформляются строго по законодательству — безупречное принятие госорганами."
              />
              <GuaranteeCard
                icon={ClipboardCheck}
                title="Гарантированный результат"
                desc="Правильно подготовленный пакет документов будет принят на рассмотрение. Вы получите результат без задержек и сложностей."
              />
            </div>
          </div>
        </section>

        {/* ══════ PAYMENT ══════ */}
        <section className="py-10 md:py-16">
          <PaymentVariants />
        </section>

        {/* ══════ BID FORM ══════ */}
        <div className="pt-10 pb-16">
          <BidForm />
        </div>
      </main>
    </div>
  );
}
