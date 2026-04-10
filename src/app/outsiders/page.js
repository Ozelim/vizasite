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
  color: "#5a2b8a",
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
                  background: `linear-gradient(${gDir},rgba(167,85,247,.24) 0%,rgba(126,34,206,.19) 55%,transparent 85%)`,
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
                  background: `linear-gradient(${gDir},rgba(167,85,247,.28) 0%,rgba(126,34,206,.22) 55%,transparent 90%)`,
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                  borderRadius: "44px",
                  border: "1px solid rgba(167,85,247,.28)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  [edge]: "15%",
                  width: "24%",
                  height: "140%",
                  background: `linear-gradient(${gDir},rgba(167,85,247,.34) 0%,rgba(126,34,206,.26) 50%,transparent 85%)`,
                  transform: `rotate(${deg})`,
                  transformOrigin: R ? "top right" : "top left",
                  borderRadius: "28px",
                  border: "1px solid rgba(167,85,247,.34)",
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
                    "linear-gradient(180deg,transparent 0%,rgba(167,85,247,.68) 20%,rgba(126,34,206,.58) 80%,transparent 100%)",
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
                    "linear-gradient(180deg,transparent 0%,rgba(167,85,247,.42) 40%,transparent 100%)",
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
                  background: "rgba(167,85,247,.82)",
                  boxShadow: "0 0 16px 5px rgba(126,34,206,.54)",
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
        style={{ color: "#5a2b8a" }}
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
      {subtitle && <p className="text-slate-500 max-w-xl">{subtitle}</p>}
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
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mt-4"
              style={gradStyle}
            >
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
                  style: {
                    background: "#5a2b8a",
                    color: "#ffffff",
                    boxShadow: "0 8px 32px rgba(168,85,247,.10)",
                  },
                  className: "px-4 cursor-pointer py-2",
                  size: "lg",
                }}
              />
            </div>
          </div>
          <div className="relative gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden ">
                <Image
                  alt="Almaty Architecture"
                  className="w-full h-full md:object-cover soft-shadow shadow-lg "
                  src="/outsiders-hero.png"
                  height={500}
                  width={500}
                  data-alt="Modern Almaty architecture reflecting city life"
                  style={{
                    objectFit: "contain",
                    // objectFit "cover" will be applied on md and up by the Tailwind class
                  }}
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
                  <span className="font-semibold" style={{ color: "#5a2b8a" }}>
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
                    style={{ color: "#5a2b8a" }}
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
                  style={{ color: "#5a2b8a" }}
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

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Страховые услуги"
              title="Страховой полис для визы"
              subtitle="Подбор и оформление страховых полисов, соответствующих визовым требованиям консульств и визовых центров"
            />

            <div className="grid lg:grid-cols-3 gap-5">
              {/* Что входит в услугу */}
              <div
                className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border relative overflow-hidden flex flex-col group transition-all duration-300"
                style={{
                  borderColor: "rgba(220,167,242,.2)",
                  boxShadow: cardShadow,
                }}
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={iconBg}
                >
                  <ShieldCheck size={24} style={{ color: "#a855f7" }} />
                </div>
                <h3 className="font-bold text-lg mb-4" style={gradStyle}>
                  Что входит в услугу
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    "Подбор полиса, соответствующего визовым требованиям",
                    "Покрытие медицинских расходов на весь период пребывания",
                    "Быстрое оформление — возможна выдача в день обращения",
                    "Подходит для подачи в визовые центры и консульства",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                        style={iconBg}
                      >
                        <CheckCircle2 size={12} style={{ color: "#a855f7" }} />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={accentBar}
                />
              </div>

              {/* Кому подходит */}
              <div
                className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border relative overflow-hidden flex flex-col group transition-all duration-300"
                style={{
                  borderColor: "rgba(220,167,242,.2)",
                  boxShadow: cardShadow,
                }}
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={iconBg}
                >
                  <Users size={24} style={{ color: "#a855f7" }} />
                </div>
                <h3 className="font-bold text-lg mb-4" style={gradStyle}>
                  Кому подходит
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    "Иностранным гражданам, оформляющим визу в Казахстан",
                    "Туристам и бизнес-путешественникам",
                    "Студентам и трудовым мигрантам",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                        style={iconBg}
                      >
                        <CheckCircle2 size={12} style={{ color: "#a855f7" }} />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={accentBar}
                />
              </div>

              {/* Преимущества */}
              <div
                className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border relative overflow-hidden flex flex-col group transition-all duration-300"
                style={{
                  borderColor: "rgba(220,167,242,.2)",
                  boxShadow: cardShadow,
                }}
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={iconBg}
                >
                  <BadgeCheck size={24} style={{ color: "#a855f7" }} />
                </div>
                <h3 className="font-bold text-lg mb-4" style={gradStyle}>
                  Преимущества
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    "Соответствие требованиям миграционного законодательства РК",
                    "Минимальный пакет документов",
                    "Надёжные страховые партнёры",
                    "Консультация и сопровождение при оформлении",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                        style={iconBg}
                      >
                        <CheckCircle2 size={12} style={{ color: "#a855f7" }} />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={accentBar}
                />
              </div>
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
